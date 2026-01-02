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
/* =========== GPA 5.00 MODAL গ্যালারি লজিক : 3 =========== */
/* কাজ: “সবাই দেখুন” → স্লাইডারের সব শিক্ষার্থী গ্যালারিতে দেখানো */
/* ========================================================= */

(function () {
  const viewAllBtn = document.getElementById("view-all-btn");
  const galleryModal = document.getElementById("gallery-modal");
  const galleryClose = document.getElementById("gallery-close");
  const galleryBackdrop = document.getElementById("gallery-backdrop");
  const gpaGalleryGrid = document.getElementById("gpaGalleryGrid");

  if (!viewAllBtn || !galleryModal || !galleryClose || !galleryBackdrop || !gpaGalleryGrid) {
    return;
  }

  // স্লাইডারের সব student-card থেকে নাম/ব্যাচ/ফটো সংগ্রহ করে গ্যালারিতে বসানো
  function buildGpaGalleryFromSlider() {
    gpaGalleryGrid.innerHTML = "";

    const cards = document.querySelectorAll("#gpa-section .student-card");
    cards.forEach((card, index) => {
      const nameEl = card.querySelector(".student-name");
      const metaEl = card.querySelector(".student-meta");
      const imgEl = card.querySelector(".student-photo");

      const name = nameEl ? nameEl.textContent.trim() : `Student ${index + 1}`;
      const meta = metaEl ? metaEl.textContent.trim() : "GPA 5.00";
      const img = imgEl ? imgEl.getAttribute("src") : "Images/rajuImg.jpg";

      const item = document.createElement("div");
      item.className = "gallery-item";
      item.innerHTML = `
        <div class="gallery-photo-wrap">
          <img
            src="${img}"
            alt="${name}"
            class="gallery-photo"
          />
        </div>
        <div class="gallery-info">
          <div class="gallery-button">
            <div class="gallery-name">${name}</div>
            <div class="gallery-meta">${meta}</div>
          </div>
        </div>
      `;
      gpaGalleryGrid.appendChild(item);
    });
  }

  function openGallery() {
    buildGpaGalleryFromSlider();
    galleryModal.classList.add("active");
    galleryModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeGallery() {
    galleryModal.classList.remove("active");
    galleryModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  viewAllBtn.addEventListener("click", openGallery);
  galleryClose.addEventListener("click", closeGallery);
  galleryBackdrop.addEventListener("click", closeGallery);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && galleryModal.classList.contains("active")) {
      closeGallery();
    }
  });
})();

/* =========== GPA 5.00 MODAL গ্যালারি লজিক : 3 শেষ ========= */


/* ========================================================= */
/* =========== CLASSES MODAL & GALLERY LOGIC : 4 ========== */
/* কাজ: ক্লাস কার্ড থেকে মডাল ওপেন, শ্রেণি অনুযায়ী ছবি ফিল্টার */
/*      Alumni হলে বছর সিলেক্ট করে ফিল্টার + ইমেজ লাইটবক্স    */
/* ========================================================= */

const classModal = document.getElementById("classModal");
const modalClose = document.querySelector(".modal-close");
const detailsButtons = document.querySelectorAll(".details-btn");
const modalClassTitle = document.getElementById("modalClassTitle");
const galleryImages = document.querySelectorAll("#galleryGrid img");
const galleryTabBtn = document.querySelector(".tab-btn[data-tab='galleryTab']");
const galleryTabContent = document.getElementById("galleryTab");
const alumniYearBar = document.getElementById("alumniYearBar");
const yearButtons = document.querySelectorAll(".year-btn");

const classNameMap = {
  class6: "৬ষ্ঠ শ্রেণি",
  class7: "৭ম শ্রেণি",
  class8: "৮ম শ্রেণি",
  class9: "৯ম শ্রেণি",
  class10: "১০ম শ্রেণি",
  alumni: "প্রাক্তন শিক্ষার্থী",
};

if (
  classModal &&
  modalClose &&
  modalClassTitle &&
  galleryTabBtn &&
  galleryTabContent &&
  detailsButtons.length > 0
) {
  // class card click -> open modal
  detailsButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const clsKey = btn.dataset.class;
      const clsName = classNameMap[clsKey] || "শ্রেণি";

      modalClassTitle.textContent =
        clsKey === "alumni" ? `${clsName} (২০১০–২০২৫)` : clsName;

      // সব ছবি লুকাও
      galleryImages.forEach((img) => {
        img.style.display = "none";
      });

      if (clsKey !== "alumni") {
        // alumni বার লুকাও
        if (alumniYearBar) alumniYearBar.style.display = "none";

        // বর্তমান ক্লাসের ছবি দেখাও
        galleryImages.forEach((img) => {
          if (
            img.dataset.type === "current" &&
            img.dataset.class === clsKey
          ) {
            img.style.display = "block";
          }
        });
      } else {
        // alumni হলে Year bar দেখাও এবং ডিফল্ট বছর সিলেক্ট করো
        if (alumniYearBar) alumniYearBar.style.display = "flex";
        setActiveYear("2010");
      }

      classModal.classList.add("show");
    });
  });

  // close modal
  modalClose.addEventListener("click", () => {
    classModal.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === classModal) {
      classModal.classList.remove("show");
    }
  });
}

