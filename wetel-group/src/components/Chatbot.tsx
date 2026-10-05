'use client';

import { useState } from 'react';
import { MessageCircle, X, Send, Phone, Mail, FileText } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

const quickReplies = [
  { id: 'offres', label: 'Voir les offres', icon: FileText },
  { id: 'contact', label: 'Me contacter', icon: Phone },
  { id: 'rtc', label: 'Fin du RTC ?', icon: MessageCircle },
];

const botResponses: Record<string, string> = {
  offres: "Nous proposons 3 packs adaptés à vos besoins :\n\n📦 Starter Pro (à partir de 59€ HT/mois) - Idéal pour indépendants\n📦 Business Pro (à partir de 99€ HT/mois) - Notre pack le plus populaire\n📦 Entreprise Pro (à partir de 169€ HT/mois) - Pour les équipes\n\nMaintenance et location distinctes selon le devis. Exemple de maintenance : 30€ HT/mois pour assistance + 1 poste + 1 routeur, au mois 13 si la première année est offerte. Souhaitez-vous un devis ?",
  contact: "📞 Téléphone : 01 88 81 22 27\n📱 WhatsApp : 01 89 29 34 21\n✉️ Email : contact@wetelgroup.com\n\nNous sommes disponibles du lundi au vendredi, de 9h à 18h. N'hésitez pas à nous contacter !",
  rtc: "🔔 La fin du RTC (Réseau Téléphonique Commuté) arrive !\n\nLe réseau cuivre historique sera progressivement fermé. Il est temps de migrer vers la téléphonie IP et la fibre.\n\n✅ WETEL GROUP vous accompagne dans cette transition avec un interlocuteur unique et des solutions clés en main.\n\nVoulez-vous un devis gratuit ?",
  default: "Merci pour votre message ! Pour une réponse personnalisée, contactez-nous au 01 88 81 22 27 ou par email à contact@wetelgroup.com",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Bonjour ! 👋 Je suis l'assistant virtuel de WETEL GROUP. Comment puis-je vous aider ?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleQuickReply = (replyId: string) => {
    const userMessage = quickReplies.find((r) => r.id === replyId)?.label || '';
    const botResponse = botResponses[replyId] || botResponses.default;

    setMessages((prev) => [
      ...prev,
      { text: userMessage, isBot: false },
      { text: botResponse, isBot: true },
    ]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages((prev) => [
      ...prev,
      { text: userMessage, isBot: false },
      { text: botResponses.default, isBot: true },
    ]);
    setInputValue('');
  };

  return (
    <>
      {/* Chat Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-wetel-orange to-wetel-orange-dark rounded-full shadow-glow-md flex items-center justify-center transition-all duration-300 hover:shadow-glow-lg hover:scale-110 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white animate-pulse" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] transition-all duration-500 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{ transformOrigin: 'bottom right' }}
      >
        <div className="bg-wetel-surface border border-wetel-line rounded-2xl shadow-2xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-wetel-orange to-wetel-orange-dark p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">WETEL Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/90 text-xs">En ligne</span>
                </div>
              </div>
            </div>
            <button
              aria-label="Fermer le chat"
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-wetel-surface-soft/50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in-up`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-wetel-line text-wetel-ink'
                      : 'bg-gradient-to-r from-wetel-orange to-wetel-orange-dark text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.id}
                    onClick={() => handleQuickReply(reply.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-wetel-line hover:bg-wetel-orange/20 border border-wetel-line-strong hover:border-wetel-orange text-wetel-ink text-sm rounded-full transition-all duration-300"
                  >
                    <reply.icon className="w-4 h-4" />
                    {reply.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 bg-wetel-surface border-t border-wetel-line">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Votre message..."
                className="flex-1 px-4 py-3 bg-wetel-surface-soft text-wetel-ink placeholder-wetel-muted border border-wetel-line rounded-xl focus:outline-none focus:border-wetel-orange transition-colors text-sm"
              />
              <button
                aria-label="Envoyer le message"
                type="submit"
                className="p-3 bg-gradient-to-r from-wetel-orange to-wetel-orange-dark hover:shadow-glow-md rounded-xl transition-all duration-300"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
