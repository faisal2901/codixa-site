/* ============================================
   CODIXA - Shared JavaScript
   ============================================ */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Fade-up scroll animations
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Pricing toggle (INR / USD)
  const toggleBtns = document.querySelectorAll('.pricing-toggle button');
  if (toggleBtns.length) {
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const currency = btn.dataset.currency; // 'inr' or 'usd'
        document.querySelectorAll('[data-inr]').forEach(el => {
          el.textContent = currency === 'inr' ? el.dataset.inr : el.dataset.usd;
        });
      });
    });
  }

  // FAQ accordions
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    }
  });

  // Contact form
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const obj = Object.fromEntries(data.entries());

      // Build mailto fallback (no backend yet)
      const subject = encodeURIComponent(`New project inquiry: ${obj['project-type'] || 'General'}`);
      const body = encodeURIComponent(
        `Name: ${obj.name}\nEmail: ${obj.email}\nPhone: ${obj.phone || '-'}\n` +
        `Project Type: ${obj['project-type']}\nBudget: ${obj.budget}\n\nMessage:\n${obj.message}`
      );

      // Show success state
      const successEl = document.querySelector('.form-success');
      if (successEl) {
        successEl.classList.add('show');
        successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Open default mail client as a fallback
      window.location.href = `mailto:mfaisal@eb1aexperts.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        form.reset();
        if (successEl) successEl.classList.remove('show');
      }, 6000);
    });
  }

  // Smooth nav background on scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.background = window.scrollY > 50
        ? 'rgba(7, 7, 13, 0.92)'
        : 'rgba(7, 7, 13, 0.7)';
    });
  }
});
