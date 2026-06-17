/* ============================================================
   BIOMECÂNICA DO DESEMPENHO ESPORTIVO
   Landing Page — main.js
   ============================================================ */

/* ============================================================
   CONFIG — Central business variables
   Edit this object to update all content on the page
   ============================================================ */
const CONFIG = {
  course: {
    title: 'Biomecânica',
    titleSub: 'do Desempenho Esportivo',
    tagline: 'Tecnologia aplicada ao alto rendimento',
    description:
      'Aula introdutória sobre biomecânica esportiva para fisioterapeutas, médicos, profissionais de educação física e atletas — implemente monitoramento, análise de dados, equipamentos e tenha insights para criar protocolos que melhoram o desempenho e reduzem riscos de lesões.',
    coverImage: 'assets/course-cover.png',
  },

  author: {
    name: 'Dr. Henrique Lelis',
    shortName: 'Henrique Lelis',
    role: 'Fisioterapeuta · Doutor em Engenharia Biomédica',
    photo: 'assets/author.png',
    initials: 'HL',
    bio: 'Formado em fisioterapia pela UFJF com mais de 12 anos de experiência na área esportiva e traumato-ortopédica. Doutor em engenharia biomédica com ênfase em biomecânica clínica e esportiva. Atua como biomecânico do Comitê Olímpico do Brasil e é professor de cursos de pós-graduação.',
    credentials: [
      { icon: 'graduation', text: 'Doutor em Engenharia Biomédica — Biomecânica Clínica e Esportiva' },
      { icon: 'medal',      text: 'Biomecânico do Comitê Olímpico Brasileiro (COB)' },
      { icon: 'clock',      text: '+12 anos de experiência em fisioterapia esportiva e ortopédica' },
      { icon: 'university', text: 'Graduado em Fisioterapia pela Universidade Federal de Juiz de Fora (UFJF)' },
      { icon: 'teaching',   text: 'Professor de cursos de pós-graduação em Fisioterapia Esportiva' },
    ],
  },

  offer: {
    price: 'R$ 199,99',
    installments: '12x de R$ 16,67',
    installmentsText: 'ou parcelado em até 12x sem juros',
    checkoutUrl:
      'https://pay.hotmart.com/W106099703H?off=2m73zvfp&hotfeature=51&_hi=eyJjaWQiOiIxNzgwNjkzOTU4NzcwMjk2MzYyODIxNzM1NTQ2NjAwIiwiYmlkIjoiMTc4MDY5Mzk1ODc3MDI5NjM2MjgyMTczNTU0NjYwMCIsInNpZCI6IjJkYjljOWQ3YTkzYjQ2YzU4NTVkMWRhZDUzMDUyOTJhIn0=.1781447211990&bid=1781447213683',
    appendCtaSource: false,
    ctaLabel: 'GARANTIR MINHA VAGA AGORA',
    ctaLabelShort: 'COMPRAR AGORA',
    urgency: 'Oferta por tempo limitado · Garantia de 7 dias',
    guarantee: {
      days: 7,
      title: 'Garantia Incondicional de 7 Dias',
      description:
        'Seu dinheiro de volta sem perguntas até 7 dias após a compra. Sem burocracia, sem risco.',
    },
  },

  stats: [
    { value: 12,   suffix: '+',  label: 'Anos de Experiência' },
    { value: 1000, suffix: '+',  label: 'atletas atendidos' },
    { value: 5000, suffix: '+',  label: 'Profissionais Impactados' },
    { value: 100,  suffix: '%',  label: 'Conteúdo Aplicável' },
  ],

  modules: [
    {
      icon: 'monitor',
      title: 'Fundamentos da Biomecânica Esportiva',
      description:
        'Princípios científicos que sustentam a análise do movimento humano aplicada ao esporte de alto rendimento.',
    },
    {
      icon: 'data',
      title: 'Análise de Dados e Métricas',
      description:
        'Como coletar, interpretar e aplicar dados biomecânicos para tomada de decisão clínica e esportiva.',
    },
    {
      icon: 'device',
      title: 'Equipamentos e Tecnologias',
      description:
        'Visão geral das principais ferramentas: sensores inerciais, plataformas de força e sistemas de captura de movimento.',
    },
    {
      icon: 'protocol',
      title: 'Criação de Protocolos',
      description:
        'Estruture protocolos de avaliação e monitoramento para otimizar treinos e individualizar a periodização.',
    },
    {
      icon: 'shield',
      title: 'Prevenção de Lesões',
      description:
        'Identifique padrões de risco biomecânico e implemente estratégias preventivas com base em evidências.',
    },
    {
      icon: 'trophy',
      title: 'Alto Rendimento na Prática',
      description:
        'Cases reais e metodologia de implementação em ambientes de alta performance esportiva.',
    },
  ],

  audience: [
    {
      icon: 'stethoscope',
      title: 'Fisioterapeutas',
      description: 'Eleve sua prática clínica com análise biomecânica objetiva e dados quantitativos.',
    },
    {
      icon: 'doctor',
      title: 'Médicos',
      description: 'Integre biomecânica ao diagnóstico e acompanhamento de atletas de alta performance.',
    },
    {
      icon: 'dumbbell',
      title: 'Ed. Física',
      description: 'Otimize treinos com base em dados reais de movimento e desempenho esportivo.',
    },
    {
      icon: 'athlete',
      title: 'Atletas',
      description: 'Entenda como a biomecânica pode potencializar seus resultados e prolongar sua carreira.',
    },
    {
      icon: 'star',
      title: 'Entusiastas',
      description: 'Aprofunde seu conhecimento sobre ciência do esporte e tecnologia aplicada ao movimento.',
    },
  ],

  painPoints: [
    {
      icon: 'eye',
      pain: 'Análise subjetiva e imprecisa do movimento',
      solution: 'Decisões baseadas em dados biomecânicos mensuráveis',
    },
    {
      icon: 'broken',
      pain: 'Lesões que se repetem sem causa identificada',
      solution: 'Identificação precisa de padrões de risco biomecânico',
    },
    {
      icon: 'question',
      pain: 'Protocolos genéricos sem individualização real',
      solution: 'Protocolos personalizados com métricas e evidências',
    },
  ],

  faq: [
    {
      question: 'Para quem é esse produto?',
      answer:
        'Para fisioterapeutas, médicos, profissionais de educação física, atletas e entusiastas do esporte que desejam aplicar tecnologia e biomecânica ao seu dia a dia profissional.',
    },
    {
      question: 'Como funciona a Garantia de 7 dias?',
      answer:
        'Você tem 7 dias após a compra para pedir o reembolso integral sem nenhuma justificativa. Basta entrar em contato com o suporte Hotmart e o valor é devolvido integralmente. Sem perguntas, sem burocracia.',
    },
    {
      question: 'Por quanto tempo terei acesso ao conteúdo?',
      answer:
        'O acesso é vitalício. Você poderá assistir quantas vezes quiser, no seu ritmo, em qualquer dispositivo — computador, tablet ou celular.',
    },
    {
      question: 'Como acesso o produto após a compra?',
      answer:
        'Você receberá um e-mail com as instruções de acesso imediatamente após a confirmação do pagamento. O conteúdo fica disponível na plataforma Hotmart.',
    },
    {
      question: 'O conteúdo tem certificado de conclusão?',
      answer:
        'Sim. Ao concluir o curso, você pode emitir um certificado digital que pode ser compartilhado no LinkedIn e incluído no seu currículo.',
    },
    {
      question: 'Preciso ter conhecimento prévio em biomecânica?',
      answer:
        'Não. O conteúdo é introdutório e projetado para profissionais que querem começar a implementar biomecânica na prática — do zero até a aplicação clínica real.',
    },
  ],
};

