import { ArrowRight, Calendar, MapPin, Users, Sparkles } from "lucide-react";

const wa = (msg: string) =>
  `https://wa.me/5511946033119?text=${encodeURIComponent(msg)}`;

const servicos = [
  {
    icon: Sparkles,
    title: "2º Workshop Conexão com Propósito",
    badge: "⚠️ NR1 & Comportamento",
    badgeTheme: "gold",
    desc: "Um workshop premium para empresários e líderes que desejam fortalecer posicionamento, consciência e conexões estratégicas. Mais do que conteúdo. Uma experiência construída para provocar transformação, visão e relacionamento de alto valor.",
    price: "R$ 127",
    priceFrom: "R$ 254",
    priceSuffix: "/ pessoa",
    cta: "Garantir Vaga com 50% OFF",
    href: wa("Quero garantir minha vaga no Workshop Conexão com Propósito com 50% OFF"),
    featured: true,
  },
  {
    icon: Calendar,
    title: "Data e Horário",
    desc: "27 de maio de 2026, das 19h30 às 21h30. Um encontro estratégico ao fim do dia.",
    cta: "Ver local",
    href: "https://maps.google.com/?q=Moage+Cafe+Belem+PA",
  },
  {
    icon: MapPin,
    title: "Local Premium",
    desc: "Moage Café — Rua Antônio Barreto, 325. Belém, PA. Ambiente sofisticado e intimista.",
    cta: "Ver no mapa",
    href: "https://maps.google.com/?q=Moage+Cafe+Belem+PA",
  },
  {
    icon: Users,
    title: "Grupo Seleto",
    desc: "Evento exclusivo para empresários. Vagas limitadas para garantir qualidade das conexões.",
    cta: "Reservar presença",
    href: wa("Quero garantir minha vaga no Workshop"),
  },
];

export default function Servicos() {
  return (
    <section
      id="workshop"
      className="bg-[hsl(var(--green-mid))] py-20 sm:py-28 lg:py-32"
    >
      <div className="container max-w-7xl px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-14 sm:mb-20 items-start">
          <div className="reveal">
            <span className="label-eyebrow">Sobre o Evento</span>
            <h2 className="heading-display">
              2º Workshop: <em className="not-italic font-serif italic text-gold">Conexão com Propósito</em>
            </h2>
          </div>
          <p className="body-text reveal" style={{ transitionDelay: "100ms" }}>
            Cada detalhe deste workshop foi pensado para criar uma experiência sofisticada, estratégica e memorável. Do ambiente às conexões. Da conversa ao posicionamento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {servicos.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={`group relative bg-[hsl(var(--green-card))] border border-border p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 overflow-hidden flex flex-col reveal ${
                  s.featured ? "sm:col-span-2 lg:col-span-3 ring-2 ring-gold/20" : ""
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="absolute top-0 left-0 w-[3px] h-0 bg-gold group-hover:h-full transition-all duration-500" />

                <div className="w-11 h-11 bg-gold/15 rounded-md flex items-center justify-center mb-6">
                  <Icon size={20} className="text-gold" strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-2xl sm:text-[26px] text-cream mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] font-light leading-[1.85] text-foreground/70 mb-6 flex-1">
                  {s.desc}
                </p>

                {s.price && (
                  <div className="flex items-baseline gap-2 mb-4">
                    {s.priceFrom && (
                      <span className="text-[15px] text-foreground/35 line-through font-sans font-light">
                        {s.priceFrom}
                      </span>
                    )}
                    <span className="font-serif text-3xl sm:text-4xl font-light text-gold">
                      {s.price}{" "}
                      <small className="text-sm font-sans font-light">{s.priceSuffix}</small>
                    </span>
                  </div>
                )}

                {s.badge && (
                  <div className={`inline-block text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded mb-4 font-semibold ${
                    s.badgeTheme === "gold"
                      ? "bg-gold/20 text-gold border border-gold/30"
                      : "bg-gold/10 text-gold/80 border border-gold/20"
                  }`}>
                    {s.badge}
                  </div>
                )}

                <span className="inline-flex items-center gap-2 group-hover:gap-3 transition-all text-[11px] tracking-[0.18em] uppercase text-gold">
                  {s.cta} <ArrowRight size={14} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
