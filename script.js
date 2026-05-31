// ============ i18n (8 languages) ============
const I18N = window.I18N || {};

const LANGS = ['en', 'zh-Hans', 'zh-Hant', 'ja', 'ko', 'fr', 'de', 'es'];
const LANG_HTML = {
  'en': 'en', 'zh-Hans': 'zh-Hans', 'zh-Hant': 'zh-Hant',
  'ja': 'ja', 'ko': 'ko', 'fr': 'fr', 'de': 'de', 'es': 'es'
};

// Screenshot slot → filename mapping
const SHOT_FILES = {
  'iphone-main':      '01-main.png',
  'iphone-about':     '01-main.png',  // fallback to main if slot not available
  'iphone-welcome':   '01-main.png',
  'iphone-plans':     '01-main.png',
  'iphone-languages': '01-main.png',
  'ipad-main':        '01-main.png',
  'ipad-about':       '01-main.png',
  'ipad-plans':       '01-main.png',
};

// Base paths for per-language screenshots
function shotPath(device, lang, filename) {
  return `./assets/screenshots/${device}/${lang}/${filename}`;
}

// Probe whether a screenshot exists for this lang; return promise of boolean
const probeCache = {};
function probeImage(src) {
  if (probeCache[src] !== undefined) return Promise.resolve(probeCache[src]);
  return new Promise(resolve => {
    const img = new Image();
    img.onload  = () => { probeCache[src] = true;  resolve(true);  };
    img.onerror = () => { probeCache[src] = false; resolve(false); };
    img.src = src;
  });
}

// Apply language dictionary to DOM
function applyLang(lang) {
  const dict = I18N[lang] || I18N['en'];
  if (!dict) return;
  document.documentElement.lang = LANG_HTML[lang] || lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  // sync dropdown
  const sel = document.getElementById('lang-select');
  if (sel) sel.value = lang;

  try { localStorage.setItem('ri_lang', lang); } catch (e) {}

  // update screenshots for this language
  updateScreenshots(lang);

  // update PiP caption locale
  updatePipLocale(lang);
}

// Replace <img data-shot="…"> src with per-lang screenshot if available
function updateScreenshots(lang) {
  document.querySelectorAll('[data-shot]').forEach(img => {
    const slot = img.getAttribute('data-shot');
    const filename = SHOT_FILES[slot] || '01-main.png';
    const isIpad = slot.startsWith('ipad');
    const device = isIpad ? 'ipad' : 'iphone';
    const langSrc = shotPath(device, lang, filename);
    const fallbackSrc = shotPath(device, 'en', filename);

    probeImage(langSrc).then(ok => {
      const newSrc = ok ? langSrc : null;
      if (newSrc && img.src !== newSrc) {
        img.src = newSrc;
      }
      // If not found, keep existing src (default assets)
    });
  });
}

// Detect initial language from browser / localStorage
function detectLang() {
  try {
    const saved = localStorage.getItem('ri_lang');
    if (saved && (I18N[saved] || saved === 'en')) return saved;
  } catch (e) {}

  const navLangs = navigator.languages || [navigator.language || 'en'];
  for (const nl of navLangs) {
    const lc = nl.toLowerCase();
    if (lc === 'zh-hant' || lc === 'zh-tw' || lc === 'zh-hk') return 'zh-Hant';
    if (lc === 'zh' || lc === 'zh-hans' || lc === 'zh-cn') return 'zh-Hans';
    if (lc.startsWith('ja')) return 'ja';
    if (lc.startsWith('ko')) return 'ko';
    if (lc.startsWith('fr')) return 'fr';
    if (lc.startsWith('de')) return 'de';
    if (lc.startsWith('es')) return 'es';
    if (lc.startsWith('en')) return 'en';
  }
  return 'en';
}

// Wire up the lang select dropdown
const langSelect = document.getElementById('lang-select');
if (langSelect) {
  langSelect.addEventListener('change', () => applyLang(langSelect.value));
}

// Apply initial language
applyLang(detectLang());


// ============ reveal on scroll ============
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));


// ============ nav background on scroll + mobile menu ============
const nav = document.getElementById('nav');
const navMenu = document.getElementById('navMenu');
const navDrawer = document.getElementById('navDrawer');
const onScroll = () => {
  const s = window.scrollY > 10;
  nav.style.background = s
    ? 'color-mix(in srgb, var(--bg) 92%, transparent)'
    : 'color-mix(in srgb, var(--bg) 78%, transparent)';
};
document.addEventListener('scroll', onScroll, { passive: true });

if (navMenu && navDrawer) {
  navMenu.addEventListener('click', () => {
    const open = navDrawer.classList.toggle('open');
    navMenu.classList.toggle('open', open);
  });
  navDrawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navDrawer.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}


