export default function Pilares() {
  return (
    <section
      id="pilares"
      className="relative py-20 sm:py-28 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif font-bold text-[120px] sm:text-[200px] lg:text-[300px] text-gold/[0.03] whitespace-nowrap">
          EXPERIÊNCIA
        </span>
      </div>

      <div className="relative container max-w-7xl px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="reveal">
            <span className="label-eyebrow">O que você vai viver</span>
            <h2 className="heading-display mb-6">
              Uma experiência <em className="not-italic font-serif italic text-gold">transformadora</em>
            </h2>
            <p className="body-text mb-4">
              Cada detalhe foi pensado para gerar conexão, consciência e posicionamento de alto valor.
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Networking de alto nível</li>
              <li>Reflexões sobre comportamento</li>
              <li>Ambiente premium e intimista</li>
              <li>Ferramentas práticas para aplicação imediata</li>
            </ul>
          </div>
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <div className="bg-[hsl(var(--green-card))] border border-gold/20 p-8 rounded-sm">
              <p className="font-serif text-2xl sm:text-3xl text-cream italic mb-6">
                Ambientes certos <em className="not-italic font-serif italic text-gold">transformam destinos</em>.
              </p>
              <p className="text-sm text-foreground/70 mb-2">
                Não é só conteúdo, é vivência que desperta a consciência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
