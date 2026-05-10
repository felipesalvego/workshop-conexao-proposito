export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 py-8 bg-black/40 border-t border-border">
      <div className="container max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="font-serif italic text-lg text-cream/70">
          Workshop Conexão com Propósito
        </div>
        <p className="text-[10px] sm:text-[11px] text-foreground/30 tracking-[0.08em]">
          27/05/2026 • 19h30 às 21h30 • Moage Café • Belém/PA
        </p>
        <ul className="flex gap-6">
          {["Sobre", "Workshop", "Contato"].map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="text-[10px] sm:text-[11px] tracking-[0.13em] uppercase text-foreground/40 hover:text-gold transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
