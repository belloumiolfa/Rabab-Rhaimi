/* -------------------------------------------

Name: 		Ruizarch
Version:    1.0
Developer:	Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). email: miller.themes@gmail.com

------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    /***************************
        swup
    ***************************/
    const options = {
        containers: ['#swupMain', '#swupMenu'],
        animateHistoryBrowsing: true,
    };

    /***************************
        register gsap plugins
    ***************************/
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    /***************************
        color variables
    ***************************/
    const accent = 'rgba(255, 152, 0, 1)';
    const dark = '#000';
    const light = '#fff';

    /***************************
        preloader
    ***************************/
    const timeline = gsap.timeline();

    timeline.to(".mil-preloader-animation", { opacity: 1 });

    timeline.fromTo(
        ".mil-animation-1 .mil-h3",
        { y: "30px", opacity: 0 },
        { y: "0px", opacity: 1, stagger: 0.4 }
    );

    timeline.to(".mil-animation-1 .mil-h3", { opacity: 0, y: '-30' }, "+=.3");

    timeline.fromTo(".mil-reveal-box", { opacity: 0 }, { opacity: 1, x: '-30' });

    timeline.to(".mil-reveal-box", 0.45, { width: "100%", x: 0 }, "+=.1");
    timeline.to(".mil-reveal-box", { right: "0" });
    timeline.to(".mil-reveal-box", 0.3, { width: "0%" });

    timeline.fromTo(".mil-animation-2 .mil-h3", { opacity: 0 }, { opacity: 1 }, "-=.5");
    timeline.to(".mil-animation-2 .mil-h3", 0.6, { opacity: 0, y: '-30' }, "+=.5");

    timeline.to(".mil-preloader", 0.8, { opacity: 0, ease: 'sine' }, "+=.2");

    timeline.fromTo(".mil-up", 0.8, { opacity: 0, y: 40, scale: .98, ease: 'sine' }, {
        y: 0,
        opacity: 1,
        scale: 1,
        onComplete: function () {
            const preloader = document.querySelector('.mil-preloader');
            if (preloader) {
                preloader.classList.add("mil-hidden");
            }
        }
    }, "-=1");

    /***************************
        anchor scroll
    ***************************/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                let offset = 0;
                if (window.innerWidth < 1200) {
                    offset = 90;
                }

                gsap.to(window, {
                    scrollTo: target.offsetTop - offset,
                    duration: 0.4
                });
            }
        });
    });


    /***************************

    append

    ***************************/
    const appendElements = () => {
        const arrow = document.querySelector('.mil-arrow')?.cloneNode(true);
        const dodecahedron = document.querySelector('.mil-dodecahedron')?.cloneNode(true);
        const lines = document.querySelector('.mil-lines')?.cloneNode(true);
        const activeLink = document.querySelector('.mil-main-menu ul li.mil-active > a')?.cloneNode(true);
    
        if (arrow) document.querySelector('.mil-arrow-place')?.appendChild(arrow);
        if (dodecahedron) document.querySelector('.mil-animation')?.appendChild(dodecahedron);
        if (lines) document.querySelector('.mil-lines-place')?.appendChild(lines);
        if (activeLink) document.querySelector('.mil-current-page')?.appendChild(activeLink);
    };
    appendElements();
    
    /***************************

    accordion

    ***************************/

    let groups = gsap.utils.toArray(".mil-accordion-group");
    let menus = gsap.utils.toArray(".mil-accordion-menu");
    let menuToggles = groups.map(createAnimation);

    menus.forEach((menu) => {
        menu.addEventListener("click", () => toggleMenu(menu));
    });

    function toggleMenu(clickedMenu) {
        menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
    }

    function createAnimation(element) {
        let menu = element.querySelector(".mil-accordion-menu");
        let box = element.querySelector(".mil-accordion-content");
        let symbol = element.querySelector(".mil-symbol");
        let minusElement = element.querySelector(".mil-minus");
        let plusElement = element.querySelector(".mil-plus");

        gsap.set(box, {
            height: "auto",
        });

        let animation = gsap
            .timeline()
            .from(box, {
                height: 0,
                duration: 0.4,
                ease: "sine"
            })
            .from(minusElement, {
                duration: 0.4,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .to(plusElement, {
                duration: 0.4,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .to(symbol, {
                background: accent,
                ease: "none",
            }, 0)
            .reverse();

        return function (clickedMenu) {
            if (clickedMenu === menu) {
                animation.reversed(!animation.reversed());
            } else {
                animation.reverse();
            }
        };
    }
    /***************************

    back to top

    ***************************/
    const btt = document.querySelector(".mil-back-to-top .mil-link");

    gsap.set(btt, {
        x: -30,
        opacity: 0,
    });

    gsap.to(btt, {
        x: 0,
        opacity: 1,
        ease: 'sine',
        scrollTrigger: {
            trigger: "body",
            start: "top -40%",
            end: "top -40%",
            toggleActions: "play none reverse none"
        }
    });
    /***************************

    cursor

    ***************************/
    const cursor = document.querySelector('.mil-ball');

    gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
    });

    document.addEventListener('pointermove', movecursor);

    function movecursor(e) {
        gsap.to(cursor, {
            duration: 0.6,
            ease: 'sine',
            x: e.clientX,
            y: e.clientY,
        });
    }

    const dragElements = document.querySelectorAll('.mil-drag');
    const moreElements = document.querySelectorAll('.mil-more');
    const chooseElements = document.querySelectorAll('.mil-choose');
    const accentElement = document.querySelector('.mil-accent-cursor');
    const bodyElement = document.body;

    function handleCursorEvents() {
        dragElements.forEach(element => {
            element.addEventListener('mouseover', () => {
                gsap.to(cursor, 0.2, {
                    width: 90,
                    height: 90,
                    opacity: 1,
                    ease: 'sine',
                });
            });

            element.addEventListener('mouseleave', () => {
                gsap.to(cursor, 0.2, {
                    width: 20,
                    height: 20,
                    opacity: 0.1,
                    ease: 'sine',
                });
            });
        });

        moreElements.forEach(element => {
            element.addEventListener('mouseover', () => {
                gsap.to(cursor.querySelector('.mil-more-text'), 0.2, {
                    scale: 1,
                    ease: 'sine',
                });
            });

            element.addEventListener('mouseleave', () => {
                gsap.to(cursor.querySelector('.mil-more-text'), 0.2, {
                    scale: 0,
                    ease: 'sine',
                });
            });
        });

        chooseElements.forEach(element => {
            element.addEventListener('mouseover', () => {
                gsap.to(cursor.querySelector('.mil-choose-text'), 0.2, {
                    scale: 1,
                    ease: 'sine',
                });
            });

            element.addEventListener('mouseleave', () => {
                gsap.to(cursor.querySelector('.mil-choose-text'), 0.2, {
                    scale: 0,
                    ease: 'sine',
                });
            });
        });

        // Accent cursor interaction
        if (accentElement) {
            accentElement.addEventListener('mouseover', () => {
                gsap.to(cursor, 0.2, {
                    background: accent,
                    ease: 'sine',
                });
                cursor.classList.add('mil-accent');
            });

            accentElement.addEventListener('mouseleave', () => {
                gsap.to(cursor, 0.2, {
                    background: dark,
                    ease: 'sine',
                });
                cursor.classList.remove('mil-accent');
            });
        }

        // Handling body mousedown and mouseup for the cursor effect
        bodyElement.addEventListener('mousedown', () => {
            gsap.to(cursor, 0.2, {
                scale: 0.1,
                ease: 'sine',
            });
        });

        bodyElement.addEventListener('mouseup', () => {
            gsap.to(cursor, 0.2, {
                scale: 1,
                ease: 'sine',
            });
        });
    }

    /***************************

    menu

***************************/
document.querySelector('.mil-menu-btn').addEventListener("click", function () {
    this.classList.toggle('mil-active');
    document.querySelector('.mil-menu').classList.toggle('mil-active');
    document.querySelector('.mil-menu-frame').classList.toggle('mil-active');
});

/***************************

    main menu

***************************/
document.querySelectorAll('.mil-has-children a').forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        document.querySelectorAll('.mil-has-children ul').forEach(function (ul) {
            ul.classList.remove('mil-active');
        });
        document.querySelectorAll('.mil-has-children a').forEach(function (link) {
            link.classList.remove('mil-active');
        });
        this.classList.toggle('mil-active');
        this.nextElementSibling.classList.toggle('mil-active');
    });
});

