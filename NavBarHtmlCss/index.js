const themeSwitch = document.querySelector('input');

// document.querySelector("img");
// allImages.forEach((value)=>{
//     value.oncontextmenu = ()=>{
//         return false;
//     }
// })

// provent RMC
document.addEventListener('contextmenu', event => event.preventDefault());

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

// intersection observer setup
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  };
  
  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // get the nav item corresponding to the id of the section
        // that is currently in view
        const navItem = navItems[entry.target.id];
        // add 'active' class on the navItem
        navItem.classList.add('active');
        // remove 'active' class from any navItem that is not
        // same as 'navItem' defined above
        Object.values(navItems).forEach((item) => {
          if (item != navItem) {
            item.classList.remove('active');
          }
        });
      }
    });
    
  }
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  sections.forEach((sec) => observer.observe(sec));


  // worldpress script run

/*

<script type="text/javascript">
document.addEventListener('contextmenu', event => event.preventDefault());
</script>

*/