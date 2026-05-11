import { ArrowRight, Phone, Mail, Calendar, MapPin, MessageCircle, CreditCard } from "lucide-react";

const PAYMENT_LINK = "https://link.infinitepay.io/kattielleres-439/VC1DLTEtUg-127,00";
const WHATSAPP_LINK = "https://wa.me/5511946033119?text=Quero%20saber%20mais%20sobre%20o%20Workshop%20Conexão%20com%20Propósito";

export default function Contato() {
  return (
    <section
      id="contato"
      className="py-20 sm:py-28 lg:py-32 bg-background"
    >
      <div className="container max-w-7xl px-6 sm:px-10">
        <div className="text-center mb-14 reveal">
          <h2 className="heading-display mb-6">
            Garanta sua vaga com <em className="not-italic font-serif italic text-gold">50% OFF</em>
          </h2>
          <p className="body-text max-w-xl mx-auto">
            De <span className="text-foreground/40 line-through">R$254</span> por apenas <span className="text-gold font-semibold">R$127</span>.
          </p>
          <p className="text-xs text-gold/70 mt-2">
            ⚠️ Evento exclusivo para empresários
          </p>
          <p className="text-xs text-gold/70 mt-1">
            ⚠️ Condição especial válida por tempo limitado
          </p>
        </div>

        {/* CTA Principal */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 reveal" style={{ transitionDelay: "100ms" }}>
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gold text-primary-foreground px-10 py-5 text-[12px] sm:text-[13px] font-semibold tracking-[0.25em] uppercase hover:bg-gold-light hover:-translate-y-1 transition-all shadow-elegant"
          >
            <CreditCard size={16} /> Garanta agora sua presença <ArrowRight size={16} />
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 border-2 border-gold/50 text-gold px-10 py-5 text-[12px] sm:text-[13px] font-semibold tracking-[0.25em] uppercase hover:border-gold hover:bg-gold/10 hover:-translate-y-1 transition-all"
          >
            <MessageCircle size={16} /> Saiba Mais
          </a>
        </div>

        {/* Frase final */}
        <div className="text-center reveal" style={{ transitionDelay: "200ms" }}>
          <p className="font-serif text-lg sm:text-xl text-cream max-w-xl mx-auto italic">
            "Ambientes certos <em className="not-italic font-serif italic text-gold">transformam destinos</em>."
          </p>
          <p className="text-sm text-foreground/60 mt-4 max-w-lg mx-auto">
            Existem lugares que apenas entretêm. E existem lugares que despertam.
          </p>
          <p className="text-sm text-foreground/60 mt-2 max-w-lg mx-auto">
            Este workshop foi criado para pessoas que entenderam que crescimento real começa na consciência.
          </p>
        </div>
      </div>
    </section>
  );
}
