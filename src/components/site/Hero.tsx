import heroImg from "@/assets/katti-hero.png";
import { ArrowRight, MessageCircle } from "lucide-react";

const PAYMENT_LINK = "https://link.infinitepay.io/kattielleres-439/VC1DLTEtUg-127,00";
const WA_DOUBTS = "https://wa.me/5511946033119?text=Tenho%20dúvidas%20sobre%20o%20Workshop%20Conexão%20com%20Propósito";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-24 lg:pt-0 grid lg:grid-cols-2 overflow-hidden"
    >
      {/* Left */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-12 lg:py-32 order-2 lg:order-1">
        <span
          className="inline-flex items-center gap-2 self-start border border-gold/40 px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-gold mb-7 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="text-[8px]">⚠️</span> NR1 & Comportamento
        </span>

        <h1
          className="font-serif text-[clamp(2.5rem,7vw,5rem)] leading-[1.05] text-cream animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          EXCLUSIVO PARA
          <br />
          <em className="not-italic font-serif italic text-gold block">EMPRESÁRIOS</em>
        </h1>

        <div
          className="w-14 h-px bg-gold my-7 animate-fade-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        />

        <p
          className="body-text max-w-md mb-4 animate-fade-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          O maior risco não está no ambiente. Está no comportamento.
        </p>

        <p
          className="text-sm sm:text-base text-foreground/70 max-w-md mb-8 animate-fade-up"
          style={{ animationDelay: "0.65s", opacity: 0 }}
        >
          Um workshop premium para empresários e líderes que desejam fortalecer posicionamento, consciência e conexões estratégicas.
        </p>

        {/* Event details card */}
        <div
          className="bg-[hsl(var(--green-card))] border border-gold/20 p-6 rounded-sm max-w-sm mb-8 animate-fade-up"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📅</span>
            <div>
              <div className="font-serif text-lg text-cream">27/05/2026</div>
              <div className="text-xs text-foreground/60">19h30 às 21h30</div>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📍</span>
            <div>
              <div className="font-serif text-base text-cream">Moage Café</div>
              <div className="text-xs text-foreground/60">Rua Antônio Barreto, 325 — Belém/PA</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎟️</span>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-foreground/40 line-through">R$254</span>
              <span className="font-serif text-2xl text-gold">R$127</span>
              <span className="text-[10px] tracking-wider uppercase text-gold bg-gold/15 px-2 py-1 rounded">50% OFF</span>
            </div>
          </div>
        </div>

        {/* CTAs - PRINCIPAL = PAGAMENTO */}
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up"
          style={{ animationDelay: "0.75s", opacity: 0 }}
        >
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-7 py-4 text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all shadow-lg"
          >
            Comprar Agora — R$127 <ArrowRight size={14} />
          </a>
          <a
            href={WA_DOUBTS}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-gold/50 text-gold px-7 py-4 text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle size={14} className="mr-2" /> Tire Dúvidas no WhatsApp
          </a>
        </div>

        <p
          className="text-[10px] text-gold/70 mt-4 animate-fade-up flex items-center gap-1"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          ⚠️ Condição promocional por tempo limitado · Vagas limitadas
        </p>
      </div>

      {/* Right image */}
      <div className="relative order-1 lg:order-2 min-h-[55vh] lg:min-h-screen overflow-hidden">
        <img
          src={heroImg}
          alt="Katti Elleres, mentora e palestrante"
          className="w-full h-full object-cover object-center animate-fade-in opacity-0"
          loading="eager"
        />
        {/* gradient overlays for blending */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, transparent 30%), linear-gradient(to top, hsl(var(--background)) 0%, transparent 25%)",
          }}
        />
        <div className="hidden lg:block absolute left-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-gold to-transparent opacity-40" />
      </div>
    </section>
  );
}