/***************************

    progressbar

***************************/
gsap.to('.mil-progress', {
    height: '100%',
    ease: 'sine',
    scrollTrigger: {
        scrub: 0.3
    }
});

/***************************

    scroll animations

***************************/

const appearance = document.querySelectorAll(".mil-up");

appearance.forEach((section) => {
    gsap.fromTo(section, {
        opacity: 0,
        y: 40,
        scale: .98,
        ease: 'sine',
    }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: .4,
        scrollTrigger: {
            trigger: section,
            toggleActions: 'play none none reverse',
        }
    });
});

const scaleImage = document.querySelectorAll(".mil-scale");

scaleImage.forEach((section) => {
    const value1 = section.dataset.value1;
    const value2 = section.dataset.value2;
    gsap.fromTo(section, {
        ease: 'sine',
        scale: value1,
    }, {
        scale: value2,
        scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: 'play none none reverse',
        }
    });
});

const parallaxImage = document.querySelectorAll(".mil-parallax");

if (window.innerWidth > 960) {
    parallaxImage.forEach((section) => {
        const value1 = section.dataset.value1;
        const value2 = section.dataset.value2;
        gsap.fromTo(section, {
            ease: 'sine',
            y: value1,
        }, {
            y: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });
}

const rotate = document.querySelectorAll(".mil-rotate");

rotate.forEach((section) => {
    const value = section.dataset.value;
    gsap.fromTo(section, {
        ease: 'sine',
        rotate: 0,
    }, {
        rotate: value,
        scrollTrigger: {
            trigger: section,
            scrub: true,
            toggleActions: 'play none none reverse',
        }
    });
});

/***************************

    fancybox

***************************/
document.querySelectorAll('[data-fancybox="gallery"]').forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        Fancybox.show([{
            src: item.getAttribute('href'),
            type: 'image',
            options: {
                buttons: [
                    "slideShow",
                    "zoom",
                    "fullScreen",
                    "close"
                ],
                loop: false,
                protect: true
            }
        }]);
    });
});

