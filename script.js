
      document.body.classList.toggle('no-scroll');
    ;
  
  
  // Portfolio page project filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (filterBtns.length && portfolioItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
            }, 100);
          } else {
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !subject || !message) {
        alert('Please fill all fields.');
        return;
      }
      
      // Simulate form submission
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate API call with timeout
      setTimeout(() => {
        // This would be replaced with actual API call
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Reset form
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId !== '#') {
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // If mobile menu is open, close it
          if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
          }
        }
      }
    });
  });
  
  // Animation on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('visible');
      }
    });
  }
  
  // Initial check for animations
  animateOnScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', animateOnScroll);
;

// Project filtering for index page
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-button');
  
  if (filterButtons) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filter = this.getAttribute('data-filter');
        const projectCards = document.querySelectorAll('.project-card');
        
        // Filter projects
        projectCards.forEach(card => {
          const categories = card.getAttribute('data-categories');
          
          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
        
        // Show "No Projects" message if all projects are hidden
        const noProjects = document.getElementById('no-projects');
        if (noProjects) {
          const visibleProjects = document.querySelectorAll('.project-card[style="display: block;"]');
          
          if (visibleProjects.length === 0) {
            noProjects.style.display = 'block';
          } else {
            noProjects.style.display = 'none';
          }
        }
      });
    });
  }
});