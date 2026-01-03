/* ========================================================= */
/* ============ NAV & MOBILE SCROLL LOGIC : 1 ============== */
/* কাজ: স্মুথ স্ক্রল, মোবাইল মেনু ওপেন/ক্লোজ, মোবাইল ন্যাভ লিঙ্ক */
/* ========================================================= */

document.documentElement.style.scrollBehavior = "smooth";

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");

function openMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
  hamburger?.classList.add("active");
}

function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
  hamburger?.classList.remove("active");
}

if (hamburger && mobileClose && mobileMenu) {
  hamburger.addEventListener("click", openMobileMenu);
  mobileClose.addEventListener("click", closeMobileMenu);
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      closeMobileMenu();
    }
  });
}

// mobile nav item click -> scroll + close
document.querySelectorAll(".mobile-nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    const target = item.dataset.target;
    if (target) {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  });
});

/* ============ NAV & MOBILE SCROLL LOGIC : 1 শেষ =========== */

/* ========================================================= */
/* =========== GPA 5.00 STUDENT DATA : 3A ================== */
/* কাজ: সব GPA 5.00 প্রাপ্ত শিক্ষার্থীর নাম, GPA, SSC বছর, ছবি */
/* শুধু এই অ্যারেতেই ডেটা এডিট/অ্যাড করবে                     */
/* ========================================================= */

const gpaStudents = [
  {
    name: "রিফাত হাসান",
    gpa: "5.00",
    year: "SSC ২০২৪",
    photo: "Images/GPA5/rifat_2024.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  {
    name: "নওশিন আক্তার",
    gpa: "5.00",
    year: "SSC ২০২৩",
    photo: "Images/GPA5/naushin_2023.jpg",
  },
  // ... যাদের আছে, এইভাবেই যোগ করো
];

/* ========================================================= */
/* ===== SCROLL ANIMATION + COUNTER + FX : 2 =============== */
/* কাজ: .animate/.reveal শো, স্ট্যাটস কাউন্টার, মারকুই ট্রিম, ফ্লোট */
/* ========================================================= */

// SCROLL REVEAL + .animate
const animatedItems = document.querySelectorAll(".animate");
const revealItems = document.querySelectorAll(".reveal");

// শুরুতে সব reveal এলিমেন্টকে hidden
revealItems.forEach((el) => el.classList.add("hidden"));

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.target.classList.contains("animate")) {
        entry.target.classList.add("show");
      }

      if (entry.target.classList.contains("reveal")) {
        entry.target.classList.remove("hidden");
      }

      scrollObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

// observe
animatedItems.forEach((item) => scrollObserver.observe(item));
revealItems.forEach((el) => scrollObserver.observe(el));

// COUNTER ANIMATION (stats)
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = Math.ceil(target / 100);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// MARQUEE TEXT CLEANUP (hero)
const notice = document.querySelector(".animate-marquee span");
if (notice) {
  notice.textContent = notice.textContent.trim();
}

// OPTIONAL FLOATING CARDS (যদি .float ক্লাস ব্যবহার করো)
const students = document.querySelectorAll(".float");
students.forEach((card, i) => {
  let pos = 0;
  let dir = i % 2 === 0 ? 1 : -1;
  setInterval(() => {
    pos += dir * 0.3;
    if (Math.abs(pos) > 10) dir *= -1;
    card.style.transform = `translateY(${pos}px)`;
  }, 40);
});

/* ===== SCROLL ANIMATION + COUNTER + FX : 2 শেষ =========== */

/* ========================================================= */
/* =========== GPA 5.00 SLIDER + MODAL : 3 ================= */
/* কাজ: gpaStudents অ্যারে থেকে স্লাইডার + View All গ্যালারি */
/* ========================================================= */

