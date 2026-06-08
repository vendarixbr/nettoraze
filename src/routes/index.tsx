import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroCar from "@/assets/hero-car.jpg";
import aboutImg from "@/assets/about.jpg";
import ppfImg from "@/assets/service-ppf.jpg";
import insulfilmImg from "@/assets/service-insulfilm.jpg";
import polimentoImg from "@/assets/service-polimento.jpg";
import coatingImg from "@/assets/service-coating.jpg";
import securityImg from "@/assets/service-security.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg.asset.json";
import p2 from "@/assets/portfolio-2.jpg.asset.json";
import p3 from "@/assets/portfolio-3.jpg.asset.json";
import p4 from "@/assets/portfolio-4.jpg.asset.json";
import p5 from "@/assets/portfolio-5.jpg.asset.json";
import p6 from "@/assets/portfolio-6.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Netto Razzé — Estética Automotiva Premium | PPF & Coating em Chavantes" },
      {
        name: "description",
        content:
          "Estética automotiva de alto padrão em Chavantes — SP. PPF, Insulfilm, Polimento Técnico, Estética Completa e Proteção Cerâmica. Atendemos Chavantes e Ourinhos.",
      },
      { property: "og:title", content: "Netto Razzé — Estética Automotiva Premium" },
      {
        property: "og:description",
        content:
          "Proteção e estética automotiva de alto padrão em Chavantes — SP. Atendemos também Ourinhos.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "https://wa.me/5517999999999";
const INSTAGRAM = "https://instagram.com/nettorazze";

function WhatsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function Star({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function Arrow({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="section-label">
      <span className="divider-line" />
      {children}
    </span>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Landing() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: [string, string][] = [
    ["Serviços", "#servicos"],
    ["Portfólio", "#portfolio"],
    ["Diferenciais", "#diferenciais"],
    ["Clientes", "#clientes"],
    ["FAQ", "#faq"],
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <a href="#top" className="flex items-baseline gap-3">
            <span className="font-display text-2xl tracking-wider leading-none">NETTO RAZZÉ</span>
            <span className="hidden sm:inline text-[0.6rem] uppercase tracking-[0.3em] text-white/40">
              / Chavantes
            </span>
          </a>
          <ul className="hidden lg:flex items-center gap-9 text-[0.72rem] tracking-[0.22em] uppercase font-medium">
            {navItems.map(([l, h]) => (
              <li key={h}>
                <a href={h} className="text-white/65 hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden lg:inline-flex btn-primary">
            <WhatsIcon /> Orçamento
          </a>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M4 8h18M4 16h12" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col">
          <div className="flex justify-between items-center px-6 h-20 border-b border-border">
            <span className="font-display text-xl tracking-wider">NETTO RAZZÉ</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Fechar" className="text-white p-2">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col flex-1 justify-center px-10 gap-7 font-display text-4xl tracking-wider">
            {navItems.map(([l, h], i) => (
              <li key={h} className="flex items-center gap-4">
                <span className="text-lime text-xs font-sans tracking-widest">0{i + 1}</span>
                <a href={h} onClick={() => setMenuOpen(false)} className="hover:text-lime transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-10 pb-10">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary w-full" onClick={() => setMenuOpen(false)}>
              <WhatsIcon /> Falar no WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* HERO */}
      <header id="top" className="relative min-h-screen flex items-end overflow-hidden hero-grain">
        <img
          src={heroCar}
          alt="Veículo premium protegido pela Netto Razzé"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.45) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />

        {/* Vertical side text */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-6 text-[0.65rem] tracking-[0.4em] uppercase text-white/40" style={{ writingMode: "vertical-rl" }}>
          <span>Estética Automotiva</span>
          <span className="w-px h-16 bg-white/20" />
          <span className="text-lime">EST. Chavantes</span>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pb-20 lg:pb-28 pt-32">
          <div className="reveal">
            <SectionLabel>Estética Automotiva Premium</SectionLabel>
            <h1 className="font-display text-[3.5rem] sm:text-[5rem] lg:text-[8.5rem] xl:text-[9rem] leading-[0.9] tracking-wider mt-8 mb-10 max-w-6xl">
              ESTÉTICA<br />
              <span className="text-lime">AUTOMOTIVA</span><br />
              NO LIMITE.
            </h1>
            <div className="flex flex-col gap-8 max-w-2xl">
              <p className="text-base lg:text-lg text-white/70 leading-relaxed font-light">
                PPF, Insulfilm, Polimento, Estética Completa e Proteção Cerâmica.
                Cada veículo recebe atenção exclusiva — precisão técnica e materiais
                de primeira linha. Chavantes / SP.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
                  <WhatsIcon /> Agendar Visita
                </a>
                <a href="#servicos" className="btn-outline">
                  Explorar <Arrow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[0.6rem] tracking-[0.4em] uppercase text-white/40 flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </header>

      {/* STATS STRIP */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-border border-x border-border">
          {[
            ["1.000+", "Veículos protegidos"],
            ["5.0", "Google Reviews"],
            ["Premium", "Materiais Top de Linha"],
            ["10 anos", "Garantia PPF"],
          ].map(([n, l]) => (
            <div key={l} className="px-6 lg:px-10 py-10 reveal">
              <div className="font-display text-4xl lg:text-6xl text-lime tracking-wider leading-none">{n}</div>
              <div className="text-[0.65rem] uppercase tracking-[0.25em] text-white/55 mt-3">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-28 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="relative lg:col-span-6 reveal">
            <img
              src={aboutImg}
              alt="Aplicação profissional"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-[420px] lg:h-[640px] object-cover"
              style={{ filter: "brightness(0.92) contrast(1.05)" }}
            />
            <div className="absolute -bottom-6 -right-6 bg-background border border-border px-8 py-6 hidden lg:block">
              <div className="font-display text-6xl text-lime leading-none">5+</div>
              <div className="text-[0.65rem] uppercase tracking-[0.25em] text-white/55 mt-2">
                Anos de excelência
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 reveal">
            <SectionLabel>Quem Somos</SectionLabel>
            <h2 className="font-display text-4xl lg:text-7xl leading-[0.95] tracking-wider mt-6 mb-10">
              OBSESSÃO PELO<br /><span className="text-lime">DETALHE</span>.
            </h2>
            <p className="text-white/70 leading-relaxed mb-6 max-w-lg">
              A Netto Razzé nasceu da paixão por veículos e da obsessão por detalhes.
              Em Chavantes, somos referência em proteção e estética automotiva de alto padrão.
            </p>
            <p className="text-white/55 leading-relaxed mb-10 max-w-lg text-sm">
              Cada veículo que passa por nossas mãos recebe atenção exclusiva — sem pressa,
              sem compromisso com volume. Apenas qualidade premium.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-lime"
                style={{ background: "rgba(158,255,0,0.07)", border: "1px solid rgba(158,255,0,0.3)" }}
              >
                ✓ Materiais Premium
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 text-[0.65rem] tracking-[0.22em] uppercase font-semibold text-white/70 border border-border">
                Atendimento Exclusivo
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-surface py-28 lg:py-40 border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 mb-20 reveal items-end">
            <div className="lg:col-span-7">
              <SectionLabel>Serviços / 01—06</SectionLabel>
              <h2 className="font-display text-4xl lg:text-7xl leading-[0.95] tracking-wider mt-6">
                PROTEÇÃO E ESTÉTICA<br />
                <span className="text-lime">NO MAIS ALTO NÍVEL</span>.
              </h2>
            </div>
            <p className="lg:col-span-5 text-white/60 leading-relaxed max-w-md lg:justify-self-end">
              Seis serviços pensados para preservar a integridade,
              o conforto e a segurança do seu veículo.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-border">
            {[
              {
                n: "01",
                tag: "Proteção Invisível",
                img: ppfImg,
                title: "PPF",
                subtitle: "Paint Protection Film",
                desc: "Película transparente de alta performance contra riscos, pedriscos, manchas químicas e desgaste. Invisível, duradoura e com garantia.",
              },
              {
                n: "02",
                tag: "Conforto Térmico",
                img: insulfilmImg,
                title: "INSULFILM",
                subtitle: "Conforto & Privacidade",
                desc: "Redução de calor, proteção UV e mais privacidade. Películas homologadas, aplicação técnica sem bolhas, acabamento de precisão.",
              },
              {
                n: "03",
                tag: "Correção de Pintura",
                img: polimentoImg,
                title: "POLIMENTO",
                subtitle: "Polimento Técnico",
                desc: "Correção de microriscos, marcas de lavagem e oxidação. Resgata o brilho original da pintura com técnica e equipamentos profissionais.",
              },
              {
                n: "04",
                tag: "Cuidado Completo",
                img: aboutImg,
                title: "ESTÉTICA",
                subtitle: "Estética Completa",
                desc: "Higienização interna profunda, descontaminação de pintura e tratamento completo. Seu veículo como novo, por dentro e por fora.",
              },
              {
                n: "05",
                tag: "Proteção Cerâmica",
                img: coatingImg,
                title: "COATING",
                subtitle: "Proteção Cerâmica",
                desc: "Camada cerâmica que protege a pintura contra raios UV, contaminantes e químicos, intensificando o brilho com efeito hidrofóbico de longa duração.",
              },
              {
                n: "06",
                tag: "Segurança Veicular",
                img: securityImg,
                title: "SEGURANÇA",
                subtitle: "Película de Segurança",
                desc: "Películas laminadas que mantêm os vidros íntegros em caso de impacto, protegendo os ocupantes de estilhaços e dificultando arrombamentos.",
              },
            ].map((s) => (
              <article
                key={s.title}
                className="group relative bg-background p-8 lg:p-10 transition-all duration-500 hover:bg-elevated reveal"
              >
                <div className="flex items-center justify-between text-[0.65rem] tracking-[0.25em] uppercase text-white/40 mb-8">
                  <span>{s.tag}</span>
                  <span className="font-display text-base tracking-wider text-lime">/{s.n}</span>
                </div>
                <div className="overflow-hidden mb-8">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full h-64 object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    style={{ filter: "brightness(0.9)" }}
                  />
                </div>
                <h3 className="font-display text-4xl lg:text-5xl tracking-wider leading-none mb-2 transition-colors group-hover:text-lime">
                  {s.title}
                </h3>
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-white/45 mb-5">
                  {s.subtitle}
                </p>
                <p className="text-sm text-white/65 leading-relaxed mb-8">{s.desc}</p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-white hover:text-lime transition-colors">
                  Saber Mais <Arrow className="w-3.5 h-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 reveal items-end">
            <div className="lg:col-span-8">
              <SectionLabel>Portfólio / Trabalhos</SectionLabel>
              <h2 className="font-display text-4xl lg:text-7xl leading-[0.95] tracking-wider mt-6">
                CADA APLICAÇÃO,<br /><span className="text-lime">UMA ASSINATURA</span>.
              </h2>
            </div>
            <p className="lg:col-span-4 text-white/60 leading-relaxed text-sm">
              Uma seleção de veículos que passaram pelo nosso processo de proteção
              e estética premium.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-3 lg:gap-4">
            <PortfolioCard className="col-span-12 lg:col-span-7 lg:row-span-2 h-[420px] lg:h-[720px]" img={p1.url} title="Mini Cooper JCW" tag="PPF + Detalhamento" />
            <PortfolioCard className="col-span-6 lg:col-span-5 h-[280px] lg:h-[352px]" img={p2.url} title="Mini Cooper / Teto Vermelho" tag="Envelopamento Parcial" />
            <PortfolioCard className="col-span-6 lg:col-span-5 h-[280px] lg:h-[352px]" img={p6.url} title="Cooper / Vista Traseira" tag="PPF Integral" />
            <PortfolioCard className="col-span-12 sm:col-span-4 h-[260px] lg:h-[300px]" img={p3.url} title="Citroën C3 Aircross" tag="Insulfilm Premium" />
            <PortfolioCard className="col-span-12 sm:col-span-4 h-[260px] lg:h-[300px]" img={p4.url} title="Jet Ski Sea-Doo" tag="Proteção Náutica" />
            <PortfolioCard className="col-span-12 sm:col-span-4 h-[260px] lg:h-[300px]" img={p5.url} title='Sea-Doo "Meduza"' tag="Wrap Custom" />
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 reveal">
            <p className="text-white/55 text-sm max-w-md">
              Quer ver mais projetos? Acompanhe nosso trabalho diário no Instagram.
            </p>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn-outline">
              @nettorazze <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="bg-surface py-28 lg:py-40 border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 reveal lg:sticky lg:top-32 self-start">
            <SectionLabel>Diferenciais</SectionLabel>
            <h2 className="font-display text-4xl lg:text-7xl leading-[0.95] tracking-wider mt-6 mb-10">
              O PADRÃO QUE NOS<br /><span className="text-lime">DIFERENCIA</span>.
            </h2>
            <p className="text-white/60 leading-relaxed mb-10 max-w-md">
              Mais de 5 anos dedicados à excelência em proteção automotiva.
              Cada detalhe importa, cada veículo é único.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
              <WhatsIcon /> Fale Conosco
            </a>
          </div>

          <div className="lg:col-span-7 reveal">
            {[
              { n: "01", title: "Materiais Top de Linha", desc: "Materiais originais com garantia de fábrica. Procedência certificada e rastreável em cada aplicação." },
              { n: "02", title: "Atendimento Agendado e Exclusivo", desc: "Cada veículo recebe atenção total. Sem pressa, sem volume. Somente qualidade absoluta." },
              { n: "03", title: "Garantia e Procedência", desc: "Todos os nossos serviços são cobertos por garantia. Laudo técnico e documentação entregues ao cliente." },
              { n: "04", title: "Experiência Completa", desc: "Do primeiro contato à entrega, transparência total e resultado à altura do seu veículo." },
            ].map((d, i) => (
              <div
                key={d.title}
                className={`group grid grid-cols-[auto_1fr] gap-8 py-8 lg:py-10 ${i !== 0 ? "border-t border-border" : ""}`}
              >
                <span className="font-display text-3xl lg:text-5xl text-lime tracking-wider leading-none">{d.n}</span>
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl tracking-wider mb-3">{d.title}</h3>
                  <p className="text-white/60 leading-relaxed max-w-xl">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARCAS MARQUEE */}
      <section className="py-12 overflow-hidden border-b border-border">
        <div className="marquee text-white/25">
          {[...Array(2)].flatMap((_, k) =>
            ["Volkswagen","Audi","BMW","Toyota","Honda","Hyundai","Jeep","Chevrolet","Fiat","Ford","Mini","Porsche","Mercedes-Benz","Subaru"].map((b, i) => (
              <span key={`${k}-${i}`} className="font-display text-3xl lg:text-5xl tracking-wider whitespace-nowrap">
                {b} <span className="text-lime mx-6">✦</span>
              </span>
            ))
          )}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="clientes" className="py-28 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 reveal items-end">
            <div className="lg:col-span-8">
              <SectionLabel>Clientes</SectionLabel>
              <h2 className="font-display text-4xl lg:text-7xl leading-[0.95] tracking-wider mt-6">
                O QUE DIZEM SOBRE<br /><span className="text-lime">NOSSO TRABALHO</span>.
              </h2>
            </div>
            <div className="lg:col-span-4 flex items-center gap-3 text-sm text-white/70 lg:justify-self-end">
              <span className="flex text-lime">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" />)}
              </span>
              <span className="tracking-wide">5.0 no Google</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-border border border-border">
            {[
              { name: "Flávio Garces", role: "Cliente PPF", text: "Serviço impecável! Profissionalismo do início ao fim, prazo cumprido e resultado que superou minhas expectativas." },
              { name: "Fábio Gonçalves", role: "Cliente Segurança", text: "Recomendo demais. Minha família ficou ainda mais segura com a película de segurança. Atendimento top e acabamento de primeira." },
              { name: "Eden Paccola", role: "Cliente Insulfilm", text: "Instalaram o insulfilm e ficou excelente. Muito profissionais, atenciosos e material de ótima qualidade. Voltarei para o PPF." },
            ].map((t) => (
              <article
                key={t.name}
                className="bg-background p-8 lg:p-12 flex flex-col hover:bg-elevated transition-colors duration-500"
              >
                <div className="flex text-lime mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5" />)}
                </div>
                <p className="text-white/85 leading-relaxed mb-10 flex-1 text-lg font-light">
                  "{t.text}"
                </p>
                <div className="pt-6 border-t border-border">
                  <div className="font-display text-xl tracking-wider">{t.name}</div>
                  <div className="text-[0.65rem] uppercase tracking-[0.25em] text-white/45 mt-2">{t.role} / Google</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* CTA FINAL */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <img
          src={ctaBg}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.22) contrast(1.05)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(158,255,0,0.14) 0%, rgba(10,10,10,0.85) 55%, #0a0a0a 100%)",
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center reveal">
          <SectionLabel>Pronto para começar?</SectionLabel>
          <h2 className="font-display text-5xl lg:text-9xl leading-[0.9] tracking-wider mt-8 mb-10">
            SEU VEÍCULO MERECE<br /><span className="text-lime">O MELHOR CUIDADO</span>.
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Proteção de alto padrão com atendimento exclusivo e materiais top de linha.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
              <WhatsIcon /> Falar no WhatsApp
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn-outline">
              Ver Instagram <Arrow />
            </a>
          </div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/40">
            Chavantes / SP — Atendimento Exclusivo Agendado
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#050505" }} className="border-t border-border pt-24 pb-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="font-display text-3xl tracking-wider">NETTO RAZZÉ</div>
            <div className="text-[0.6rem] uppercase tracking-[0.3em] text-white/40 mt-2 mb-6">
              Estética Automotiva Premium
            </div>
            <p className="text-sm text-white/55 max-w-sm leading-relaxed mb-6">
              PPF, Insulfilm, Polimento, Estética e Proteção Cerâmica de alto padrão.
              Atendimento em Chavantes e Ourinhos — SP.
            </p>
            <span className="inline-block text-[0.6rem] uppercase tracking-[0.3em] text-lime px-3 py-1.5 border border-lime/40">
              ✓ Materiais Premium
            </span>
          </div>

          {[
            { title: "Serviços", items: [["PPF","#servicos"],["Insulfilm","#servicos"],["Polimento","#servicos"],["Estética Completa","#servicos"],["Proteção Cerâmica","#servicos"],["Película de Segurança","#servicos"]] },
            { title: "Navegação", items: [["Sobre","#top"],["Portfólio","#portfolio"],["Diferenciais","#diferenciais"],["Clientes","#clientes"],["FAQ","#faq"]] },
            { title: "Contato", items: [["WhatsApp", WHATSAPP],["Instagram @nettorazze", INSTAGRAM],["Chavantes — SP", "#"]] },
          ].map((col, ci) => (
            <div key={col.title} className={ci === 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <div className="text-[0.6rem] uppercase tracking-[0.3em] text-lime font-semibold mb-6">{col.title}</div>
              <ul className="space-y-3 text-sm text-white/65">
                {col.items.map(([label, href], i) => (
                  <li key={i}>
                    <a href={href} className="hover:text-white transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-border flex flex-wrap justify-between gap-4 text-[0.65rem] uppercase tracking-[0.25em] text-white/40">
          <span>© 2025 Netto Razzé. Todos os direitos reservados.</span>
          <span>Chavantes &amp; Ourinhos / SP</span>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110"
        style={{ background: "#9EFF00", boxShadow: "0 8px 30px rgba(158,255,0,0.5)" }}
      >
        <WhatsIcon className="w-7 h-7 text-black" />
      </a>
    </div>
  );
}

function PortfolioCard({
  className = "",
  img,
  title,
  tag,
}: {
  className?: string;
  img: string;
  title: string;
  tag: string;
}) {
  return (
    <figure className={`group relative overflow-hidden bg-card reveal ${className}`}>
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
        style={{ filter: "brightness(0.85) contrast(1.05)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 lg:p-7">
        <div className="text-[0.6rem] uppercase tracking-[0.3em] text-lime mb-2">{tag}</div>
        <div className="font-display text-xl lg:text-3xl tracking-wider text-white">{title}</div>
      </figcaption>
      <span className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
        <Arrow className="w-4 h-4" />
      </span>
    </figure>
  );
}

function FaqSection() {
  const items = [
    { q: "O que é PPF e para que serve?", a: "O PPF (Paint Protection Film) é uma película transparente de alta performance aplicada sobre a pintura do veículo. Ele protege contra riscos finos, pedriscos, manchas de insetos, poluição e desgaste químico, preservando a pintura original por muito mais tempo." },
    { q: "O PPF altera a aparência do carro?", a: "Não. O PPF é praticamente invisível após a aplicação. Ele mantém o brilho original da pintura e pode até intensificá-lo. Existe também a versão matte para quem quer um acabamento fosco." },
    { q: "O que é Proteção Cerâmica (coating) e quanto tempo dura?", a: "É uma camada cerâmica aplicada sobre a pintura que cria uma barreira protetora contra raios UV, contaminantes e químicos, intensificando o brilho com efeito hidrofóbico. Dependendo da linha aplicada, dura de 1 a 5 anos." },
    { q: "Qual a diferença entre Polimento Técnico e Estética Completa?", a: "O Polimento Técnico foca na correção da pintura (microriscos, marcas de lavagem, oxidação). A Estética Completa inclui higienização interna profunda, descontaminação e tratamento completo do veículo por dentro e por fora." },
    { q: "O Insulfilm é legal? Pode ser aplicado em qualquer janela?", a: "Sim, desde que siga a legislação do CONTRAN/DENATRAN. Trabalhamos apenas com películas homologadas e respeitamos os limites legais de transparência para cada posição do veículo." },
    { q: "Quanto tempo dura o PPF?", a: "Com materiais de alta qualidade, o PPF tem durabilidade de 5 a 10 anos com garantia, dependendo da linha escolhida e dos cuidados com o veículo." },
    { q: "Vocês atendem fora de Chavantes?", a: "Sim. Além de Chavantes, atendemos clientes de Ourinhos e região. Entre em contato pelo WhatsApp para verificar a disponibilidade." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-surface py-28 lg:py-40 border-y border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 reveal lg:sticky lg:top-32 self-start">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-display text-4xl lg:text-7xl leading-[0.95] tracking-wider mt-6 mb-8">
            DÚVIDAS<br /><span className="text-lime">FREQUENTES</span>.
          </h2>
          <p className="text-white/60 leading-relaxed max-w-md mb-10">
            As perguntas mais comuns sobre PPF, Insulfilm, Polimento e Proteção Cerâmica.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
            <WhatsIcon /> Tirar Outra Dúvida
          </a>
        </div>
        <div className="lg:col-span-7 reveal">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-7 flex items-center justify-between gap-6 group"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="font-display text-base text-lime tracking-wider">/0{i + 1}</span>
                    <span className={`font-display text-xl lg:text-2xl tracking-wider transition-colors ${isOpen ? "text-lime" : "text-white group-hover:text-lime"}`}>
                      {it.q}
                    </span>
                  </span>
                  <span className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all ${isOpen ? "border-lime text-lime rotate-45" : "border-white/25 text-white/70"}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500 ease-out"
                  style={{ maxHeight: isOpen ? 400 : 0, opacity: isOpen ? 1 : 0 }}
                >
                  <p className="pb-7 pl-10 pr-12 text-white/65 leading-relaxed">{it.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
