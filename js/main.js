


console.log('JS LOADED');


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODaL ===============*/

const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloseBtns = document.querySelectorAll('.services__modal-close');

const openModal = (index) => {
    modalViews[index].classList.add('active-modal');
  };

  const closeModal = (index) => {
    modalViews[index].classList.remove('active-modal');
  };



const modal = (index) => {
  modalViews[index].classList.add('active-modal');
};

modalBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modal(i);
  });
});

modalCloseBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    modalViews.forEach(modalView => {
      modalView.classList.remove('active-modal');
    });
  });
});

modalViews.forEach((modalView) => {
    modalView.addEventListener('click', (e) => {
      if (e.target === modalView) {
        modalView.classList.remove('active-modal');
      }
    });
  });

/*===============MIXTUP FILTER PORFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target:'.work__card'
    },
    animation: {
        duration: 300
    }
});

       
/* Link active work */
const linkWork = document.querySelectorAll('.work__item');

// Make Work filter buttons highlight active filter
linkWork.forEach((link) => {
    link.addEventListener('click', () => {
      // Remove active-work from all buttons
      linkWork.forEach((btn) => btn.classList.remove('active-work'));
      // Add active-work to the clicked button
      link.classList.add('active-work');
    });
  });
  
  



const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Show Menu */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Hide Menu */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ON LINK CLICK ===============*/
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);

/*=============== ADD BLUR TO HEADER ON SCROLL ===============*/
function blurHeader() {
  const header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.classList.add("blur-header");
  } else {
    header.classList.remove("blur-header");
  }
}
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP BUTTON ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 60;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav ul li a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("visible");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
/*========== LIGHT Dark theme ==========*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // we save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});



/*=============== show custom error ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact__form");
  const emailInput = document.getElementById("contact-email");
  const errorMessage = document.querySelector(".contact__form-error-message");

  form.addEventListener("submit", function (e) {
    errorMessage.textContent = "";
    errorMessage.classList.remove("show");
  
    if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
      e.preventDefault();
      errorMessage.textContent = "Please insert a valid email";
      errorMessage.classList.add("show");
    }
  });
});
