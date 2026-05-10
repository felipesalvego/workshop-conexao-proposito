import heroImg from "@/assets/katti-hero.png";
import { ArrowRight, Calendar, MapPin, Clock, Users, AlertTriangle } from "lucide-react";

const PAYMENT_LINK = "https://link.infinitepay.io/kattielleres-439/VC1DLTEtUg-127,00";
const WHATSAPP_LINK = "https://wa.me/5511946033119?text=Quero%20saber%20mais%20sobre%20o%20Workshop%20Conexão%20com%20Propósito";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-20 lg:pt-0 grid lg:grid-cols-2 overflow-hidden"
    >
      {/* Left - Conteúdo */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-10 lg:py-24 order-2 lg:order-1">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-6 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <span className="inline-flex items-center gap-1.5 border border-gold/40 px-3 py-1.5 rounded-full text-[10px] font-medium tracking-[0.2em] uppercase text-gold">
            ⚠️ NR1 & Comportamento
          </span>
        </div>

        <h1
          className="font-serif text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.1] text-cream mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          EXCLUSIVO PARA
          <br />
          <em className="not-italic font-serif italic text-gold">EMPRESÁRIOS</em>
        </h1>

        <p
          className="text-base sm:text-lg text-foreground/80 max-w-lg mb-4 animate-fade-up leading-relaxed"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          O maior risco não está no ambiente. Está no comportamento.
        </p>

        <p
          className="text-sm text-foreground/60 max-w-lg mb-8 animate-fade-up"
          style={{ animationDelay: "0.35s", opacity: 0 }}
        >
          Um workshop premium para empresários e líderes que desejam fortalecer posicionamento, consciência e conexões estratégicas.
        </p>

        {/* Card de Oferta - Design melhorado */}
        <div
          className="bg-gradient-to-br from-[hsl(var(--green-card))] to-gold/5 border-2 border-gold/30 p-6 sm:p-8 rounded-lg max-w-md mb-8 animate-fade-up relative overflow-hidden"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          {/* Badge 50% OFF */}
          <div className="absolute top-0 right-0 bg-gold text-primary-foreground px-4 py-1.5 text-[10px] font-bold tracking-wider uppercase rounded-bl-lg">
            50% OFF
          </div>

          <div className="space-y-4">
            {/* Data e Local */}
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-gold flex-shrink-0" />
              <div>
                <div className="font-serif text-lg text-cream">27/05/2026</div>
                <div className="text-xs text-foreground/50">19h30 às 21h30</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-gold flex-shrink-0" />
              <div>
                <div className="font-serif text-base text-cream">Moage Café</div>
                <div className="text-xs text-foreground/50">Rua Antônio Barreto, 325 — Belém/PA</div>
              </div>
            </div>

            {/* Preço */}
            <div className="pt-4 border-t border-gold/20">
              <div className="flex items-baseline gap-3">
                <span className="text-lg text-foreground/40 line-through">R$254</span>
                <span className="font-serif text-4xl text-gold font-medium">R$127</span>
                <span className="text-xs text-foreground/50">por pessoa</span>
              </div>
              <p className="text-[10px] text-gold/80 mt-2 flex items-center gap-1">
                <AlertTriangle size={10} /> Condição promocional por tempo limitado
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 animate-fade-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-8 py-4 text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all shadow-lg"
          >
            Comprar Agora — R$127 <ArrowRight size={14} />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-gold/60 text-gold px-8 py-4 text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5 transition-all"
          >
            Tire Dúvidas no WhatsApp
          </a>
        </div>
      </div>

      {/* Right image - SEM overlay */}
      <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-screen overflow-hidden">
        <img
          src={heroImg}
          alt="Katti Elleres, mentora e palestrante"
          className="w-full h-full object-cover object-center animate-fade-in opacity-0"
          loading="eager"
        />
      </div>
    </section>
  );
}
