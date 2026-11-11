const resources = [
  {
    id: 1,
    level: "primary",
    subject: "math",
    type: "الفروض",
    emoji: "📐",
    title: "فرض الرياضيات - السلسلة 1",
    description: "تمارين على الجبر والهندسة مع تصحيح مختصر.",
    meta: "الابتدائي · السنة 5",
    badge: "Popular"
  },
  {
    id: 2,
    level: "middle",
    subject: "arabic",
    type: "الاختبارات",
    emoji: "📖",
    title: "اختبار اللغة العربية",
    description: "مفاهيم القراءة، التعبير، والنحو مع نصوص تدريبية.",
    meta: "المتوسط · 3AM",
    badge: "New"
  },
  {
    id: 3,
    level: "secondary",
    subject: "science",
    type: "المذكرات",
    emoji: "🔬",
    title: "مذكرة علوم الطبيعة والحياة",
    description: "ملخص مبسط ومفصل للمنهج مع أسئلة محلولة.",
    meta: "الثانوي · جذع مشترك",
    badge: "Top"
  },
  {
    id: 4,
    level: "bac",
    subject: "physics",
    type: "الامتحانات",
    emoji: "⚛️",
    title: "امتحان فيزياء بكالوريا",
    description: "اختبارات سابقة مع حلول نموذجية ومفاهيم أساسية.",
    meta: "البكالوريا · شعبة علوم",
    badge: "Hot"
  },
  {
    id: 5,
    level: "middle",
    subject: "english",
    type: "الفروض",
    emoji: "🗣️",
    title: "فرض اللغة الإنجليزية",
    description: "تمارين على القواعد، الاستماع، والمحادثة.",
    meta: "المتوسط · 2AM",
    badge: "New"
  },
  {
    id: 6,
    level: "bac",
    subject: "history",
    type: "التقويم",
    emoji: "🏛️",
    title: "تقييم تاريخ و جغرافيا",
    description: "أسئلة مراجعة مختصرة وملخصات مراجعة سريعة.",
    meta: "البكالوريا · علوم إنسانية",
    badge: "Popular"
  }
];