(function () {
  // স্লাইডারের জন্য কার্ড বানানো
  function createGpaCard(student) {
    const card = document.createElement("div");
    card.className = "student-card";
    card.innerHTML = `
      <div class="student-info">
        <h4 class="student-name">${student.name}</h4>
        <p class="student-meta">GPA ${student.gpa} · ${student.year}</p>
      </div>
      <div class="student-photo-wrap">
        <img src="${student.photo}" alt="${student.name}" class="student-photo" />
      </div>
    `;
    return card;
  }

  function initGpaSlider() {
    const topTrack = document.getElementById("gpaTrackTop");
    const bottomTrack = document.getElementById("gpaTrackBottom");
    if (!topTrack || !bottomTrack || !Array.isArray(gpaStudents)) return;

    topTrack.innerHTML = "";
    bottomTrack.innerHTML = "";

    const half = Math.ceil(gpaStudents.length / 2);
    const topStudents = gpaStudents.slice(0, half);
    const bottomStudents = gpaStudents.slice(half);

    topStudents.forEach((s) => topTrack.appendChild(createGpaCard(s)));
    bottomStudents.forEach((s) => bottomTrack.appendChild(createGpaCard(s)));
  }

  const viewAllBtn = document.getElementById("view-all-btn");
  const galleryModal = document.getElementById("gallery-modal");
  const galleryClose = document.getElementById("gallery-close");
  const galleryBackdrop = document.getElementById("gallery-backdrop");
  const gpaGalleryGrid = document.getElementById("gpaGalleryGrid");

  function buildGpaGalleryFromData() {
    if (!gpaGalleryGrid) return;
    gpaGalleryGrid.innerHTML = "";

    gpaStudents.forEach((student) => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.innerHTML = `
        <div class="gallery-photo-wrap">
          <img src="${student.photo}" alt="${student.name}" class="gallery-photo" />
        </div>
        <div class="gallery-info">
          <div class="gallery-name">${student.name}</div>
          <div class="gallery-meta">GPA ${student.gpa} · ${student.year}</div>
          <div class="gallery-button">শুভেচ্ছা</div>
        </div>
      `;
      gpaGalleryGrid.appendChild(item);
    });
  }

  function openGallery() {
    if (!galleryModal) return;
    buildGpaGalleryFromData();
    galleryModal.classList.add("active");
    galleryModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeGallery() {
    if (!galleryModal) return;
    galleryModal.classList.remove("active");
    galleryModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.addEventListener("DOMContentLoaded", () => {
    initGpaSlider();
  });

  if (viewAllBtn) viewAllBtn.addEventListener("click", openGallery);
  if (galleryClose) galleryClose.addEventListener("click", closeGallery);
  if (galleryBackdrop) galleryBackdrop.addEventListener("click", closeGallery);

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      galleryModal &&
      galleryModal.classList.contains("active")
    ) {
      closeGallery();
    }
  });
})();

/* ========================================================= */
/* ============ CLASSES MODAL & GALLERY : 7 ================ */
/* ========================================================= */

const classModal = document.getElementById("classModal");
const modalClose = document.querySelector(".modal-close");
const detailsButtons = document.querySelectorAll(".details-btn");
const modalClassTitle = document.getElementById("modalClassTitle");
const galleryTabBtn = document.querySelector(".tab-btn[data-tab='galleryTab']");
const galleryTabContent = document.getElementById("galleryTab");
const alumniYearBar = document.getElementById("alumniYearBar");
const yearButtons = document.querySelectorAll(".year-btn");
const galleryGrid = document.getElementById("galleryGrid");

const imageLightbox = document.getElementById("imageLightbox");
const lightboxImg = document.getElementById("lightboxImg");
const imageLightboxClose = document.querySelector(".image-lightbox-close");

/* ---------- তোমার GitHub repo info ---------- */
const GH_OWNER = "HamimRaju";
const GH_REPO = "Bana_M_A_Majid_High_School";

/* ---------- class key -> বাংলা নাম ---------- */
const classNameMap = {
  class6: "৬ষ্ঠ শ্রেণি",
  class7: "৭ম শ্রেণি",
  class8: "৮ম শ্রেণি",
  class9: "৯ম শ্রেণি",
  class10: "১০ম শ্রেণি",
  alumni: "প্রাক্তন শিক্ষার্থী",
};

/* ---------- class key -> GitHub folder path ---------- */
const classFolderMap = {
  class6: "Images/All_Classes_6_10/Class_Six",
  class7: "Images/All_Classes_6_10/Class_Seven",
  class8: "Images/All_Classes_6_10/Class_Eight",
  class9: "Images/All_Classes_6_10/Class_Nine",
  class10: "Images/All_Classes_6_10/Class_Ten",
};

