const itens = [
  {
    n: "01",
    title: "Networking Estratégico",
    desc: "Conexões intencionais com empresários e líderes que buscam crescimento real, não apenas contatos superficiais.",
  },
  {
    n: "02",
    title: "Reflexões sobre Comportamento",
    desc: "Consciência como ponto de partida. Comportamento, ambiente e posicionamento impactando resultados diretamente.",
  },
  {
    n: "03",
    title: "Ambiente Premium e Intimista",
    desc: "Moage Café, Belém. Um espaço sofisticado e estratégico, pensado para experiências memoráveis.",
  },
  {
    n: "04",
    title: "Conexões com Empresários",
    desc: "Um grupo seleto de pessoas que entenderam que crescimento real começa na consciência.",
  },
  {
    n: "05",
    title: "Experiência Sofisticada",
    desc: "Cada detalhe pensado para criar uma experiência sofisticada, estratégica e memorável.",
  },
];

export default function Pilares() {
  return (
    <section
      id="experiencia"
      className="relative py-20 sm:py-28 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif font-bold text-[120px] sm:text-[200px] lg:text-[300px] text-gold/[0.03] whitespace-nowrap">
          EXPERIÊNCIA
        </span>
      </div>

      <div className="relative container max-w-7xl px-6 sm:px-10">
        <div className="text-center mb-14 sm:mb-20 reveal">
          <span className="label-eyebrow">O Que Você Vai Viver</span>
          <h2 className="heading-display">
            Uma experiência <em className="not-italic font-serif italic text-gold">transformadora</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {itens.map((p, i) => (
            <article
              key={p.n}
              className="group relative bg-[hsl(var(--green-card))] p-8 sm:p-10 transition-all hover:bg-gold/5 reveal overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-serif text-5xl font-light text-gold/20 leading-none mb-5">
                {p.n}
              </div>
              <h3 className="font-serif text-2xl text-cream mb-3 leading-tight">{p.title}</h3>
              <p className="text-[13px] font-light leading-[1.8] text-foreground/70">{p.desc}</p>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>

        {/* Frase de impacto */}
        <div className="mt-16 text-center reveal">
          <p className="font-serif text-xl sm:text-2xl text-cream max-w-2xl mx-auto">
            Segurança começa na <em className="not-italic font-serif italic text-gold">consciência</em>.
          </p>
          <p className="text-sm text-foreground/60 mt-4 max-w-xl mx-auto">
            Enquanto muitos enxergam a NR1 apenas como obrigação, quem possui visão entende que comportamento, ambiente e posicionamento impactam diretamente resultados, relações e crescimento.
          </p>
        </div>
      </div>
    </section>
  );
}
