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

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Data layanan CBN - konsisten dengan ServicesSection
  const services: Service[] = [
    {
      id: 'internet',
      name: 'Internet & Connectivity',
      description: 'High-speed broadband internet solutions for businesses with guaranteed SLA and 24/7 support',
      features: ['Dedicated Internet Access', 'Broadband Business', 'Wireless Connectivity', 'SD-WAN Solutions'],
      priceRange: 'Rp 1.5 - 15 juta/bulan'
    },
    {
      id: 'datacenter',
      name: 'Data Center Services',
      description: 'Tier 3+ data center facilities with maximum security, reliability, and scalability',
      features: ['Colocation Services', 'Cloud Hosting', 'Disaster Recovery', 'Managed Services'],
      priceRange: 'Rp 5 - 50 juta/bulan'
    },
    {
      id: 'cloud',
      name: 'Cloud Solutions',
      description: 'Comprehensive cloud services including IaaS, PaaS, and SaaS for digital transformation',
      features: ['Private Cloud', 'Public Cloud', 'Hybrid Cloud', 'Cloud Migration'],
      priceRange: 'Rp 2 - 20 juta/bulan'
    },
    {
      id: 'security',
      name: 'Network Security',
      description: 'Advanced cybersecurity solutions to protect your digital assets and business data',
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

    // Simulate API call delay
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
        quickReplies: ['Internet & Connectivity', 'Data Center Services', 'Cloud Solutions', 'Network Security', 'Kembali ke Menu Utama']
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
        text: '**Kontak CBN:**\n\n📍 **Alamat:**\nCBN Building, Jl. Letjen S. Parman Kav. 89\nJakarta Barat 11420\n\n📞 **Telepon:**\n1500 123 (Toll Free)\n\n📧 **Email:**\ninfo@cbn.id\n\n🌐 **Website:**\nwww.cbn.id\n\n🕒 **Jam Operasional:**\nSenin - Jumat: 08:00 - 17:00 WIB',
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
        text: `**${internetService?.name}**\n\n${internetService?.description}\n\n**Fitur Utama:**\n${internetService?.features.map(f => `• ${f}`).join('\n')}\n\n**Kisaran Harga:** ${internetService?.priceRange}\n\n**SLA Guarantee:** 99.9% Uptime\n\nMau informasi lebih detail atau konsultasi?`,
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
        text: `**${dcService?.name}**\n\n${dcService?.description}\n\n**Fitur Utama:**\n${dcService?.features.map(f => `• ${f}`).join('\n')}\n\n**Kisaran Harga:** ${dcService?.priceRange}\n\n**Uptime Guarantee:** 99.982% (Tier 3+)`,
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
        window.open('tel:1500123');
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
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs py-2 px-3 rounded-lg transition-all duration-200 text-center font-medium shadow-md shadow-cyan-500/25"
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
                <div key={service.id} className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-3">
                  <h4 className="font-semibold text-cyan-800 text-sm">{service.name}</h4>
                  <p className="text-xs text-cyan-600 mt-1">{service.description}</p>
                  <button
                    onClick={() => handleQuickReply(service.name)}
                    className="mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs py-1 px-2 rounded transition-all duration-200 shadow-sm"
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
                    className="bg-cyan-50 hover:bg-cyan-100 text-cyan-700 border border-cyan-200 text-xs py-1 px-3 rounded-full transition-all duration-200"
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
                <div key={service.id} className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-cyan-800 text-sm">{service.name}</h4>
                      <p className="text-xs text-cyan-600 mt-1">{service.priceRange}</p>
                    </div>
                    <button
                      onClick={() => handleQuickReply('Konsultasi Gratis')}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs py-1 px-2 rounded transition-all duration-200 shadow-sm"
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
                    className="bg-cyan-50 hover:bg-cyan-100 text-cyan-700 border border-cyan-200 text-xs py-1 px-3 rounded-full transition-all duration-200"
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
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white text-xs py-2 px-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 shadow-md shadow-cyan-500/25"
              >
                <span>📞</span> Telepon
              </button>
              <button
                onClick={() => handleContactAction('Kirim Email')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs py-2 px-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 shadow-md shadow-blue-500/25"
              >
                <span>✉️</span> Email
              </button>
              <button
                onClick={() => handleContactAction('Request Callback')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs py-2 px-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 col-span-2 shadow-md shadow-cyan-500/25"
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
                    className="bg-cyan-50 hover:bg-cyan-100 text-cyan-700 border border-cyan-200 text-xs py-1 px-3 rounded-full transition-all duration-200"
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
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group animate-bounce shadow-cyan-500/25"
        >
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col z-50 border border-cyan-200/50 overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-t-2xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-bold text-sm">CBN</span>
                </div>
                <div>
                  <h3 className="font-semibold">CBN Assistant</h3>
                  <p className="text-cyan-100 text-sm">Online • Siap Membantu</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-cyan-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-cyan-50/30">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 ${
                      message.isUser
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-none shadow-md shadow-cyan-500/25'
                        : 'bg-white text-gray-800 border border-cyan-200/50 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {renderMessage(message)}
                    <p className={`text-xs mt-2 ${message.isUser ? 'text-cyan-200' : 'text-gray-500'}`}>
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
                  <div className="bg-white border border-cyan-200/50 rounded-2xl rounded-bl-none p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm">Asisten CBN sedang mengetik...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input area */}
          <div className="p-4 border-t border-cyan-200/50 bg-white/80 backdrop-blur-sm rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ketik pertanyaan Anda..."
                className="flex-1 border border-cyan-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm bg-white/50"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:bg-gray-400 text-white p-3 rounded-lg transition-all duration-200 flex items-center justify-center disabled:cursor-not-allowed shadow-md shadow-cyan-500/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            
            {/* Quick suggestions */}
            <div className="flex flex-wrap gap-2 mt-3">
              {['Layanan?', 'Harga?', 'Cara Daftar?', 'Kontak?'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleQuickReply(suggestion)}
                  className="bg-cyan-50 hover:bg-cyan-100 text-cyan-700 border border-cyan-200 text-xs py-1 px-3 rounded-full transition-all duration-200"
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