/***************************

    reviews slider

***************************/
const reviewMenu = [
    '<div class="mil-custom-dot mil-slide-1"></div>',
    '<div class="mil-custom-dot mil-slide-2"></div>',
    '<div class="mil-custom-dot mil-slide-3"></div>',
    '<div class="mil-custom-dot mil-slide-4"></div>',
    '<div class="mil-custom-dot mil-slide-5"></div>',
    '<div class="mil-custom-dot mil-slide-6"></div>',
    '<div class="mil-custom-dot mil-slide-7"></div>'
];

const mySwiper = new Swiper('.mil-reviews-slider', {
    pagination: {
        el: '.mil-revi-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">${reviewMenu[index]}</span>`;
        },
    },
    speed: 800,
    effect: 'fade',
    parallax: true,
    navigation: {
        nextEl: '.mil-revi-next',
        prevEl: '.mil-revi-prev',
    },
});

/***************************

    infinite slider

***************************/
new Swiper('.mil-infinite-show', {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 5000,
    autoplay: true,
    autoplay: {
        delay: 0,
    },
    loop: true,
    freeMode: true,
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
    },
});

   /***************************

    portfolio slider

    ***************************/
    new Swiper('.mil-portfolio-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        parallax: true,
        mousewheel: {
            enable: true
        },
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
    });

    /***************************

    1 item slider

    ***************************/
    new Swiper('.mil-1-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
    });

    /***************************

    2 item slider

    ***************************/
    var swiper = new Swiper('.mil-2-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
        },
    });

    /*----------------------------------------------------------
    ------------------------------------------------------------
    
    REINIT
    
    ------------------------------------------------------------
    ----------------------------------------------------------*/
    document.addEventListener("swup:contentReplaced", function () {

        window.scrollTo({ top: 0, behavior: 'smooth' });

        gsap.to('.mil-progress', {
            height: 0,
            ease: 'sine',
            onComplete: () => {
                ScrollTrigger.refresh()
            },
        });

        /***************************
        
        menu
        
        ***************************/
        document.querySelector('.mil-menu-btn')?.classList.remove('mil-active');
        document.querySelector('.mil-menu')?.classList.remove('mil-active');
        document.querySelector('.mil-menu-frame')?.classList.remove('mil-active');

        /***************************
        
        append
        
        ***************************/
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".mil-arrow-place .mil-arrow, .mil-animation .mil-dodecahedron, .mil-current-page a").forEach(el => el.remove());
            document.querySelector(".mil-arrow").cloneNode(true).appendTo(".mil-arrow-place");
            document.querySelector(".mil-dodecahedron").cloneNode(true).appendTo(".mil-animation");
            document.querySelector(".mil-lines").cloneNode(true).appendTo(".mil-lines-place");
            document.querySelector(".mil-main-menu ul li.mil-active > a").cloneNode(true).appendTo(".mil-current-page");
        });
        /***************************

accordion

***************************/