/* ---------- Alumni base folder ---------- */
const alumniBaseFolder = "Images/Alumni_2010_2025";

/* ---------- Utility: GitHub contents API থেকে ফাইল লিস্ট ---------- */
async function fetchGithubImages(path) {
  const apiUrl = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${path}`;
  const res = await fetch(apiUrl, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!res.ok) {
    console.error("GitHub API error:", res.status, path);
    throw new Error("GitHub API error");
  }

  const items = await res.json();

  return items
    .filter(
      (item) =>
        item.type === "file" &&
        /\.(jpe?g|png|gif|webp)$/i.test(item.name)
    )
    .map((item) => item.download_url);
}

/* ---------- Render helpers ---------- */

function clearGallery() {
  galleryGrid.innerHTML = "";
}

function showLoading() {
  galleryGrid.innerHTML =
    '<p style="grid-column: 1/-1; font-size:12px; color:#6b7280;">লোড হচ্ছে...</p>';
}

function showError() {
  galleryGrid.innerHTML =
    '<p style="grid-column: 1/-1; font-size:12px; color:#ef4444;">ছবি লোড করা যায়নি। পরে আবার চেষ্টা করুন।</p>';
}

/* ---------- বর্তমান ক্লাসের গ্যালারি লোড (class6–class10) ---------- */
async function loadCurrentClassGallery(clsKey) {
  const folder = classFolderMap[clsKey];
  if (!folder) return;

  clearGallery();
  showLoading();

  try {
    const urls = await fetchGithubImages(folder);
    clearGallery();

    if (urls.length === 0) {
      galleryGrid.innerHTML =
        '<p style="grid-column:1/-1;font-size:12px;color:#6b7280;">এখনও কোন ছবি যোগ করা হয়নি।</p>';
      return;
    }

    urls.forEach((url) => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = "student";
      img.dataset.type = "current";
      img.dataset.class = clsKey;
      img.loading = "lazy";
      galleryGrid.appendChild(img);
    });
  } catch (err) {
    console.error(err);
    showError();
  }
}

/* ---------- Alumni নির্দিষ্ট বছরের গ্যালারি লোড ---------- */
async function loadAlumniYearGallery(year) {
  const folder = `${alumniBaseFolder}/${year}`;
  clearGallery();
  showLoading();

  try {
    const urls = await fetchGithubImages(folder);
    clearGallery();

    if (urls.length === 0) {
      galleryGrid.innerHTML =
        '<p style="grid-column:1/-1;font-size:12px;color:#6b7280;">এই বছরের জন্য এখনও ছবি যোগ করা হয়নি।</p>';
      return;
    }

    urls.forEach((url) => {
      const img = document.createElement("img");
      img.src = url;
      img.alt = "alumni";
      img.dataset.type = "alumni";
      img.dataset.year = year;
      img.loading = "lazy";
      galleryGrid.appendChild(img);
    });
  } catch (err) {
    console.error(err);
    showError();
  }
}

/* ---------- Alumni year button active state ---------- */
function setActiveYear(year) {
  yearButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.year === year);
  });
}

/* ---------- Modal open / close ---------- */

if (
  classModal &&
  modalClose &&
  modalClassTitle &&
  galleryTabBtn &&
  galleryTabContent &&
  detailsButtons.length > 0
) {
  detailsButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const clsKey = btn.dataset.class;
      const clsName = classNameMap[clsKey] || "শ্রেণি";

      modalClassTitle.textContent =
        clsKey === "alumni" ? `${clsName} (২০১০–২০২৫)` : clsName;

      if (clsKey !== "alumni") {
        if (alumniYearBar) alumniYearBar.style.display = "none";
        loadCurrentClassGallery(clsKey);
      } else {
        if (alumniYearBar) alumniYearBar.style.display = "flex";
        setActiveYear("2010");
        loadAlumniYearGallery("2010");
      }

      classModal.classList.add("show");
    });
  });

  modalClose.addEventListener("click", () => {
    classModal.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === classModal) {
      classModal.classList.remove("show");
    }
  });
}

/* ---------- Alumni year buttons click ---------- */
yearButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const year = btn.dataset.year;
    setActiveYear(year);
    loadAlumniYearGallery(year);
  });
});

/* ---------- IMAGE LIGHTBOX (event delegation) ---------- */
if (imageLightbox && lightboxImg && imageLightboxClose && galleryGrid) {
  galleryGrid.addEventListener("click", (e) => {
    const img = e.target.closest("img");
    if (!img) return;
    lightboxImg.src = img.src;
    imageLightbox.classList.add("show");
  });

  imageLightboxClose.addEventListener("click", () => {
    imageLightbox.classList.remove("show");
  });

  imageLightbox.addEventListener("click", (e) => {
    if (e.target === imageLightbox) {
      imageLightbox.classList.remove("show");
    }
  });
}

/* =========== CLASSES MODAL & GALLERY LOGIC : 7 শেষ ======= */

/* ========================================================= */
/* ============ DIRECTOR SLIDER + FAQ LOGIC : 5 ============ */
/* কাজ: পরিচালক স্লাইডার prev/next, FAQ অ্যাকর্ডিয়ন ওপেন/ক্লোজ   */
/* ========================================================= */

(function () {
  /* ---------- DIRECTOR SLIDER ---------- */

  const directors = [
    {
      photo: "https://raw.githubusercontent.com/HamimRaju/Bana_M_A_Majid_High_School/refs/heads/main/Images/Directors/WhatsApp%20Image%202026-01-03%20at%2003.07.47.jpeg",
      name: "হাদী সাহেব আলী ",
      subtitle: " ভারপ্রাপ্ত প্রধান শিক্ষক, বানা এম এ মজিদ উচ্চ বিদ্যালয়",
      message:
        "এই বিদ্যালয়ের প্রতিটি শিক্ষার্থীকে আমরা ভবিষ্যতের নেতৃত্বে দেখতে চাই। নিয়মিত ক্লাস, অনুশীলন আর সৎ চরিত্রই সফলতার মূল চাবিকাঠি।",
      footer: "– হাদী সাহেব আলী ,ভারপ্রাপ্ত প্রধান শিক্ষক",
    },
    {
      photo: "images/director2.jpg",
      name: "শিরিন আক্তার",
      subtitle: "সহকারী প্রধান শিক্ষক (অ্যাকাডেমিক)",
      message:
        "নিজের লক্ষ্য পরিষ্কার থাকলে সামনে এগিয়ে যাওয়া অনেক সহজ হয়। আমরা চেষ্টা করি প্রত্যেক শিক্ষার্থীর ভেতরের মেধাকে জাগিয়ে তুলতে।",
      footer: "– শিরিন আক্তার, সহকারী প্রধান শিক্ষক",
    },
    {
      photo: "images/director3.jpg",
      name: "মোঃ শহিদুল ইসলাম",
      subtitle: "ব্যবস্থাপনা কমিটির সভাপতি",
      message:
        "বিদ্যালয়ের অবকাঠামো থেকে শুরু করে পাঠদানের পদ্ধতি—সবকিছুই যেন সময়োপযোগী হয়, সেটা নিশ্চিত করাই আমাদের দায়িত্ব। অভিভাবকদের সহযোগিতা এখানে সবচেয়ে বড় শক্তি।",
      footer: "– মোঃ শহিদুল ইসলাম, সভাপতি",
    },
  ];

  const photoEl = document.getElementById("director-photo");
  const nameEl = document.getElementById("director-name");
  const subtitleEl = document.getElementById("director-subtitle");
  const messageEl = document.getElementById("director-message");
  const footerEl = document.getElementById("director-footer");
  const countEl = document.getElementById("director-count");

  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (
    photoEl &&
    nameEl &&
    subtitleEl &&
    messageEl &&
    footerEl &&
    prevBtn &&
    nextBtn
  ) {
    let currentIndex = 0;

    function renderDirector(index) {
      const data = directors[index];

      [photoEl, nameEl, subtitleEl, messageEl, footerEl].forEach((el) => {
        el.classList.remove("fade-enter-active");
        void el.offsetWidth;
        el.classList.add("fade-enter", "fade-enter-active");
        setTimeout(() => el.classList.remove("fade-enter"), 10);
      });

      photoEl.src = data.photo;
      photoEl.alt = data.name;
      nameEl.textContent = data.name;
      subtitleEl.textContent = data.subtitle;
      messageEl.textContent = data.message;
      footerEl.textContent = data.footer;

      if (countEl) {
        countEl.textContent = `${index + 1} / ${directors.length}`;
      }
    }

    function goToNext() {
      currentIndex = (currentIndex + 1) % directors.length;
      renderDirector(currentIndex);
    }

    function goToPrev() {
      currentIndex = (currentIndex - 1 + directors.length) % directors.length;
      renderDirector(currentIndex);
    }

    nextBtn.addEventListener("click", goToNext);
    prevBtn.addEventListener("click", goToPrev);

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    });

    renderDirector(currentIndex);
  }

  /* ---------- FAQ ACCORDION ---------- */

  const accordionHeaders = document.querySelectorAll(
    "#director-faq .accordion-header"
  );

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion-item");
      const body = item ? item.querySelector(".accordion-body") : null;
      if (!body) return;

      const isOpen = body.classList.contains("open");

      document
        .querySelectorAll("#director-faq .accordion-body.open")
        .forEach((openBody) => {
          if (openBody !== body) {
            openBody.style.maxHeight = null;
            openBody.classList.remove("open");
            const openHeader = openBody.previousElementSibling;
            openHeader && openHeader.classList.remove("open");
          }
        });

      if (!isOpen) {
        body.classList.add("open");
        header.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
      } else {
        body.style.maxHeight = null;
        body.classList.remove("open");
        header.classList.remove("open");
      }
    });
  });
})();

/* ======== DIRECTOR SLIDER + FAQ LOGIC : 5 শেষ ============= */

/* ========================================================= */
/* ============ TEACHERS SECTION LOGIC : 9 ================= */
/* ========================================================= */

const teachersTop = [
  {
    name: "সুমন সেন ",
    role: "শিক্ষক (বাংলা)",
    photo: "https://raw.githubusercontent.com/HamimRaju/Bana_M_A_Majid_High_School/refs/heads/main/Images/Teachers/WhatsApp%20Image%202026-01-03%20at%2003.07.46.jpeg",
  },
  {
    name: "রাফেজা পারভীন ",
    role: "শিক্ষিকা (ইংরেজি)",
    photo: "https://raw.githubusercontent.com/HamimRaju/Bana_M_A_Majid_High_School/refs/heads/main/Images/Teachers/WhatsApp%20Image%202026-01-03%20at%2003.07.47%20(1).jpeg",
  },
  {
    name: "হাদী সাহেব আলী ",
    role: "শিক্ষক",
    photo: "https://raw.githubusercontent.com/HamimRaju/Bana_M_A_Majid_High_School/refs/heads/main/Images/Teachers/WhatsApp%20Image%202026-01-03%20at%2003.07.47.jpeg",
  },
  {
    name: "মানবেন্দ্র সাহা ",
    role: "শিক্ষক (গণিত)",
    photo: "https://raw.githubusercontent.com/HamimRaju/Bana_M_A_Majid_High_School/refs/heads/main/Images/Teachers/WhatsApp%20Image%202026-01-03%20at%2003.07.48%20(1).jpeg",
  },
  {
    name: "মো: কামাল শেখ ",
    role: "শিক্ষক (ইংরেজি)",
    photo: "https://raw.githubusercontent.com/HamimRaju/Bana_M_A_Majid_High_School/refs/heads/main/Images/Teachers/WhatsApp%20Image%202026-01-03%20at%2003.07.48%20(2).jpeg",
  },
];

const teachersBottom = [
  {
    name: "মো: জাকির হোসেন ",
    role: "শিক্ষক (হিসাববিজ্ঞান)",
    photo: "https://raw.githubusercontent.com/HamimRaju/Bana_M_A_Majid_High_School/refs/heads/main/Images/Teachers/WhatsApp%20Image%202026-01-03%20at%2003.07.48.jpeg",
  },
  {
    name: "মাওলানা আব্দুল বাসেত",
    role: "শিক্ষক",
    photo: "../Images/rajuImg.jpg",
  },
  {
    name: "মাওলানা আল আমিন",
    role: "শিক্ষক",
    photo: "../Images/rajuImg.jpg",
  },
  {
    name: "হাফেজ আলী আকবর",
    role: "শিক্ষক",
    photo: "../Images/rajuImg.jpg",
  },
  {
    name: "মোঃ মোশাররফ হোসেন",
    role: "শিক্ষক",
    photo: "../Images/rajuImg.jpg",
  },
];

const moreTeachers = [
  {
    name: "মোঃ মোজাম্মেল হক",
    role: "অফিস সহকারী",
    photo: "../Images/rajuImg.jpg",
  },
  {
    name: "আলেমা তাহারা",
    role: "শিক্ষিকা",
    photo: "../Images/rajuImg.jpg",
  },
  {
    name: "আলেমা সাদিকা",
    role: "শিক্ষিকা",
    photo: "../Images/rajuImg.jpg",
  },
  {
    name: "মালেকা যাদিয়া",
    role: "শিক্ষিকা",
    photo: "../Images/rajuImg.jpg",
  },
  {
    name: "আরিফা আক্তার",
    role: "শিক্ষিকা",
    photo: "../Images/rajuImg.jpg",
  },
];

function createTeacherCardElement(teacher) {
  const card = document.createElement("article");
  card.className = "teacher-card";
  card.innerHTML = `
    <div class="card-inner">
      <div class="teacher-photo-ring">
        <div class="teacher-photo-wrap">
          <img 
            src="${teacher.photo}" 
            alt="${teacher.name}" 
            class="teacher-photo"
            loading="lazy"
          />
        </div>
      </div>
      <h3 class="name">${teacher.name}</h3>
      <div class="role-badge">${teacher.role}</div>
    </div>
  `;
  return card;
}

function initTeachersSection() {
  const topTrack = document.getElementById("topTrack");
  const bottomTrack = document.getElementById("bottomTrack");
  const overlayPage = document.getElementById("overlayPage");
  const seeAllBtn = document.getElementById("seeAllBtn");
  const closeOverlay = document.getElementById("closeOverlay");
  const overlayGrid = document.getElementById("overlayGrid");

  if (!topTrack || !bottomTrack || !overlayPage) return;

  function populateTrack(trackElement, teachers) {
    const fragment = document.createDocumentFragment();
    teachers.forEach((t) => fragment.appendChild(createTeacherCardElement(t)));
    teachers.forEach((t) => fragment.appendChild(createTeacherCardElement(t)));
    trackElement.appendChild(fragment);
  }

  populateTrack(topTrack, teachersTop);
  populateTrack(bottomTrack, teachersBottom);

  function openOverlay() {
    if (!overlayPage || !overlayGrid) return;
    overlayGrid.innerHTML = "";
    const all = [...teachersTop, ...teachersBottom, ...moreTeachers];
    all.forEach((t) => overlayGrid.appendChild(createTeacherCardElement(t)));
    overlayPage.classList.add("active");
    overlayPage.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeOverlayFn() {
    if (!overlayPage) return;
    overlayPage.classList.remove("active");
    overlayPage.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (seeAllBtn && closeOverlay) {
    seeAllBtn.addEventListener("click", openOverlay);
    closeOverlay.addEventListener("click", closeOverlayFn);
    overlayPage.addEventListener("click", (e) => {
      if (e.target === overlayPage) closeOverlayFn();
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlayPage.classList.contains("active")) {
        closeOverlayFn();
      }
    });
  }

  // ---------- LIGHTBOX ----------
  const lb = document.getElementById("teacherLightbox");
  const lbImg = document.getElementById("teacherLightboxImg");
  const lbCaption = document.getElementById("teacherLightboxCaption");
  const lbClose = document.getElementById("teacherLightboxClose");
  const lbBackdrop = document.getElementById("teacherLightboxBackdrop");

  function openTeacherLightbox(src, caption) {
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = caption || "";
    if (lbCaption) lbCaption.textContent = caption || "";
    lb.classList.add("active");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeTeacherLightbox() {
    if (!lb) return;
    lb.classList.remove("active");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (lbClose) lbClose.addEventListener("click", closeTeacherLightbox);
  // if (lbBackdrop) lbBackdrop.addEventListener("click", closeTeacherLightbox);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lb && lb.classList.contains("active")) {
      closeTeacherLightbox();
    }
  });

  document.addEventListener("click", (e) => {
    const imgEl = e.target.closest(".teacher-photo");
    if (!imgEl) return;
    const caption =
      imgEl.closest(".teacher-card")?.querySelector(".name")?.textContent?.trim() ||
      "";
    openTeacherLightbox(imgEl.src, caption);
  });
}

document.addEventListener("DOMContentLoaded", initTeachersSection);

/* ============ TEACHERS SECTION LOGIC : 9 শেষ ============= */

/*  */
/*  SCHOOL GALLERY TABS & MODAL : 8  */
/* কাজ: ট্যাব সুইচ, কার্ডে ক্লিক করলে লাইটবক্স মডাল ওপেন/ক্লোজ         */
/*  */

(function () {
  const tabsContainer = document.getElementById("filterTabs");
  const tabButtons = tabsContainer
    ? Array.from(tabsContainer.querySelectorAll(".tab-pill"))
    : [];
  const tabPanels = Array.from(
    document.querySelectorAll("#school-gallery-wrapper .tab-panel")
  );

  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalMeta = document.getElementById("modalMeta");
  const modalCaption = document.getElementById("modalCaption");
  const modalClose = document.getElementById("modalClose");

  function handleTabClick(targetId) {
    tabButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.target === targetId);
    });

    tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === targetId);
    });
  }

  if (tabsContainer && tabButtons.length && tabPanels.length) {
    tabsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab-pill");
      if (!btn) return;
      const targetId = btn.dataset.target;
      if (!targetId) return;
      handleTabClick(targetId);
    });
  }

  function openModalFromCard(card) {
    if (!card || !modal) return;

    const image = card.getAttribute("data-image");
    const title = card.getAttribute("data-title") || "স্কুলের স্মৃতি";
    const year = card.getAttribute("data-year") || "";
    const category = card.getAttribute("data-category") || "";
    const caption =
      card.getAttribute("data-caption") ||
      "এই মুহূর্তটির বিস্তারিত তথ্য এখানে দেখানো হবে।";

    modalImage.src = image || "";
    modalTitle.textContent = title;
    modalMeta.textContent = [category, year].filter(Boolean).join(" · ");
    modalCaption.textContent = caption;

    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const galleryCards = Array.from(
    document.querySelectorAll("#school-gallery-wrapper .card")
  );

  galleryCards.forEach((card) => {
    card.addEventListener("click", () => openModalFromCard(card));
  });

  const revealBlocks = Array.from(
    document.querySelectorAll("#school-gallery-wrapper .card-outer.reveal")
  );

  if ("IntersectionObserver" in window && revealBlocks.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealBlocks.forEach((el) => io.observe(el));
  } else {
    revealBlocks.forEach((el) => el.classList.add("show"));
  }
})();

/*===============SCHOOL GALLERY TABS & MODAL : 8 শেষ ====================*/

/* ======================================================= */
/*  CONTACT & TESTIMONIALS LOGIC : 9  */
/* কাজ: টেস্টিমোনিয়াল স্লাইডার + 3D টিল্ট + স্ক্রল এন্ট্রান্স */
/* ======================================================= */

// Tilt effect
(function () {
  const maxTilt = 10;
  const speed = 200;

  function handleMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    const percentX = x / (width / 2);
    const percentY = y / (height / 2);

    const rotateY = percentX * maxTilt;
    const rotateX = -percentY * maxTilt;

    card.style.transform =
      "perspective(1100px) rotateX(" +
      rotateX +
      "deg) rotateY(" +
      rotateY +
      "deg) translateY(-4px)";
  }

  function handleLeave(e) {
    const card = e.currentTarget;
    card.style.transition = "transform " + speed + "ms ease";
    card.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
    setTimeout(() => {
      card.style.transition = "";
    }, speed);
  }

  document
    .querySelectorAll("#contact-testimonials [data-tilt]")
    .forEach((card) => {
      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
    });
})();

// Scroll entrance animation
(function () {
  const section = document.getElementById("contact-testimonials");
  if (!section) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  section.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
})();

// Map card click -> open Google Maps link
(function () {
  const mapCard = document.getElementById("mapCard");
  if (!mapCard) return;

  mapCard.addEventListener("click", function () {
    window.open("https://maps.app.goo.gl/ajJSj8z9EUAgdaEY6", "_blank");
  });
})();

// Testimonial slider: 6 items, 3 visible at a time, slide in/out from sides
(function () {
  const sliderRow = document.getElementById("sliderRow");
  const prevBtn = document.getElementById("arrowPrev");
  const nextBtn = document.getElementById("arrowNext");

  if (!sliderRow || !prevBtn || !nextBtn) return;

  const testimonials = [
    {
      text: "The website is easy to navigate and has a clean design. I was able to find what I needed quickly without any confusion.",
      name: "Jhone Dev",
      role: "Ex-student",
      stars: "★★★★☆",
      initials: "JD",
    },
    {
      text: "I love the wide variety of updates and notices available on the website. I always find what I am looking for within a few clicks.",
      name: "Luis Mark",
      role: "Guardian",
      stars: "★★★★★",
      initials: "LM",
    },
    {
      text: "The website sometimes loads slowly during peak hours, but overall it is very helpful for checking results and important notices online.",
      name: "Rahim",
      role: "Student",
      stars: "★★★★☆",
      initials: "R",
    },
    {
      text: "As a guardian, I appreciate getting notices and updates in one place. It saves time and keeps me informed about my child's activities.",
      name: "Fatema Akter",
      role: "Guardian",
      stars: "★★★★★",
      initials: "FA",
    },
    {
      text: "The new design feels modern and attractive. I enjoy browsing the gallery and reading important announcements on my phone.",
      name: "Sabbir Hossain",
      role: "Student",
      stars: "★★★★☆",
      initials: "SH",
    },
    {
      text: "Online admission information is very clear. It makes the whole process easy for new guardians who cannot visit the school frequently.",
      name: "Kamal Uddin",
      role: "Guardian",
      stars: "★★★★★",
      initials: "KU",
    },
  ];

  const VISIBLE = 3;
  let startIndex = 0;

  function createCard(item) {
    const card = document.createElement("article");
    card.className = "testimonial-card";
    card.innerHTML = `
      <p class="testimonial-text">${item.text}</p>
      <div class="testimonial-footer">
        <div class="test-info">
          <span class="test-name">${item.name}</span>
          <span class="test-role">${item.role}</span>
          <div class="test-stars">${item.stars}</div>
        </div>
        <div class="test-avatar-wrap">
          <div class="test-avatar-inner">${item.initials}</div>
        </div>
      </div>
    `;
    return card;
  }

  function renderInitial() {
    sliderRow.innerHTML = "";
    for (let i = 0; i < VISIBLE; i++) {
      const idx = (startIndex + i) % testimonials.length;
      const card = createCard(testimonials[idx]);
      sliderRow.appendChild(card);
    }
  }

  function slide(direction) {
    const cards = Array.from(sliderRow.children);
    if (cards.length !== VISIBLE) return;

    if (direction === "right") {
      const newIndex = (startIndex + VISIBLE) % testimonials.length;
      const leavingCard = cards[0];

      leavingCard.classList.add("slide-leave-active", "slide-leave-to-left");

      const newCard = createCard(testimonials[newIndex]);
      newCard.classList.add("slide-enter-from-right", "slide-enter-active");
      sliderRow.appendChild(newCard);

      setTimeout(() => {
        sliderRow.removeChild(leavingCard);
        newCard.classList.remove(
          "slide-enter-from-right",
          "slide-enter-active"
        );
      }, 350);

      startIndex = (startIndex + 1) % testimonials.length;
    } else if (direction === "left") {
      const newIndex =
        (startIndex - 1 + testimonials.length) % testimonials.length;
      const leavingCard = cards[cards.length - 1];

      leavingCard.classList.add("slide-leave-active", "slide-leave-to-right");

      const newCard = createCard(testimonials[newIndex]);
      newCard.classList.add("slide-enter-from-left", "slide-enter-active");
      sliderRow.insertBefore(newCard, sliderRow.firstChild);

      setTimeout(() => {
        sliderRow.removeChild(leavingCard);
        newCard.classList.remove(
          "slide-enter-from-left",
          "slide-enter-active"
        );
      }, 350);

      startIndex = newIndex;
    }
  }

  nextBtn.addEventListener("click", () => slide("right"));
  prevBtn.addEventListener("click", () => slide("left"));

  renderInitial();
})();

/*================== CONTACT & TESTIMONIALS LOGIC : 9 শেষ  ==================*/
/*================== There is no js code for footer Section  ==================*/