// ============ hero pointer + tilt (desktop) / scroll parallax (mobile) ============
const hero  = document.querySelector('.hero');
const back  = document.querySelector('.phone-back');
const front = document.querySelector('.phone-front');

const isMobile = window.matchMedia('(max-width: 760px)').matches;
const reduced  = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (hero && back && front && !reduced) {
  if (!isMobile) {
    let mx = 0, my = 0, tx = 0, ty = 0;
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width  - 0.5;
      my = (e.clientY - r.top)  / r.height - 0.5;
    });
    (function tick() {
      tx += (mx - tx) * 0.08;
      ty += (my - ty) * 0.08;
      back.style.transform  = `translate(${64 + tx * -14}px, ${32 + ty * -8}px) rotate(${4 + tx * 1.5}deg)`;
      front.style.transform = `translate(${-36 + tx * 14}px, ${ty * -12}px) rotate(${-2 + tx * -1.5}deg)`;
      requestAnimationFrame(tick);
    })();
  } else {
    // Subtle scroll parallax on mobile
    const ticking = { raf: false };
    const updateMobileHero = () => {
      ticking.raf = false;
      const r = hero.getBoundingClientRect();
      const center = window.innerHeight * 0.5;
      const delta = Math.max(-1, Math.min(1, ((r.top + r.height * 0.7) - center) / window.innerHeight));
      back.style.transform  = `translate(${48 + delta * -8}px, ${28 + delta * -10}px) rotate(${5 + delta * -0.8}deg)`;
      front.style.transform = `translate(${-22 + delta * 8}px, ${delta * -14}px) rotate(${-2 + delta * 0.6}deg)`;
    };
    window.addEventListener('scroll', () => {
      if (!ticking.raf) {
        ticking.raf = true;
        requestAnimationFrame(updateMobileHero);
      }
    }, { passive: true });
    updateMobileHero();
  }
}


// ============ features scrollytelling ============
const steps = document.querySelectorAll('.scrolly-steps .step');
const stack = document.getElementById('phoneStack');

function setStep(n) {
  steps.forEach(s => s.classList.toggle('is-active', +s.dataset.step === n));
  if (stack) {
    stack.querySelectorAll('.ps-img').forEach(img => {
      img.classList.toggle('is-active', +img.dataset.step === n);
    });
  }
}
setStep(1);

const stepIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setStep(+e.target.dataset.step);
    }
  });
}, { rootMargin: isMobile ? '-30% 0px -30% 0px' : '-45% 0px -45% 0px' });
steps.forEach(s => stepIO.observe(s));


// ============ iPad thumb switching + auto-rotate ============
const ipadThumbs   = document.querySelectorAll('.ipad-thumb');
const ipadStack    = document.getElementById('ipadStack');
let ipadStep  = 1;
let ipadTimer = null;

function setIpad(n) {
  ipadStep = n;
  ipadThumbs.forEach(b => b.classList.toggle('is-active', +b.dataset.step === n));
  if (ipadStack) {
    ipadStack.querySelectorAll('.ips-img').forEach(img => {
      img.classList.toggle('is-active', +img.dataset.step === n);
    });
  }
}

ipadThumbs.forEach(b => {
  b.addEventListener('click', () => {
    setIpad(+b.dataset.step);
    restartIpadTimer();
  });
});

function restartIpadTimer() {
  if (ipadTimer) clearInterval(ipadTimer);
  ipadTimer = setInterval(() => {
    const next = ipadStep >= 3 ? 1 : ipadStep + 1;
    setIpad(next);
  }, 4500);
}

const ipadSection = document.getElementById('ipad');
if (ipadSection) {
  const visIO = new IntersectionObserver((ents) => {
    ents.forEach(e => {
      if (e.isIntersecting) restartIpadTimer();
      else if (ipadTimer) { clearInterval(ipadTimer); ipadTimer = null; }
    });
  }, { threshold: 0.3 });
  visIO.observe(ipadSection);
}


// ============ marquee duration from data-speed ============
document.querySelectorAll('.marquee').forEach(el => {
  const speed = +el.dataset.speed || 40;
  el.style.setProperty('--mq-duration', speed + 's');
});


