const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});


const sections = [
    selectElementByClass('home'),
    selectElementByClass('about'),
    selectElementByClass('services'),
    selectElementByClass('downloads'),
    selectElementByClass('contact'),
  ];
  
  const navItems = {
    home: selectElementByClass('homeNavItem'),
    about: selectElementByClass('aboutNavItem'),
    services: selectElementByClass('servicesNavItem'),
    downloads: selectElementByClass('downloadsNavItem'),
    contact: selectElementByClass('contactNavItem'),
  };

function selectElementByClass(className) {
    return document.querySelector(`.${className}`);
  }

