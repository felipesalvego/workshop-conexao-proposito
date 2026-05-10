import portrait from "@/assets/katti-portrait.png";
import { ArrowRight, CreditCard } from "lucide-react";

const PAYMENT_LINK = "https://link.infinitepay.io/kattielleres-439/VC1DLTEtUg-127,00";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-[hsl(var(--green-mid))] py-20 sm:py-28 lg:py-32"
    >
      <div className="container max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-24 items-center px-6 sm:px-10">
        <div className="relative reveal order-2 lg:order-1">
          <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-gold/25 rounded-sm hidden sm:block" />
          <img
            src={portrait}
            alt="Retrato de Katti Elleres"
            className="relative w-full object-cover rounded-sm shadow-elegant"
            loading="lazy"
          />
          <div className="absolute -bottom-6 right-2 sm:-right-6 max-w-[260px] bg-gold text-primary-foreground p-5 font-serif italic text-sm sm:text-base leading-snug font-medium shadow-soft">
            "Ambientes certos transformam destinos"
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <span className="label-eyebrow">Quem Decide Antes, Acessa Diferente</span>
          <h2 className="heading-display mb-7">
            No dia 27 de maio,
            <br />
            um grupo seleto <em className="not-italic font-serif italic text-gold">estará reunido</em>
          </h2>
          <p className="body-text mb-4">
            Em um ambiente sofisticado, intimista e estratégico para viver uma experiência construída para provocar consciência, posicionamento e conexão.
          </p>
          <p className="body-text mb-4">
            O <strong className="text-cream font-medium">2º Workshop Conexão com Propósito</strong> nasce para empresários, profissionais e líderes que não desejam apenas adquirir informação.
          </p>
          <p className="body-text text-gold font-medium mb-6">
            Desejam acessar ambientes que transformam percepção.
          </p>

          {/* O que você vai viver */}
          <div className="mt-8 space-y-3">
            {[
              "✔ Networking estratégico",
              "✔ Reflexões sobre comportamento e consciência",
              "✔ Ambiente premium e intimista",
              "✔ Conexões com empresários e líderes",
              "✔ Experiência sofisticada e memorável",
            ].map((item) => (
              <div key={item} className="text-sm text-foreground/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