/* ============================================================
   ICON LIBRARY
   Lightweight inline SVG icons
   ============================================================ */
const ICONS = {
  monitor:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/><line x1="12" y1="17" x2="12" y2="3"/></svg>`,
  data:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  device:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg>`,
  protocol:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>`,
  shield:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  trophy:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0012 0V2z"/></svg>`,
  stethoscope:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 105 2H4M8 2h-.2A.3.3 0 108 2.3"/><path d="M6.5 4.5A7.5 7.5 0 006 8c0 4.14 3.36 7.5 7.5 7.5"/><path d="M6.18 17.94A6 6 0 0118 12"/><circle cx="18" cy="12" r="3"/></svg>`,
  doctor:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0113 0"/><path d="M12 16v3M10.5 18.5h3"/></svg>`,
  dumbbell:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5h11M6.5 17.5h11M3 9.5h3v5H3zM18 9.5h3v5h-3zM6 6.5v11M18 6.5v11"/></svg>`,
  athlete:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2"/><path d="M15.09 8.26L12 10l-3.09-1.74A2 2 0 007 10v4"/><path d="M12 10v5"/><path d="M7 14l2 7"/><path d="M17 14l-2 7"/></svg>`,
  star:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  eye:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  broken:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
  question:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" stroke-width="2"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  chevron:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  graduation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  medal:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="15" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  clock:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  university: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11"/></svg>`,
  teaching:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20v13H2z"/><path d="M8 21l4-5 4 5"/></svg>`,
  check:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  lock:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
};

