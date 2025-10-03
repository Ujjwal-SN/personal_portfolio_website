document.addEventListener('DOMContentLoaded', function() {
    // Enhanced About Me section animations
    const aboutSection = document.getElementById('about');
    const profileImage = document.getElementById('profile-image');
    const aboutTexts = document.querySelectorAll('.about-text');
    const interestBadges = document.querySelectorAll('.interest-badge');
    
    // Add 3D tilt effect to profile image
    if (profileImage) {
        profileImage.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top; // y position within the element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX * 15; // max 15 degrees
            const deltaY = (y - centerY) / centerY * 15; // max 15 degrees
            
            this.style.transform = `perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    }
    
    // Add staggered animation to about text paragraphs
    if (aboutTexts.length > 0) {
        aboutTexts.forEach((text, index) => {
            text.style.opacity = '0';
            text.style.transform = 'translateY(20px)';
            text.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            text.style.transitionDelay = `${0.2 + (index * 0.1)}s`;
        });
        
        // Create observer for about section
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate text paragraphs when section is visible
                    aboutTexts.forEach(text => {
                        text.style.opacity = '1';
                        text.style.transform = 'translateY(0)';
                    });
                    
                    // Only observe once
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        aboutObserver.observe(aboutSection);
    }
    
    // Add magnetic effect to interest badges
    if (interestBadges.length > 0) {
        interestBadges.forEach(badge => {
            badge.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const deltaX = (x - centerX) / 8; // Reduced movement for subtle effect
                const deltaY = (y - centerY) / 8;
                
                this.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.1)`;
            });
            
            badge.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0) scale(1)';
            });
        });
    }
    
    // Add text highlight animation
    const highlightTexts = document.querySelectorAll('.highlight-text');
    if (highlightTexts.length > 0) {
        highlightTexts.forEach(text => {
            text.innerHTML = `<span class="highlight-inner">${text.textContent}</span>`;
            const inner = text.querySelector('.highlight-inner');
            
            text.addEventListener('mouseenter', function() {
                inner.style.backgroundSize = '100% 100%';
            });
            
            text.addEventListener('mouseleave', function() {
                inner.style.backgroundSize = '0% 100%';
            });
        });
    }
    
    // Add animated background particles to About section
    const createParticles = () => {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'about-particles';
        aboutSection.appendChild(particleContainer);
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'about-particle';
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 10 + 5;
            
            // Random animation duration
            const duration = Math.random() * 20 + 10;
            
            // Random delay
            const delay = Math.random() * 5;
            
            // Apply styles
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            particleContainer.appendChild(particle);
        }
    };
    
    createParticles();
    
    // Add CSS for the particles
    const style = document.createElement('style');
    style.textContent = `
        .about-particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
        }
        
        .about-particle {
            position: absolute;
            background: linear-gradient(45deg, var(--primary), #4f46e5);
            border-radius: 50%;
            opacity: 0.2;
            filter: blur(2px);
            animation: float-particle linear infinite;
        }
        
        @keyframes float-particle {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0.2;
            }
            25% {
                opacity: 0.3;
            }
            50% {
                transform: translate(100px, 50px) rotate(180deg);
                opacity: 0.2;
            }
            75% {
                opacity: 0.3;
            }
            100% {
                transform: translate(0, 0) rotate(360deg);
                opacity: 0.2;
            }
        }
        
        .highlight-inner {
            background-image: linear-gradient(120deg, var(--primary) 0%, #4f46e5 100%);
            background-repeat: no-repeat;
            background-size: 0% 100%;
            background-position: 0 88%;
            transition: background-size 0.5s ease;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding: 0.2em 0;
        }
    `;
    
    document.head.appendChild(style);
});