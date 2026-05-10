import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Sobre from "@/components/site/Sobre";
import Pilares from "@/components/site/Pilares";
import Servicos from "@/components/site/Servicos";
import Quote from "@/components/site/Quote";
import Contato from "@/components/site/Contato";
import Footer from "@/components/site/Footer";

const PAYMENT_LINK = "https://link.infinitepay.io/kattielleres-439/VC1DLTEtUg-127,00";

const Index = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Sobre />
      <Pilares />
      <Servicos />
      <Quote />
      <Contato />
      <Footer />

      {/* Floating CTA */}
      <a
        href={PAYMENT_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Comprar vaga agora"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-gold text-primary-foreground px-6 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full shadow-elegant hover:bg-gold-light hover:scale-105 transition-all animate-pulse"
      >
        Comprar Agora — R$127
      </a>
    </main>
  );
};

export default Index;