const icon = (name) => ICONS[name] || ICONS.star;

/* ============================================================
   RENDERER
   Populates dynamic DOM sections from CONFIG
   ============================================================ */
class Renderer {
  constructor(cfg) {
    this.cfg = cfg;
  }

  render() {
    this._renderCTALinks();
    this._renderPainPoints();
    this._renderModules();
    this._renderAudience();
    this._renderStats();
    this._renderAuthorCredentials();
    this._renderOfferDetails();
    this._renderFAQ();
  }

  _renderCTALinks() {
    document.querySelectorAll('[data-cta]').forEach((el) => {
      const src = el.dataset.cta;
      el.href = this._buildCheckoutUrl(src);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
  }

  _buildCheckoutUrl(src) {
    if (!this.cfg.offer.appendCtaSource) {
      return this.cfg.offer.checkoutUrl;
    }

    const url = new URL(this.cfg.offer.checkoutUrl);
    url.searchParams.set('src', `lp_${src}`);
    return url.toString();
  }

  _renderPainPoints() {
    const grid = document.getElementById('pain-grid');
    if (!grid) return;
    grid.innerHTML = this.cfg.painPoints
      .map(
        (p) => `
      <div class="pain-card" data-stagger>
        <div class="pain-icon">${icon(p.icon)}</div>
        <div class="pain-body">
          <p class="pain-text">"${p.pain}"</p>
          <span class="pain-arrow" aria-hidden="true">${icon('arrowRight')}</span>
          <p class="solution-text">${p.solution}</p>
        </div>
      </div>`
      )
      .join('');
  }

  _renderModules() {
    const grid = document.getElementById('modules-grid');
    if (!grid) return;
    grid.innerHTML = this.cfg.modules
      .map(
        (m, i) => `
      <div class="module-card card" data-stagger>
        <div class="card-icon-wrap">${icon(m.icon)}</div>
        <span class="module-number">0${i + 1}</span>
        <h3 class="card-title">${m.title}</h3>
        <p class="card-desc">${m.description}</p>
      </div>`
      )
      .join('');
  }

  _renderAudience() {
    const grid = document.getElementById('audience-grid');
    if (!grid) return;
    grid.innerHTML = this.cfg.audience
      .map(
        (a) => `
      <div class="audience-card card" data-stagger>
        <div class="card-icon-wrap">${icon(a.icon)}</div>
        <h3 class="card-title">${a.title}</h3>
        <p class="card-desc">${a.description}</p>
      </div>`
      )
      .join('');
  }

  _renderStats() {
    const grid = document.getElementById('stats-grid');
    if (!grid) return;
    grid.innerHTML = this.cfg.stats
      .map(
        (s) => `
      <div class="stat-item">
        <span class="stat-value" data-counter="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</span>
        <span class="stat-label">${s.label}</span>
      </div>`
      )
      .join('');
  }

  _renderAuthorCredentials() {
    const list = document.getElementById('author-credentials');
    if (!list) return;
    list.innerHTML = this.cfg.author.credentials
      .map(
        (c) => `
      <li class="credential-item">
        <span class="credential-icon" aria-hidden="true">${icon(c.icon)}</span>
        <span>${c.text}</span>
      </li>`
      )
      .join('');
  }

  _renderOfferDetails() {
    const priceEl = document.getElementById('offer-price');
    if (priceEl) priceEl.textContent = this.cfg.offer.price;

    const installEl = document.getElementById('offer-installments');
    if (installEl) installEl.textContent = this.cfg.offer.installmentsText;

    const guaranteeDays = document.getElementById('guarantee-days');
    if (guaranteeDays) guaranteeDays.textContent = this.cfg.offer.guarantee.days;

    const guaranteeTitle = document.getElementById('guarantee-title');
    if (guaranteeTitle) guaranteeTitle.textContent = this.cfg.offer.guarantee.title;

    const guaranteeDesc = document.getElementById('guarantee-desc');
    if (guaranteeDesc) guaranteeDesc.textContent = this.cfg.offer.guarantee.description;
  }

  _renderFAQ() {
    const list = document.getElementById('faq-list');
    if (!list) return;
    list.innerHTML = this.cfg.faq
      .map(
        (f, i) => `
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}">
          <span>${f.question}</span>
          <span class="faq-chevron" aria-hidden="true">${icon('chevron')}</span>
        </button>
        <div class="faq-answer" id="faq-answer-${i}" role="region">
          <div class="faq-answer-inner">
            <p>${f.answer}</p>
          </div>
        </div>
      </div>`
      )
      .join('');
  }
}

/* ============================================================
   PARTICLE SYSTEM
   Canvas-based neural / biomechanics network for hero bg
   ============================================================ */
class ParticleSystem {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas || !this.canvas.getContext) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null };
    this.raf = null;
    this.cfg = {
      count: this._count(),
      maxDist: 130,
      speed: 0.35,
      mouseRadius: 140,
    };
    this._resize();
    this._spawn();
    this._bindEvents();
    this._tick();
  }

  _count() {
    const w = window.innerWidth;
    if (w < 480) return 30;
    if (w < 768) return 50;
    if (w < 1280) return 75;
    return 110;
  }

  _resize() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }

  _spawn() {
    this.particles = Array.from({ length: this.cfg.count }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * this.cfg.speed * 2,
      vy: (Math.random() - 0.5) * this.cfg.speed * 2,
      r: Math.random() * 1.5 + 0.5,
    }));
  }

  _bindEvents() {
    window.addEventListener('resize', () => {
      this._resize();
      this.cfg.count = this._count();
      this._spawn();
    });

    // Listen on hero section so pointer-events:none on canvas works
    const hero = document.getElementById('hero');
    if (hero) {
      hero.addEventListener('mousemove', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
      });
      hero.addEventListener('mouseleave', () => {
        this.mouse.x = null;
        this.mouse.y = null;
      });
    }
  }

  _tick() {
    const { ctx, canvas, particles, cfg, mouse } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      // Mouse repulsion
      if (mouse.x !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d = Math.hypot(dx, dy);
        if (d < cfg.mouseRadius && d > 0) {
          const f = ((cfg.mouseRadius - d) / cfg.mouseRadius) * 0.25;
          p.vx -= (dx / d) * f;
          p.vy -= (dy / d) * f;
        }
      }

      // Damping + minimum drift
      p.vx *= 0.985;
      p.vy *= 0.985;
      const spd = Math.hypot(p.vx, p.vy);
      if (spd < cfg.speed * 0.2) {
        p.vx += (Math.random() - 0.5) * 0.04;
        p.vy += (Math.random() - 0.5) * 0.04;
      }

      p.x += p.vx;
      p.y += p.vy;

      // Wrap
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });

    // Draw edges
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.hypot(dx, dy);
        if (d < cfg.maxDist) {
          const alpha = (1 - d / cfg.maxDist) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(26,108,245,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(201,162,39,0.55)';
      ctx.fill();
    });

    this.raf = requestAnimationFrame(() => this._tick());
  }

  destroy() {
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}

