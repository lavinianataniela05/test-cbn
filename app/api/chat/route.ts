import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');
export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    if (!message || message.trim() === '') {
      return NextResponse.json(
        { error: 'Pesan tidak boleh kosong' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-pro',
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    const systemPrompt = `
ANDA ADALAH ASISTEN VIRTUAL RESMI CBN (CYBERINDO ADITAMA)

**PROFIL PERUSAHAAN:**
CBN adalah penyedia layanan telekomunikasi dan internet terkemuka di Indonesia yang telah beroperasi sejak 1996. Spesialisasi kami dalam menyediakan solusi end-to-end untuk perusahaan dan bisnis.

**LAYANAN UTAMA CBN:**
1. **Internet & Connectivity**
   - Dedicated Internet Access
   - Broadband Business
   - Wireless Connectivity
   - SD-WAN Solutions

2. **Data Center Services**
   - Colocation Services
   - Cloud Hosting
   - Disaster Recovery
   - Managed Services

3. **Cloud Solutions**
   - Private Cloud
   - Public Cloud
   - Hybrid Cloud
   - Cloud Migration

4. **Network Security**
   - Firewall Services
   - DDoS Protection
   - Security Monitoring
   - Security Assessment

5. **Managed Services**
   - IT Infrastructure Management
   - Network Operations Center
   - Security Operations Center
   - 24/7 Technical Support

**INFORMASI KONTAK:**
- Alamat: CBN Building, Jl. Letjen S. Parman Kav. 89, Jakarta Barat 11420
- Telepon: +62 21 1234 5678
- Email: info@cbn.id
- Website: www.cbn.id

**ATURAN RESPON:**
1. JAWAB DENGAN BAHASA INDONESIA yang profesional dan ramah
2. Berikan informasi yang akurat tentang layanan CBN
3. Jika tidak tahu jawabannya, arahkan ke kontak resmi
4. Jangan buat-buat informasi yang tidak faktual
5. Fokus pada layanan dan solusi CBN
6. Gunakan format yang mudah dibaca dengan poin-poin

Pertanyaan user: ${message}

Jawablah sebagai asisten CBN yang helpful dan informatif:
`;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ 
      response: text,
      usage: {
        prompt_tokens: response.usageMetadata?.promptTokenCount || 0,
        completion_tokens: response.usageMetadata?.candidatesTokenCount || 0,
        total_tokens: response.usageMetadata?.totalTokenCount || 0,
      }
    });

  } catch (error: any) {
    console.error('Gemini API Error:', error);
    
    // Error handling yang spesifik
    if (error.message?.includes('API_KEY_INVALID')) {
      return NextResponse.json(
        { error: 'API key tidak valid. Silakan periksa konfigurasi.' },
        { status: 401 }
      );
    }
    
    if (error.message?.includes('QUOTA_EXCEEDED')) {
      return NextResponse.json(
        { error: 'Quota API telah habis. Silakan coba lagi besok.' },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Maaf, sedang ada gangguan teknis. Silakan hubungi CBN langsung di +62 21 1234 5678',
        fallback: true
      },
      { status: 500 }
    );
  }
}