const groups = document.querySelectorAll(".mil-accordion-group");
const menus = document.querySelectorAll(".mil-accordion-menu");
const menuToggles = Array.from(groups).map(createAnimation);

menus.forEach((menu) => {
    menu.addEventListener("click", () => toggleMenu(menu));
});

function toggleMenu(clickedMenu) {
    menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
}

function createAnimation(element) {
    const menu = element.querySelector(".mil-accordion-menu");
    const box = element.querySelector(".mil-accordion-content");
    const symbol = element.querySelector(".mil-symbol");
    const minusElement = element.querySelector(".mil-minus");
    const plusElement = element.querySelector(".mil-plus");

    gsap.set(box, { height: "auto" });

    const animation = gsap.timeline()
        .from(box, { height: 0, duration: 0.4, ease: "sine" })
        .from(minusElement, { duration: 0.4, autoAlpha: 0, ease: "none" }, 0)
        .to(plusElement, { duration: 0.4, autoAlpha: 0, ease: "none" }, 0)
        .to(symbol, { background: accent, ease: "none" }, 0)
        .reverse();

    return function (clickedMenu) {
        if (clickedMenu === menu) {
            animation.reversed(!animation.reversed());
        } else {
            animation.reverse();
        }
    };
}

/***************************

cursor

***************************/

const cursor = document.querySelector(".cursor");

function addMouseEvent(elements, enterProps, leaveProps) {
    elements.forEach(element => {
        element.addEventListener("mouseover", () => gsap.to(cursor, { duration: 0.2, ...enterProps }));
        element.addEventListener("mouseleave", () => gsap.to(cursor, { duration: 0.2, ...leaveProps }));
    });
}

addMouseEvent(document.querySelectorAll(".mil-drag, .mil-more, .mil-choose"),
    { width: 90, height: 90, opacity: 1, ease: "sine" },
    { width: 20, height: 20, opacity: 0.1, ease: "sine" }
);

addMouseEvent(document.querySelectorAll(".mil-accent-cursor"),
    { background: accent, ease: "sine" },
    { background: dark, ease: "sine" }
);

document.body.addEventListener("mousedown", () => gsap.to(cursor, { scale: 0.1, ease: "sine" }));
document.body.addEventListener("mouseup", () => gsap.to(cursor, { scale: 1, ease: "sine" }));

/***************************

main menu

***************************/

