console.log("pricing.js");
console.log("pricing.js 2");

const navbar = document.getElementById("navbar");
const book_now = document.getElementById("book-now");
const nav_line = document.querySelectorAll(".nav-line");
const mobile_nav = document.getElementById("mobile_nav");
const hamburger = document.getElementById("hamburger-price-page");

const close = document.getElementById("close-price-page");
const booking = document.getElementById("booking");
const booking_card = document.getElementById("booking_card");
const close_booking = document.getElementById("close_booking-price-page");
const order_now = document.querySelectorAll(".order_now");
const pricing_list = document.querySelector(".pricing_list");
const display_prices = document.querySelectorAll(".display_prices");

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

const how_it_works_pricing_page = document.getElementById(
  "how_it_works_pricing_page"
);

how_it_works_pricing_page.addEventListener("click", () => {
  window.location.href = "../home/index.html#how_it_works";
});
