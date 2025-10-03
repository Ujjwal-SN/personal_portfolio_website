document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect for the greeting
    const typeWriter = (element, text, speed = 100) => {
        let i = 0;
        element.textContent = '';
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Start blinking animation after typing is complete
                const caret = document.querySelector('.typing-caret');
                if (caret) {
                    caret.style.animation = 'blink-caret 0.75s step-end infinite';
                }
            }
        };
        type();
    };

    // Initialize typewriter effect for the greeting
    const greetingText = "Hi, I'm Ujjwal Singh";
    const greetingElement = document.getElementById('greeting-text');
    if (greetingElement) {
        // Start typing after a short delay
        setTimeout(() => {
            typeWriter(greetingElement, greetingText, 100);
        }, 500);
    }

    // Image handling code removed - using local images directly in HTML
    const projectImageContainers = document.querySelectorAll('.project-image-container');
    projectImageContainers.forEach((container, idx) => {
        const img = document.createElement('img');
        img.src = projectImages[idx % projectImages.length];
        img.alt = 'Project Preview';
        img.style.width = '100%';
        img.style.height = '180px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '12px 12px 0 0';
        img.loading = 'lazy';
        container.innerHTML = '';
        container.appendChild(img);
    });
    // Custom cursor effect removed
    // Initialize particles.js for background effect
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    
    // Scroll progress indicator
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalHeight) * 100;
            scrollProgress.style.width = progress + '%';
        });
    }
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            // Toggle icon between bars and times
            const icon = mobileMenuButton.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuButton.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // Improved nav highlight on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    window.addEventListener('scroll', () => {
        // Progress bar
        const scrollProgress = document.querySelector('.scroll-progress');
        if (scrollProgress) {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalHeight) * 100;
            scrollProgress.style.width = progress + '%';
        }
        // Nav active effect using getBoundingClientRect
        let currentSectionId = '';
        let minDistance = window.innerHeight;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom > 120) {
                currentSectionId = section.id;
            }
            // fallback: closest to top
            if (rect.top > 0 && rect.top < minDistance) {
                minDistance = rect.top;
                if (!currentSectionId) currentSectionId = section.id;
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('text-primary');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('text-primary');
            }
        });
    });

    // Typewriter effect for about section greeting only when in view
    let aboutTyped = false;
    function isAboutInView() {
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return false;
        const rect = aboutSection.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
    }
    function triggerAboutTypewriter() {
        if (aboutTyped) return;
        if (isAboutInView()) {
            aboutTyped = true;
            const aboutTyper = document.getElementById('about-typer');
            if (aboutTyper) {
                const text = 'Hello, I am Ujjwal.';
                let i = 0;
                function typeWriter() {
                    if (i <= text.length) {
                        aboutTyper.textContent = text.slice(0, i);
                        i++;
                        setTimeout(typeWriter, 80);
                    }
                }
                typeWriter();
            }
        }
    }
    window.addEventListener('scroll', triggerAboutTypewriter);
    window.addEventListener('DOMContentLoaded', triggerAboutTypewriter);

    // WhatsApp integration for contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            // Validate required fields
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            if (!name || !email || !subject || !message) {
                // Let the default validation and error display run
                return;
            }
            // WhatsApp number (no + or spaces)
            const phone = '916395145388';
            // Compose message
            const waMessage =
                `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
            // WhatsApp API link
            const waLink = `https://wa.me/${phone}?text=${waMessage}`;
            // Open WhatsApp
            window.open(waLink, '_blank');
            // Prevent default form submission
            e.preventDefault();
        }, true);
    }
});