document.querySelectorAll(".mil-has-children a ").forEach(anchor => {
    anchor.addEventListener("click", function () {
        document.querySelectorAll(".mil-has-children ul").forEach(ul => ul.classList.remove("mil-active"));
        document.querySelectorAll(".mil-has-children a").forEach(a => a.classList.remove("mil-active"));
        this.classList.toggle("mil-active");
        this.nextElementSibling.classList.toggle("mil-active");
    });
});
        /***************************

        scroll animations

        ***************************/

        const appearance = document.querySelectorAll(".mil-up");

        appearance.forEach((section) => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 40,
                scale: .98,
                ease: 'sine',

            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: .4,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        const scaleImage = document.querySelectorAll(".mil-scale");

        scaleImage.forEach((section) => {
            let value1 = section.getAttribute("data-value-1");
            let value2 = section.getAttribute("data-value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                scale: value1,

            }, {
                scale: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        const parallaxImage = document.querySelectorAll(".mil-parallax");

        if (window.innerWidth > 960) {
            parallaxImage.forEach((section) => {
                let value1 = section.getAttribute("data-value-1");
                let value2 = section.getAttribute("data-value-2");
                gsap.fromTo(section, {
                    ease: 'sine',
                    y: value1,
                }, {
                    y: value2,
                    scrollTrigger: {
                        trigger: section,
                        scrub: true,
                        toggleActions: 'play none none reverse',
                    }
                });
            });
        }

        const rotate = document.querySelectorAll(".mil-rotate");

        rotate.forEach((section) => {
            let value = section.getAttribute("data-value");
            gsap.fromTo(section, {
                ease: 'sine',
                rotate: 0,
            }, {
                rotate: value,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        /***************************

        fancybox

        ***************************/
        document.querySelectorAll('[data-fancybox="gallery"]').forEach(item => {
            item.addEventListener("click", (event) => {
                event.preventDefault();
                Fancybox.show(
                    Array.from(document.querySelectorAll('[data-fancybox="gallery"]')).map(el => ({ src: el.href, type: "image" }))
                );
            });
        });

        /***************************
        reviews slider
***************************/
var menu = [
    '<div class="mil-custom-dot mil-slide-1"></div>',
    '<div class="mil-custom-dot mil-slide-2"></div>',
    '<div class="mil-custom-dot mil-slide-3"></div>',
    '<div class="mil-custom-dot mil-slide-4"></div>',
    '<div class="mil-custom-dot mil-slide-5"></div>',
    '<div class="mil-custom-dot mil-slide-6"></div>',
    '<div class="mil-custom-dot mil-slide-7"></div>'
  ];
  
  var mySwiper = new Swiper('.mil-reviews-slider', {
    pagination: {
      el: '.mil-revi-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
    speed: 800,
    effect: 'fade',
    parallax: true,
    navigation: {
      nextEl: '.mil-revi-next',
      prevEl: '.mil-revi-prev',
    },
  });
  
  /***************************
          infinite slider
  ***************************/
  var swiper = new Swiper('.mil-infinite-show', {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 5000,
    autoplay: {
      delay: 0,
    },
    loop: true,
    freeMode: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
    },
  });
  
  /***************************
          portfolio slider
  ***************************/
  var swiper = new Swiper('.mil-portfolio-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    parallax: true,
    mousewheel: {
      enable: true
    },
    navigation: {
      nextEl: '.mil-portfolio-next',
      prevEl: '.mil-portfolio-prev',
    },
    pagination: {
      el: '.swiper-portfolio-pagination',
      type: 'fraction',
    },
  });
  
  /***************************
          1 item slider
  ***************************/
  var swiper = new Swiper('.mil-1-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
      nextEl: '.mil-portfolio-next',
      prevEl: '.mil-portfolio-prev',
    },
    pagination: {
      el: '.swiper-portfolio-pagination',
      type: 'fraction',
    },
  });
  
  /***************************
          2 item slider
  ***************************/
  var swiper = new Swiper('.mil-2-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
      nextEl: '.mil-portfolio-next',
      prevEl: '.mil-portfolio-prev',
    },
    pagination: {
      el: '.swiper-portfolio-pagination',
      type: 'fraction',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
    },
  });
});

});