/* ============================================================
   SCROLL ANIMATION CONTROLLER
   Intersection Observer for section reveals + stat counters
   ============================================================ */
class ScrollAnimationController {
  constructor() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
      return;
    }
    this._initReveal();
    this._initCounters();
  }

  _initReveal() {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          // Stagger children
          entry.target.querySelectorAll('[data-stagger]').forEach((child, i) => {
            child.style.transitionDelay = `${80 + i * 90}ms`;
          });
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => obs.observe(el));
  }

  _initCounters() {
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          this._animateCounters(entry.target);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(statsSection);
  }

  _animateCounters(container) {
    container.querySelectorAll('[data-counter]').forEach((el) => {
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      const dur = 2200;
      const start = performance.now();

      const step = (now) => {
        const progress = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const cur = Math.round(eased * target);
        el.textContent = cur.toLocaleString('pt-BR') + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }
}

/* ============================================================
   HEADER CONTROLLER
   Scroll-aware sticky header with CTA reveal
   ============================================================ */
class HeaderController {
  constructor() {
    this.header = document.getElementById('header');
    this.lastY = 0;
    this.ticking = false;
    if (!this.header) return;
    window.addEventListener('scroll', () => {
      if (!this.ticking) {
        requestAnimationFrame(() => { this._update(); this.ticking = false; });
        this.ticking = true;
      }
    }, { passive: true });
  }

  _update() {
    const y = window.scrollY;
    const heroH = document.getElementById('hero')?.offsetHeight ?? 600;

    this.header.classList.toggle('is-scrolled', y > heroH * 0.25);
    this.header.classList.toggle('is-hidden', y > this.lastY && y > 300);
    this.lastY = y;
  }
}

/* ============================================================
   FAQ CONTROLLER
   Smooth accordion with ARIA management
   ============================================================ */
class FAQController {
  constructor() {
    this._init();
  }

  _init() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.faq-question');
      if (!btn) return;
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');
      this._closeAll();
      if (!isOpen) this._open(item, btn);
    });
  }

  _closeAll() {
    document.querySelectorAll('.faq-item.is-open').forEach((item) => {
      item.classList.remove('is-open');
      const btn = item.querySelector('.faq-question');
      if (btn) btn.setAttribute('aria-expanded', 'false');
      const inner = item.querySelector('.faq-answer-inner');
      if (inner) inner.style.maxHeight = '0';
    });
  }

  _open(item, btn) {
    item.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    const inner = item.querySelector('.faq-answer-inner');
    if (inner) inner.style.maxHeight = inner.scrollHeight + 'px';
  }
}

/* ============================================================
   FLOATING CTA CONTROLLER
   Shows mobile CTA bar when hero is past + offer not visible
   ============================================================ */
class FloatingCTAController {
  constructor() {
    this.el = document.getElementById('floating-cta');
    if (!this.el) return;
    window.addEventListener('scroll', () => this._update(), { passive: true });
    this._update();
  }

  _update() {
    const hero = document.getElementById('hero');
    const offer = document.getElementById('offer');
    const heroBottom = hero?.getBoundingClientRect().bottom ?? 0;
    const offerTop = offer?.getBoundingClientRect().top ?? Infinity;
    const visible = heroBottom < 0 && offerTop > window.innerHeight;
    this.el.classList.toggle('is-visible', visible);
  }
}

/* ============================================================
   SMOOTH SCROLL
   Native anchor scroll with header offset compensation
   ============================================================ */
function initSmoothScroll() {
  const headerH = () => document.getElementById('header')?.offsetHeight ?? 80;
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - headerH() - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  new Renderer(CONFIG).render();
  new ParticleSystem('hero-canvas');
  new ScrollAnimationController();
  new HeaderController();
  new FAQController();
  new FloatingCTAController();
  initSmoothScroll();
});
