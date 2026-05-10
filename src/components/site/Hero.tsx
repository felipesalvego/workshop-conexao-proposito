import heroImg from "@/assets/katti-hero.png";
import { ArrowRight } from "lucide-react";

const PAYMENT_LINK = "https://link.infinitepay.io/kattielleres-439/VC1DLTEtUg-127,00";
const WHATSAPP_LINK = "https://wa.me/5511946033119?text=Quero%20saber%20mais%20sobre%20o%20Workshop%20Conexão%20com%20Propósito";

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
          className="text-sm sm:text-base text-foreground/70 max-w-md mb-4 animate-fade-up"
          style={{ animationDelay: "0.65s", opacity: 0 }}
        >
          Um workshop premium para empresários e líderes que desejam fortalecer posicionamento, consciência e conexões estratégicas.
        </p>

        <p
          className="text-sm sm:text-base text-foreground/70 max-w-md mb-8 animate-fade-up"
          style={{ animationDelay: "0.68s", opacity: 0 }}
        >
          Mais do que conteúdo. Uma experiência construída para provocar transformação, visão e relacionamento de alto valor.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up"
          style={{ animationDelay: "0.75s", opacity: 0 }}
        >
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-7 py-4 text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all"
          >
            Comprar Agora com 50% OFF <ArrowRight size={14} />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-gold/50 text-gold px-7 py-4 text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5 transition-all"
          >
            Saiba Mais
          </a>
        </div>

        <p
          className="text-[10px] text-gold/70 mt-4 animate-fade-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          ⚠️ Condição promocional por tempo limitado
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
