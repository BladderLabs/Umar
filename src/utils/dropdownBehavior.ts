export const setupDropdownBehavior = (
  trigger: HTMLElement,
  dropdown: HTMLElement,
  autoCloseDelay = 3000
) => {
  let autoCloseTimer: number;
  
  const showDropdown = () => {
    dropdown.style.opacity = '1';
    dropdown.style.visibility = 'visible';
    dropdown.style.transform = 'translateY(0)';
    trigger.setAttribute('aria-expanded', 'true');
  };

  const hideDropdown = () => {
    dropdown.style.opacity = '0';
    dropdown.style.visibility = 'hidden';
    dropdown.style.transform = 'translateY(-10px)';
    trigger.setAttribute('aria-expanded', 'false');
  };

  const toggleDropdown = () => {
    const isVisible = dropdown.style.visibility === 'visible';
    if (isVisible) {
      hideDropdown();
    } else {
      showDropdown();
    }
  };

  // Toggle on click
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  // Show on hover (desktop only)
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  if (mediaQuery.matches) {
    trigger.addEventListener('mouseenter', showDropdown);
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(autoCloseTimer);
    });

    trigger.addEventListener('mouseleave', () => {
      autoCloseTimer = window.setTimeout(hideDropdown, autoCloseDelay);
    });

    dropdown.addEventListener('mouseleave', () => {
      autoCloseTimer = window.setTimeout(hideDropdown, autoCloseDelay);
    });
  }

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as Node;
    if (!dropdown.contains(target) && !trigger.contains(target)) {
      hideDropdown();
    }
  });

  // Handle escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideDropdown();
    }
  });

  // Initial state
  hideDropdown();
};