// Alumni year filter
function setActiveYear(year) {
  yearButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.year === year);
  });

  galleryImages.forEach((img) => {
    if (img.dataset.type === "alumni") {
      img.style.display = img.dataset.year === year ? "block" : "none";
    }
  });
}

yearButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setActiveYear(btn.dataset.year);
  });
});

// IMAGE LIGHTBOX

const imageLightbox = document.getElementById("imageLightbox");
const lightboxImg = document.getElementById("lightboxImg");
const imageLightboxClose = document.querySelector(".image-lightbox-close");

if (imageLightbox && lightboxImg && imageLightboxClose) {
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      if (img.style.display === "none") return;
      lightboxImg.src = img.src;
      imageLightbox.classList.add("show");
    });
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

/* =========== CLASSES MODAL & GALLERY LOGIC : 4 শেষ ======= */
//* ========================================================= */
/* ============ DIRECTOR SLIDER + FAQ LOGIC : 5 ============ */
/* কাজ: পরিচালক স্লাইডার prev/next, FAQ অ্যাকর্ডিয়ন ওপেন/ক্লোজ   */
/* ========================================================= */

(function () {
  /* ---------- DIRECTOR SLIDER ---------- */

  const directors = [
    {
      photo: "images/director1.jpg",
      name: "মোঃ আব্দুল করিম",
      subtitle: "প্রধান শিক্ষক, বানা এম এ মজিদ উচ্চ বিদ্যালয়",
      message:
        "এই বিদ্যালয়ের প্রতিটি শিক্ষার্থীকে আমরা ভবিষ্যতের নেতৃত্বে দেখতে চাই। নিয়মিত ক্লাস, অনুশীলন আর সৎ চরিত্রই সফলতার মূল চাবিকাঠি।",
      footer: "– মোঃ আব্দুল করিম, প্রধান শিক্ষক",
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

      // অন্য সব ওপেন আইটেম ক্লোজ
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

      // বর্তমান আইটেম টগল
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
  { name: "মাওলানা ডা. আল মাঈন", role: "মুহতামিম", photo: "../Images/rajuImg.jpg" },
  { name: "মাওলানা সাখাওয়াত উল্লাহ", role: "সাঈদুল হাদিস", photo: "../Images/rajuImg.jpg" },
  { name: "মাওলানা আল আমিন", role: "মোহাদ্দিস", photo: "../Images/rajuImg.jpg" },
  { name: "মাওলানা নুরনবী", role: "মোহাদ্দিস", photo: "../Images/rajuImg.jpg" },
  { name: "মুফতি মাজহারুল ইসলাম", role: "মোহাদ্দিস", photo: "../Images/rajuImg.jpg" }
];

const teachersBottom = [
  { name: "মুফতি আবু সালেহ", role: "মোহাদ্দিস", photo: "../Images/rajuImg.jpg" },
  { name: "মাওলানা আব্দুল বাসেত", role: "শিক্ষক", photo: "../Images/rajuImg.jpg" },
  { name: "মাওলানা আল আমিন", role: "শিক্ষক", photo: "../Images/rajuImg.jpg" },
  { name: "হাফেজ আলী আকবর", role: "শিক্ষক", photo: "../Images/rajuImg.jpg" },
  { name: "মোঃ মোশাররফ হোসেন", role: "শিক্ষক", photo: "../Images/rajuImg.jpg" }
];

const moreTeachers = [
  { name: "মোঃ মোজাম্মেল হক", role: "অফিস সহকারী", photo: "../Images/rajuImg.jpg" },
  { name: "আলেমা তাহারা", role: "শিক্ষিকা", photo: "../Images/rajuImg.jpg" },
  { name: "আলেমা সাদিকা", role: "শিক্ষিকা", photo: "../Images/rajuImg.jpg" },
  { name: "মালেকা যাদিয়া", role: "শিক্ষিকা", photo: "../Images/rajuImg.jpg" },
  { name: "আরিফা আক্তার", role: "শিক্ষিকা", photo: "../Images/rajuImg.jpg" }
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
  // ব্যাকড্রপে ক্লিক করলে বন্ধ করতে চাইলে পরের লাইন রাখো, নাহলে কমেন্ট করে দাও
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
      imgEl.closest(".teacher-card")?.querySelector(".name")?.textContent?.trim() || "";
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

  /* ট্যাব স্যুইচ লজিক */
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

  /* গ্যালারি কার্ড থেকে মডাল ওপেন */
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

  /* মডাল ক্লোজ */
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

  /* সব গ্যালারি কার্ডে ক্লিক হ্যান্ডলার */
  const galleryCards = Array.from(
    document.querySelectorAll("#school-gallery-wrapper .card")
  );

  galleryCards.forEach((card) => {
    card.addEventListener("click", () => openModalFromCard(card));
  });

  /* স্ক্রল রিভিল (যদি আগে গ্লোবাল না থাকে, মিনিমাল ভার্সন) */
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
  let startIndex = 0; // index of first visible item

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

      leavingCard.classList.add(
        "slide-leave-active",
        "slide-leave-to-left"
      );

      const newCard = createCard(testimonials[newIndex]);
      newCard.classList.add(
        "slide-enter-from-right",
        "slide-enter-active"
      );
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

      leavingCard.classList.add(
        "slide-leave-active",
        "slide-leave-to-right"
      );

      const newCard = createCard(testimonials[newIndex]);
      newCard.classList.add(
        "slide-enter-from-left",
        "slide-enter-active"
      );
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
