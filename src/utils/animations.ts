// Observer for section animations
export const setupSectionAnimations = () => {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  
  sections.forEach((section) => {
    observer.observe(section);
  });
};

// Scroll animations for elements
export const animateOnScroll = (elementSelector: string, animationClass: string) => {
  const elements = document.querySelectorAll(elementSelector);
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  
  elements.forEach((element) => {
    observer.observe(element);
  });
};