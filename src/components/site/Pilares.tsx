export default function Pilares() {
  return (
    <section
      id="sobre-katti"
      className="relative py-20 sm:py-28 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif font-bold text-[120px] sm:text-[200px] lg:text-[300px] text-gold/[0.03] whitespace-nowrap">
          KATTI
        </span>
      </div>

      <div className="relative container max-w-7xl px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="reveal">
            <span className="label-eyebrow">Sobre Katti Elleres</span>
            <h2 className="heading-display mb-6">
              Katti Elleres não desenvolve pessoas.
              <br />
              <em className="not-italic font-serif italic text-gold">Ela desperta consciências.</em>
            </h2>
            <p className="body-text mb-4">
              Mentora em comportamento humano e alta performance, Katti atua integrando espiritualidade, comportamento e estratégia para provocar transformação real.
            </p>
            <p className="body-text mb-4">
              Sua comunicação é profunda, direta e intencional, criando ambientes onde pessoas deixam de apenas existir e passam a se posicionar com clareza, consciência e propósito.
            </p>
            <p className="body-text text-gold/80">
              Com participação em ambientes estratégicos ao lado de nomes como Pablo Marçal, Geraldo Rufino, João Adibe e Giovanna Antonelli, Katti vem consolidando uma atuação voltada ao desenvolvimento humano, networking estratégico e construção de posicionamento.
            </p>
          </div>
          
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <div className="bg-[hsl(var(--green-card))] border border-gold/20 p-8 rounded-sm">
              <p className="font-serif text-2xl sm:text-3xl text-cream leading-snug italic mb-6">
                Ambientes certos <em className="not-italic font-serif italic text-gold">transformam destinos</em>.
              </p>
              <p className="text-sm text-foreground/70 mb-4">
                Existem lugares que apenas entretêm.
              </p>
              <p className="text-sm text-foreground/70">
                E existem lugares que despertam.
              </p>
              <p className="text-sm text-gold/80 mt-4">
                Este workshop foi criado para pessoas que entenderam que crescimento real começa na consciência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