const translations = {
  ar: {
    heroEyebrow: "منصة تعليمية الجزائر",
    heroTitle: "الفروض والامتحانات لجميع المستويات",
    heroSubtitle:
      "اكتشف مئات الفروض، الامتحانات، الملفات، والمذكرات عبر مختلف المراحل الدراسية في الجزائر.",
    searchBtn: "بحث",
    statsFiles: "ملف",
    statsLevels: "مستوى",
    statsSubjects: "مادة",
    todayTrend: "الموضوعات الشائعة",
    trend1Title: "رياضيات 3AM",
    trend1Meta: "فرض + تصحيح",
    trend2Title: "لغة عربية",
    trend2Meta: "اختبارات سابقة",
    trend3Title: "بكالوريا علوم",
    trend3Meta: "امتحان تجريبي",
    levelsEyebrow: "المراحل الدراسية",
    levelsTitle: "اختر مستواك",
    levelPrimary: "ابتدائي",
    levelPrimaryText: "تمارين وملفات تعليمية مبسطة.",
    levelMiddle: "متوسط",
    levelMiddleText: "فروض وامتحانات حسب كل سنة.",
    levelSecondary: "ثانوي",
    levelSecondaryText: "أفضل الموارد للجذع المشترك.",
    levelBac: "بكالوريا",
    levelBacText: "امتحانات سابقة وتدريبات مكثفة.",
    subjectsEyebrow: "المواد",
    subjectsTitle: "اختر المادة",
    resourcesEyebrow: "الموارد",
    resourcesTitle: "أحدث الفروض والاختبارات",
    viewMore: "عرض المزيد",
    featuresEyebrow: "مزايا المنصة",
    featuresTitle: "كل ما تحتاجه للتعلم",
    feature1Title: "محتوى منظم",
    feature1Text: "حفظ وتصفية أفضل الموارد حسب المستوى والمادة.",
    feature2Title: "تجهيز ممتاز",
    feature2Text: "اختبارات وحلول ومذكرات مناسبة للتحضير.",
    feature3Title: "تصميم متجاوب",
    feature3Text: "يعمل بجودة عالية على الهاتف والكمبيوتر.",
    footerText: "منصة تعليمية عربية وفرنسية للطلاب في الجزائر.",
  },
  fr: {
    heroEyebrow: "Plateforme éducative Algerie",
    heroTitle: "Devoirs et examens pour tous les niveaux",
    heroSubtitle:
      "Découvrez des centaines de devoirs, examens, fiches et mémos pour toutes les étapes scolaires en Algérie.",
    searchBtn: "Rechercher",
    statsFiles: "fichiers",
    statsLevels: "niveaux",
    statsSubjects: "matières",
    todayTrend: "Sujets populaires",
    trend1Title: "Maths 3AM",
    trend1Meta: "Devoir + correction",
    trend2Title: "Arabe",
    trend2Meta: "Examens antérieurs",
    trend3Title: "Bac sciences",
    trend3Meta: "Examen blanc",
    levelsEyebrow: "Les niveaux",
    levelsTitle: "Choisissez votre niveau",
    levelPrimary: "Primaire",
    levelPrimaryText: "Exercices et ressources pédagogiques simples.",
    levelMiddle: "Moyen",
    levelMiddleText: "Devoirs et examens selon chaque année.",
    levelSecondary: "Secondaire",
    levelSecondaryText: "Les meilleures ressources pour le cycle moyen.",
    levelBac: "Baccalauréat",
    levelBacText: "Examens antérieurs et entraînements intensifs.",
    subjectsEyebrow: "Matières",
    subjectsTitle: "Choisissez la matière",
    resourcesEyebrow: "Ressources",
    resourcesTitle: "Derniers devoirs et examens",
    viewMore: "Voir plus",
    featuresEyebrow: "Avantages",
    featuresTitle: "Tout ce dont vous avez besoin",
    feature1Title: "Contenu organisé",
    feature1Text: "Filtrage et classement des meilleures ressources.",
    feature2Title: "Préparation optimale",
    feature2Text: "Examens, corrigés et fiches adapté à la préparation.",
    feature3Title: "Design responsive",
    feature3Text: "Parfait sur mobile et ordinateur.",
    footerText: "Plateforme éducative arabe et française pour les étudiants en Algérie.",
  }
};

const state = {
  language: "ar",
  subject: "all"
};

const resourceGrid = document.getElementById("resourceGrid");
const searchInput = document.getElementById("searchInput");

function renderResources() {
  const searchValue = searchInput.value.trim().toLowerCase();

  const filtered = resources.filter((item) => {
    const subjectMatch = state.subject === "all" || item.subject === state.subject;
    const searchMatch =
      !searchValue ||
      item.title.toLowerCase().includes(searchValue) ||
      item.description.toLowerCase().includes(searchValue) ||
      item.meta.toLowerCase().includes(searchValue);
    return subjectMatch && searchMatch;
  });

  if (!filtered.length) {
    resourceGrid.innerHTML = `
      <div class="resource-card" style="grid-column: 1 / -1; padding: 28px; text-align: center;">
        <h3>Aucun résultat trouvé</h3>
        <p>Essayez un autre mot-clé ou sélectionnez une autre matière.</p>
      </div>
    `;
    return;
  }

  resourceGrid.innerHTML = filtered
    .map(
      (item) => `
        <article class="resource-card">
          <div class="resource-cover">${item.emoji}</div>
          <div class="resource-content">
            <div class="resource-top">
              <span class="tag">${item.badge}</span>
              <span class="meta">${item.type}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="resource-actions">
              <button class="cta">Télécharger</button>
              <span class="rating">${item.meta}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const searchPlaceholder = lang === "ar" ? "ابحث عن درس، مادة، أو امتحان..." : "Rechercher un cours, matière ou examen...";
  searchInput.placeholder = searchPlaceholder;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

function setLanguage(lang) {
  state.language = lang;
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  applyTranslations(lang);
}

function bindEvents() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  document.querySelectorAll(".subject-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.subject = chip.dataset.subject;
      document.querySelectorAll(".subject-chip").forEach((item) => {
        item.classList.toggle("active", item === chip);
      });
      renderResources();
    });
  });

  searchInput.addEventListener("input", renderResources);
}

bindEvents();
renderResources();
setLanguage("ar");
