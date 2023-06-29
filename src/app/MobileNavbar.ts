// Scroll
window.addEventListener('scroll', () => {   
    const nav = document.querySelector('nav') as HTMLElement;
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    if (scrollPosition >= 0) {
      nav.classList.add('scroll-down');
    } else {
      nav.classList.remove('scroll-down');
    }
});
  
// Nav
class MobileNavbar {
    private mobileMenu: HTMLElement;
    private navList: HTMLElement;
    private navLinks: NodeListOf<HTMLElement>;
    private activeClass: string;
  
    constructor(mobileMenu: string, navList: string, navLinks: string) {
      this.mobileMenu = document.querySelector(mobileMenu) as HTMLElement;
      this.navList = document.querySelector(navList) as HTMLElement;
      this.navLinks = document.querySelectorAll(navLinks) as NodeListOf<HTMLElement>;
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    private animateLinks(): void {
      this.navLinks.forEach((link: HTMLElement, index: number) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
    }
  
    private handleClick(): void {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    public addClickEvent(): void {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    public init(): MobileNavbar {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
mobileNavbar.init();




// // scroll
// window.addEventListener('scroll', function() {   
//   var nav = document.querySelector('nav');
//   var scrollPosition = window.scrollY || window.pageYOffset;
  
//   if (scrollPosition > 0) {
//     nav.classList.add('scroll-down');
//   } else {
//     nav.classList.remove('scroll-down');
//   }

// });



// // nav
// class MobileNavbar {
//     constructor(mobileMenu, navList, navLinks) {
//       this.mobileMenu = document.querySelector(mobileMenu);
//       this.navList = document.querySelector(navList);
//       this.navLinks = document.querySelectorAll(navLinks);
//       this.activeClass = "active";
  
//       this.handleClick = this.handleClick.bind(this);
//     }
  
//     animateLinks() {
//       this.navLinks.forEach((link, index) => {
//         link.style.animation
//           ? (link.style.animation = "")
//           : (link.style.animation = `navLinkFade 0.5s ease forwards ${
//               index / 7 + 0.3
//             }s`);
//       });
//     }
  
//     handleClick() {
//       this.navList.classList.toggle(this.activeClass);
//       this.mobileMenu.classList.toggle(this.activeClass);
//       this.animateLinks();
//     }
  
//     addClickEvent() {
//       this.mobileMenu.addEventListener("click", this.handleClick);
//     }
  
//     init() {
//       if (this.mobileMenu) {
//         this.addClickEvent();
//       }
//       return this;
//     }
//   }
  
//   const mobileNavbar = new MobileNavbar(
//     ".mobile-menu",
//     ".nav-list",
//     ".nav-list li",
//   );
// mobileNavbar.init();  