// ============ PiP caption cycle ============
const pipScripts = {
  'zh-Hans': [
    { src: '"…the convolutional layer learns local features in stages."', dst: '卷积层会分阶段学习局部特征。' },
    { src: '"Back-propagation is just the chain rule applied carefully."', dst: '反向传播其实就是仔细运用链式法则。' },
    { src: '"Let\'s look at a simple example before the math."',           dst: '我们先看一个简单的例子，再进入推导。' },
  ],
  'zh-Hant': [
    { src: '"…the convolutional layer learns local features in stages."', dst: '卷積層會分階段學習局部特徵。' },
    { src: '"Back-propagation is just the chain rule applied carefully."', dst: '反向傳播其實就是仔細運用鏈式法則。' },
    { src: '"Let\'s look at a simple example before the math."',           dst: '我們先看一個簡單的例子，再進入推導。' },
  ],
  en: [
    { src: '"今天我们一起看一下季度的销售管线。"', dst: '"Let\'s walk through this quarter\'s sales pipeline."' },
    { src: '"次のセッションは画面共有で進めます。"', dst: '"The next session will run with screen-share."' },
    { src: '"La nouvelle interface est beaucoup plus claire."', dst: '"The new interface is a lot clearer."' },
  ],
  ja: [
    { src: '"…the convolutional layer learns local features in stages."', dst: '畳み込み層は局所的な特徴を段階的に学習します。' },
    { src: '"Back-propagation is just the chain rule applied carefully."', dst: '逆伝播は連鎖律を丁寧に適用したものです。' },
    { src: '"今天我们一起看一下季度的销售管线。"', dst: '今日は今四半期の販売パイプラインを見ていきましょう。' },
  ],
  ko: [
    { src: '"…the convolutional layer learns local features in stages."', dst: '합성곱 레이어는 단계적으로 지역 특징을 학습합니다.' },
    { src: '"Back-propagation is just the chain rule applied carefully."', dst: '역전파는 연쇄 법칙을 신중하게 적용한 것입니다.' },
    { src: '"今天我们一起看一下季度的销售管线。"', dst: '오늘은 이번 분기 영업 파이프라인을 살펴보겠습니다.' },
  ],
  fr: [
    { src: '"…the convolutional layer learns local features in stages."', dst: 'La couche convolutive apprend les caractéristiques locales par étapes.' },
    { src: '"Back-propagation is just the chain rule applied carefully."', dst: 'La rétropropagation, c\'est juste la règle de dérivation en chaîne.' },
    { src: '"今天我们一起看一下季度的销售管线。"', dst: 'Parcourons ensemble le pipeline de ventes de ce trimestre.' },
  ],
  de: [
    { src: '"…the convolutional layer learns local features in stages."', dst: 'Die Faltungsschicht lernt lokale Merkmale stufenweise.' },
    { src: '"Back-propagation is just the chain rule applied carefully."', dst: 'Backpropagation ist nur die Kettenregel, sorgfältig angewendet.' },
    { src: '"今天我们一起看一下季度的销售管线。"', dst: 'Lass uns die Vertriebspipeline dieses Quartals durchgehen.' },
  ],
  es: [
    { src: '"…the convolutional layer learns local features in stages."', dst: 'La capa convolucional aprende características locales por etapas.' },
    { src: '"Back-propagation is just the chain rule applied carefully."', dst: 'La retropropagación es simplemente la regla de la cadena aplicada con cuidado.' },
    { src: '"今天我们一起看一下季度的销售管线。"', dst: 'Revisemos juntos el pipeline de ventas de este trimestre.' },
  ],
};

let pIdx = 0;
const pipSrcEl = document.getElementById('pipSrc');
const pipDstEl = document.getElementById('pipDst');
const pipMetaEl = document.querySelector('.pip-overlay .pip-meta');

function updatePipLocale(lang) {
  if (!pipSrcEl || !pipDstEl) return;
  const arr = pipScripts[lang] || pipScripts['en'];
  const f = arr[pIdx % arr.length];
  pipSrcEl.textContent = f.src;
  pipDstEl.textContent = f.dst;
  if (pipMetaEl) {
    const metaMap = {
      'zh-Hans': '译文 · 中文', 'zh-Hant': '譯文 · 中文', 'ja': '翻訳 · 日本語',
      'ko': '번역 · 한국어', 'fr': 'Traduction · FR', 'de': 'Übersetzung · DE',
      'es': 'Traducción · ES', 'en': 'Translation · EN'
    };
    pipMetaEl.textContent = metaMap[lang] || 'Translation · EN';
  }
}

function cyclePip() {
  if (!pipSrcEl || !pipDstEl) return;
  const lang = document.documentElement.lang;
  const arr = pipScripts[lang] || pipScripts['en'];
  pIdx = (pIdx + 1) % arr.length;
  const f = arr[pIdx];
  const card = pipSrcEl.closest('.pip-overlay');
  if (!card) return;
  card.style.transition = 'opacity .4s';
  card.style.opacity = 0;
  setTimeout(() => {
    pipSrcEl.textContent = f.src;
    pipDstEl.textContent = f.dst;
    card.style.opacity = 1;
  }, 320);
}
setInterval(cyclePip, 3600);
