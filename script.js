new Typed("#typed", {
  strings: ["Bashorun", "Akobo", "Oluyole", "Ojo"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
});

const navbar = document.getElementById("navbar");
const book_now = document.getElementById("book-now");
const nav_line = document.querySelectorAll(".nav-line");
const mobile_nav = document.getElementById("mobile_nav");
const hamburger = document.getElementById("hamburger");

const close = document.getElementById("close");
const close_scroll_how_it_works = document.getElementById(
  "close_scroll_how_it_works"
);
const booking = document.getElementById("booking");
const booking_card = document.getElementById("booking_card");
const close_booking = document.getElementById("close_booking");
const order_now = document.querySelectorAll(".order_now");
const pricing_list = document.querySelector(".pricing_list");
const display_prices = document.querySelectorAll(".display_prices");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    // change number to control when it triggers
    navbar.classList.add(
      "bg-white",
      "shadow-md",
      "text-black",
      "fixed",
      "left-0",
      "right-0",
      "top-0",
      "px-4"
    );
    navbar.classList.remove("text-white", "relative");

    nav_line.forEach((el) => {
      el.classList.add("bg-black");
      el.classList.remove("bg-white");
    });
  } else {
    navbar.classList.remove(
      "bg-white",
      "shadow-md",
      "text-black",
      "fixed",
      "left-0",
      "right-0",
      "top-0",
      "px-4"
    );
    navbar.classList.add("text-white", "relative");
    nav_line.forEach((el) => {
      el.classList.remove("bg-black");
      el.classList.add("bg-white");
    });
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    book_now.classList.add("bg-[#0890F3]", "text-white");
    book_now.classList.remove("bg-white");
  } else {
    book_now.classList.add("bg-white");
    book_now.classList.remove("text-white");
  }
});

let isOpen = false;

console.log(isOpen);

if (hamburger) {
  hamburger.addEventListener("click", () => {
    isOpen = true;

    if (isOpen) {
      mobile_nav.classList.remove("hidden");
    } else {
      mobile_nav.classList.add("hidden");
    }
    document.body.style.overflow = "hidden";

    console.log(hamburger);
  });
}

close.addEventListener("click", () => {
  isOpen = false;

  if (isOpen) {
    mobile_nav.classList.remove("hidden");
  } else {
    mobile_nav.classList.add("hidden");
  }
  document.body.style.overflow = "auto";
});

close_scroll_how_it_works.addEventListener("click", () => {
  isOpen = false;

  if (isOpen) {
    mobile_nav.classList.remove("hidden");
  } else {
    mobile_nav.classList.add("hidden");
  }
  document.body.style.overflow = "auto";
});

let isBookingOpen = false;

function closeBooking() {
  if (isBookingOpen) {
    booking.classList.remove("hidden");
  } else {
    booking.classList.add("hidden");
  }
}

close_booking.addEventListener("click", () => {
  isBookingOpen = false;
  closeBooking();
});

order_now.forEach((btn) => {
  btn.addEventListener("click", () => {
    isBookingOpen = true;
    if (!isBookingOpen) {
      booking.classList.add("hidden");
    } else {
      booking.classList.remove("hidden");
    }
  });
});
booking_card.addEventListener("click", (e) => {
  e.stopPropagation();
});

booking.addEventListener("click", (e) => {
  isBookingOpen = false;
  closeBooking();
});

// Scroll Into js code

// Nav Links
const services_link = document.getElementById("services_link");
const home_link = document.getElementById("home_link");
const pricing_link = document.getElementById(" pricing_link");
const contact_link = document.getElementById("contact_link");
const about_us_link = document.getElementById("about_us_link");

// Section
const our_services = document.getElementById("our_services");
const home_section = document.getElementById("home_section");
const contact_section = document.getElementById("contact_section");
const how_it_works = document.getElementById("how_it_works");

services_link.addEventListener("click", () => {
  our_services.scrollIntoView({ behavior: "smooth" });
});

home_link.addEventListener("click", () => {
  home_section.scrollIntoView({ behavior: "smooth" });
});

contact_link.addEventListener("click", () => {
  contact_section.scrollIntoView({ behavior: "smooth" });
});

close_scroll_how_it_works.addEventListener("click", () => {
  how_it_works.scrollIntoView({ behavior: "smooth" });
});

// document.addEventListener("DOMContentLoaded", () => {
//   if ((window.location.hash = "#how_it_works")) {
//     how_it_works.scrollIntoView({ behavior: "smooth" });
//   }
// });
