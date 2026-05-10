import { ArrowRight, Calendar, MapPin, Users, Sparkles, CreditCard, MessageCircle, Coffee, Utensils, Handshake, Sparkle } from "lucide-react";

const PAYMENT_LINK = "https://link.infinitepay.io/kattielleres-439/VC1DLTEtUg-127,00";
const WHATSAPP_LINK = "https://wa.me/5511946033119?text=Quero%20saber%20mais%20sobre%20o%20Workshop%20Conexão%20com%20Propósito";

export default function Servicos() {
  return (
    <section
      id="workshop"
      className="bg-[hsl(var(--green-mid))] py-20 sm:py-28 lg:py-32"
    >
      <div className="container max-w-7xl px-6 sm:px-10">
        {/* SOBRE O EVENTO */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-14 sm:mb-20 items-start">
          <div className="reveal">
            <span className="label-eyebrow">Sobre o Evento</span>
            <h2 className="heading-display">
              2º Workshop: <em className="not-italic font-serif italic text-gold">Conexão com Propósito</em>
            </h2>
            <div className="inline-block mt-4 text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded font-semibold bg-gold/20 text-gold border border-gold/30">
              ⚠️ NR1 & Comportamento
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <div className="bg-[hsl(var(--green-card))] border border-gold/20 p-6 rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-gold" />
                <div>
                  <div className="font-serif text-lg text-cream">📅 27/05/2026</div>
                  <div className="text-xs text-foreground/60">⏰ 19h30 às 21h30</div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={20} className="text-gold" />
                <div>
                  <div className="font-serif text-base text-cream">📍 Moage Café</div>
                  <div className="text-xs text-foreground/60">Rua Antônio Barreto, 325 — Belém/PA</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles size={20} className="text-gold" />
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-foreground/40 line-through">🎟️ R$254</span>
                  <span className="font-serif text-2xl text-gold">por apenas R$127</span>
                  <span className="text-[10px] tracking-wider uppercase text-gold bg-gold/15 px-2 py-1 rounded">50% OFF</span>
                </div>
              </div>
              <p className="text-[10px] text-gold/70 mt-3">⚠️ 50% OFF por tempo limitado</p>
            </div>
          </div>
        </div>

        {/* O QUE ESTÁ INCLUSO */}
        <div className="mb-14 sm:mb-20">
          <div className="reveal mb-8">
            <span className="label-eyebrow">O que está incluso</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-cream">
              Tudo pensado para você
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Coffee, text: "☕ Coffee Break Premium" },
              { icon: Utensils, text: "🥐 Experiência gastronômica exclusiva" },
              { icon: Handshake, text: "🤝 Networking de alto valor" },
              { icon: Sparkle, text: "✨ Ambiente sofisticado e estratégico" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="reveal flex items-center gap-3 p-4 bg-[hsl(var(--green-card))] border border-border rounded-sm hover:border-gold/30 transition-colors" style={{ transitionDelay: `${i * 60}ms` }}>
                  <Icon size={20} className="text-gold" />
                  <span className="text-sm text-foreground/80">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* EXPERIÊNCIA PREMIUM */}
        <div className="reveal bg-[hsl(var(--green-card))] border border-gold/20 p-8 sm:p-10 rounded-sm">
          <span className="label-eyebrow">Experiência Premium</span>
          <h3 className="font-serif text-2xl sm:text-3xl text-cream mb-4">
            Cada detalhe foi pensado
          </h3>
          <p className="body-text max-w-2xl mb-4">
            Cada detalhe deste workshop foi pensado para criar uma experiência sofisticada, estratégica e memorável.
          </p>
          <p className="body-text max-w-2xl">
            Do ambiente às conexões. Da conversa ao posicionamento. Tudo foi construído para empresários que valorizam crescimento, relacionamento e visão.
          </p>
        </div>
      </div>
    </section>
  );
}
