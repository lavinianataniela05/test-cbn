'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type: 'text' | 'options' | 'services' | 'contact' | 'pricing';
  options?: string[];
  quickReplies?: string[];
}

interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  priceRange?: string;
}

export default function InteractiveChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Data layanan CBN
  const services: Service[] = [
    {
      id: 'internet',
      name: 'Internet & Connectivity',
      description: 'Koneksi internet dedicated dan broadband untuk bisnis',
      features: ['Dedicated Internet Access', 'Broadband Business', 'Wireless Connectivity', 'SD-WAN'],
      priceRange: 'Rp 1.5 - 15 juta/bulan'
    },
    {
      id: 'datacenter',
      name: 'Data Center Services',
      description: 'Colocation dan managed hosting dengan tier 3+',
      features: ['Colocation Services', 'Cloud Hosting', 'Disaster Recovery', 'Managed Services'],
      priceRange: 'Rp 5 - 50 juta/bulan'
    },
    {
      id: 'cloud',
      name: 'Cloud Solutions',
      description: 'Solusi cloud comprehensive untuk transformasi digital',
      features: ['Private Cloud', 'Public Cloud', 'Hybrid Cloud', 'Cloud Migration'],
      priceRange: 'Rp 2 - 20 juta/bulan'
    },
    {
      id: 'security',
      name: 'Network Security',
      description: 'Proteksi keamanan siber untuk bisnis Anda',
      features: ['Firewall Services', 'DDoS Protection', 'Security Monitoring', 'Compliance'],
      priceRange: 'Rp 3 - 25 juta/bulan'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: 'Halo! 👋 Saya Asisten Virtual CBN. Ada yang bisa saya bantu hari ini?',
        isUser: false,
        timestamp: new Date(),
        type: 'options',
        options: ['Layanan CBN', 'Harga & Paket', 'Cara Daftar', 'Kontak & Support']
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const handleQuickReply = (reply: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: reply,
      isUser: true,
      timestamp: new Date(),
      type: 'text'
    };
    
    setMessages(prev => [...prev, userMessage]);
    processBotResponse(reply);
  };

  const processBotResponse = async (userMessage: string) => {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    let botResponse: Message;
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('layanan') || lowerMessage.includes('service') || lowerMessage.includes('produk')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: 'Berikut adalah layanan-layanan unggulan CBN:',
        isUser: false,
        timestamp: new Date(),
        type: 'services',
        quickReplies: ['Internet & Connectivity', 'Data Center', 'Cloud Solutions', 'Network Security', 'Kembali ke Menu Utama']
      };
    }
    else if (lowerMessage.includes('harga') || lowerMessage.includes('biaya') || lowerMessage.includes('tarif') || lowerMessage.includes('berapa')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: 'Harga layanan CBN bervariasi tergantung kebutuhan bisnis Anda. Berikut perkiraan range harga:',
        isUser: false,
        timestamp: new Date(),
        type: 'pricing',
        quickReplies: ['Internet Business', 'Data Center', 'Cloud Services', 'Konsultasi Gratis', 'Kembali ke Menu Utama']
      };
    }
    else if (lowerMessage.includes('daftar') || lowerMessage.includes('cara') || lowerMessage.includes('langganan') || lowerMessage.includes('order')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: 'Untuk berlangganan layanan CBN, berikut prosesnya:\n\n📋 **Proses Pendaftaran:**\n1. Konsultasi kebutuhan dengan sales kami\n2. Survey lokasi (jika diperlukan)\n3. Penawaran harga dan kontrak\n4. Instalasi dan setup\n5. Support 24/7\n\n⏱️ **Waktu Proses:** 3-7 hari kerja\n\nMau saya hubungkan dengan tim sales?',
        isUser: false,
        timestamp: new Date(),
        type: 'options',
        options: ['Hubungi Sales', 'Request Survey', 'Lihat Layanan', 'Kembali ke Menu Utama']
      };
    }
    else if (lowerMessage.includes('kontak') || lowerMessage.includes('hubungi') || lowerMessage.includes('telepon') || lowerMessage.includes('alamat')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: '**Kontak CBN:**\n\n📍 **Alamat:**\nCBN Building, Jl. Letjen S. Parman Kav. 89\nJakarta Barat 11420\n\n📞 **Telepon:**\n+62 21 1234 5678\n\n📧 **Email:**\ninfo@cbn.id\n\n🌐 **Website:**\nwww.cbn.id\n\n🕒 **Jam Operasional:**\nSenin - Jumat: 08:00 - 17:00 WIB',
        isUser: false,
        timestamp: new Date(),
        type: 'contact',
        quickReplies: ['Telepon Sekarang', 'Kirim Email', 'Request Callback', 'Kembali ke Menu Utama']
      };
    }
    else if (lowerMessage.includes('internet')) {
      const internetService = services.find(s => s.id === 'internet');
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: `**${internetService?.name}**\n\n${internetService?.description}\n\n**Fitur Utama:**\n${internetService?.features.map(f => `• ${f}`).join('\n')}\n\n**Kisaran Harga:** ${internetService?.priceRange}\n\nMau informasi lebih detail atau konsultasi?`,
        isUser: false,
        timestamp: new Date(),
        type: 'options',
        options: ['Detail Teknis', 'Request Demo', 'Bandingkan Paket', 'Kembali ke Layanan']
      };
    }
    else if (lowerMessage.includes('data center') || lowerMessage.includes('datacenter')) {
      const dcService = services.find(s => s.id === 'datacenter');
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: `**${dcService?.name}**\n\n${dcService?.description}\n\n**Fitur Utama:**\n${dcService?.features.map(f => `• ${f}`).join('\n')}\n\n**Kisaran Harga:** ${dcService?.priceRange}\n\n**Uptime Guarantee:** 99.982%`,
        isUser: false,
        timestamp: new Date(),
        type: 'options',
        options: ['Spesifikasi Teknis', 'Visit Data Center', 'Request Quote', 'Kembali ke Layanan']
      };
    }
    else if (lowerMessage.includes('cloud')) {
      const cloudService = services.find(s => s.id === 'cloud');
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: `**${cloudService?.name}**\n\n${cloudService?.description}\n\n**Fitur Utama:**\n${cloudService?.features.map(f => `• ${f}`).join('\n')}\n\n**Kisaran Harga:** ${cloudService?.priceRange}\n\n**Support:** 24/7 Cloud Support Team`,
        isUser: false,
        timestamp: new Date(),
        type: 'options',
        options: ['Cloud Migration', 'Free Trial', 'Technical Spec', 'Kembali ke Layanan']
      };
    }
    else if (lowerMessage.includes('kembali') || lowerMessage.includes('menu') || lowerMessage.includes('utama')) {
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: 'Baik, kembali ke menu utama. Ada yang bisa saya bantu?',
        isUser: false,
        timestamp: new Date(),
        type: 'options',
        options: ['Layanan CBN', 'Harga & Paket', 'Cara Daftar', 'Kontak & Support']
      };
    }
    else {
      botResponse = {
        id: (Date.now() + 1).toString(),
        text: `Saya mengerti Anda bertanya tentang "${userMessage}". Sebagai asisten CBN, saya bisa membantu Anda dengan:\n\n• Informasi layanan dan produk CBN\n• Perbandingan harga dan paket\n• Proses pendaftaran dan instalasi\n• Informasi kontak dan support\n\nPilih salah satu opsi di bawah atau tanyakan langsung ya!`,
        isUser: false,
        timestamp: new Date(),
        type: 'options',
        options: ['Lihat Layanan', 'Cek Harga', 'Cara Daftar', 'Hubungi Kami']
      };
    }

    setMessages(prev => [...prev, botResponse]);
    setIsLoading(false);
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    await processBotResponse(inputMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleOptionSelect = (option: string) => {
    handleQuickReply(option);
  };

  const handleContactAction = (action: string) => {
    switch (action) {
      case 'Telepon Sekarang':
        window.open('tel:+622112345678');
        break;
      case 'Kirim Email':
        window.open('mailto:info@cbn.id');
        break;
      case 'Request Callback':
        handleQuickReply('Saya ingin request callback dari sales');
        break;
      default:
        handleQuickReply(action);
    }
  };

  const renderMessage = (message: Message) => {
    switch (message.type) {
      case 'options':
        return (
          <div className="space-y-3">
            <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
            <div className="grid grid-cols-2 gap-2">
              {message.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded-lg transition-colors duration-200 text-center"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="space-y-4">
            <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
            <div className="grid grid-cols-1 gap-2">
              {services.map(service => (
                <div key={service.id} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-800 text-sm">{service.name}</h4>
                  <p className="text-xs text-blue-600 mt-1">{service.description}</p>
                  <button
                    onClick={() => handleQuickReply(service.name)}
                    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded transition-colors duration-200"
                  >
                    Detail
                  </button>
                </div>
              ))}
            </div>
            {message.quickReplies && (
              <div className="flex flex-wrap gap-2 mt-3">
                {message.quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs py-1 px-3 rounded-full transition-colors duration-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>
        );

      case 'pricing':
        return (
          <div className="space-y-4">
            <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
            <div className="space-y-3">
              {services.map(service => (
                <div key={service.id} className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-green-800 text-sm">{service.name}</h4>
                      <p className="text-xs text-green-600 mt-1">{service.priceRange}</p>
                    </div>
                    <button
                      onClick={() => handleQuickReply('Konsultasi Gratis')}
                      className="bg-green-600 hover:bg-green-700 text-white text-xs py-1 px-2 rounded transition-colors duration-200"
                    >
                      Konsultasi
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {message.quickReplies && (
              <div className="flex flex-wrap gap-2 mt-3">
                {message.quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs py-1 px-3 rounded-full transition-colors duration-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-4">
            <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleContactAction('Telepon Sekarang')}
                className="bg-green-600 hover:bg-green-700 text-white text-xs py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1"
              >
                <span>📞</span> Telepon
              </button>
              <button
                onClick={() => handleContactAction('Kirim Email')}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1"
              >
                <span>✉️</span> Email
              </button>
              <button
                onClick={() => handleContactAction('Request Callback')}
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1 col-span-2"
              >
                <span>🔄</span> Request Callback
              </button>
            </div>
            {message.quickReplies && (
              <div className="flex flex-wrap gap-2 mt-3">
                {message.quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs py-1 px-3 rounded-full transition-colors duration-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return (
          <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
        );
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">CBN</span>
                </div>
                <div>
                  <h3 className="font-semibold">CBN Assistant</h3>
                  <p className="text-blue-100 text-sm">Online • Siap Membantu</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 ${
                      message.isUser
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                    }`}
                  >
                    {renderMessage(message)}
                    <p className={`text-xs mt-2 ${message.isUser ? 'text-blue-200' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString('id-ID', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none p-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm">Asisten CBN sedang mengetik...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ketik pertanyaan Anda..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-3 rounded-lg transition-colors duration-200 flex items-center justify-center disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {['Layanan?', 'Harga?', 'Cara Daftar?', 'Kontak?'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleQuickReply(suggestion)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs py-1 px-3 rounded-full transition-colors duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}