// Sticky Navbar on Scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("shadow-md", window.scrollY > 50);
  });
  
  // Smooth Scroll to Sections
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeInUp");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  revealElements.forEach(el => observer.observe(el));
  
  // Dynamic Testimonial Carousel
  const testimonials = [
    {
      name: "Anisha Li",
      text: "“Manage has supercharged our team’s workflow...”",
      img: "images/avatar-anisha.png"
    },
    {
      name: "Ali Bravo",
      text: "“We have been able to cancel so many other subscriptions...”",
      img: "images/avatar-ali.png"
    },
    {
      name: "Richard Watts",
      text: "“Manage allows us to provide structure and process...”",
      img: "images/avatar-richard.png"
    }
  ];
  let currentTestimonial = 0;
  function rotateTestimonials() {
    const container = document.getElementById("testimonial-container");
    container.innerHTML = `
      <img src="${testimonials[currentTestimonial].img}" class="mx-auto w-16 rounded-full" />
      <h5 class="mt-4 text-lg font-bold">${testimonials[currentTestimonial].name}</h5>
      <p class="mt-2 text-sm">${testimonials[currentTestimonial].text}</p>
    `;
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }
  setInterval(rotateTestimonials, 4000);
  
  // Dark Mode Toggle
  const toggleBtn = document.getElementById("darkToggle");
  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Ripple Effect on Buttons
  document.querySelectorAll("button, .btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      const circle = document.createElement("span");
      circle.classList.add("ripple");
      this.appendChild(circle);
  
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;
  
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
      circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
  
      setTimeout(() => circle.remove(), 600);
    });
  });
  
  // Email Validation (if form is added later)
  function validateEmail(email) {
    const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return regex.test(email);
  }
  