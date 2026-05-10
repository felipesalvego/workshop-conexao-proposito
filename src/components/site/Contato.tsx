import { ArrowRight, Phone, Mail, Calendar, MapPin, MessageCircle, CreditCard } from "lucide-react";

const PAYMENT_LINK = "https://link.infinitepay.io/kattielleres-439/VC1DLTEtUg-127,00";
const WA_DOUBTS = "https://wa.me/5511946033119?text=Tenho%20dúvidas%20sobre%20o%20Workshop%20Conexão%20com%20Propósito";

const contacts = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 (11) 94603-3119",
    href: WA_DOUBTS,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "kattielleres@gmail.com",
    href: "mailto:kattielleres@gmail.com",
  },
  {
    icon: Calendar,
    label: "Data",
    value: "27/05/2026 · 19h30 às 21h30",
    href: null,
  },
  {
    icon: MapPin,
    label: "Local",
    value: "Moage Café · Belém/PA",
    href: "https://maps.google.com/?q=Moage+Cafe+Belem+PA",
  },
];

export default function Contato() {
  return (
    <section
      id="contato"
      className="py-20 sm:py-28 lg:py-32 bg-background"
    >
      <div className="container max-w-7xl px-6 sm:px-10">
        <div className="text-center mb-14 reveal">
          <span className="label-eyebrow">Garanta Sua Vaga</span>
          <h2 className="heading-display mb-6">
            <em className="not-italic font-serif italic text-gold">50% OFF</em> por tempo limitado
          </h2>
          <p className="body-text max-w-xl mx-auto">
            De <span className="text-foreground/40 line-through">R$254</span> por apenas <span className="text-gold font-semibold">R$127</span>.
          </p>
          <p className="text-xs text-gold/70 mt-2">
            ⚠️ Evento exclusivo para empresários
          </p>
        </div>

        {/* CTA Principal - PAGAMENTO */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 reveal" style={{ transitionDelay: "100ms" }}>
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gold text-primary-foreground px-10 py-5 text-[12px] sm:text-[13px] font-semibold tracking-[0.25em] uppercase hover:bg-gold-light hover:-translate-y-1 transition-all shadow-elegant"
          >
            <CreditCard size={16} /> Comprar Agora — R$127 <ArrowRight size={16} />
          </a>
          <a
            href={WA_DOUBTS}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 border-2 border-gold/50 text-gold px-10 py-5 text-[12px] sm:text-[13px] font-semibold tracking-[0.25em] uppercase hover:border-gold hover:bg-gold/10 hover:-translate-y-1 transition-all"
          >
            <MessageCircle size={16} /> Tire Dúvidas no WhatsApp
          </a>
        </div>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal" style={{ transitionDelay: "150ms" }}>
          {contacts.map((c) => {
            const Icon = c.icon;
            const content = (
              <div className="flex items-start gap-4 p-5 bg-[hsl(var(--green-card))] border border-border rounded-sm hover:border-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.18em] uppercase text-gold mb-1">
                    {c.label}
                  </div>
                  <div className="font-serif text-base text-cream">
                    {c.value}
                  </div>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer">
                {content}
              </a>
            ) : (
              <div key={c.label}>{content}</div>
            );
          })}
        </div>

        {/* Frase final */}
        <div className="text-center mt-16 reveal" style={{ transitionDelay: "200ms" }}>
          <p className="font-serif text-lg sm:text-xl text-cream max-w-xl mx-auto italic">
            "Ambientes certos <em className="not-italic font-serif italic text-gold not-italic">transformam destinos</em>."
          </p>
          <p className="text-sm text-foreground/60 mt-4 max-w-lg mx-auto">
            Este workshop foi criado para pessoas que entenderam que crescimento real começa na consciência.
          </p>
        </div>
      </div>
    </section>
  );
}
