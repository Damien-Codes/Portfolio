// Filtering system for certifications page
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const certificationCards = document.querySelectorAll('.certification-card-full');
    const countElement = document.getElementById('count');

    // Function to apply the filter logic
    function applyFilter(filterValue) {
        let visibleCount = 0;

        // Filter certifications
        certificationCards.forEach(card => {
            if (filterValue === 'all') { // LOGIC for "Diplômes & Certifications"
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.5s ease forwards';
                visibleCount++;
            }
            else {
                const categories = card.getAttribute('data-category');
                // The logic now applies only to the technical filters (web, mobile, etc.)
                if (categories && categories.includes(filterValue)) {
                    card.classList.remove('hidden');
                    // Add animation
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            }
        });

        // Update count
        if (countElement) {
            countElement.textContent = visibleCount;
            const textPlural = visibleCount > 1 ? 'éléments trouvés' : 'élément trouvé';
            // Find the text node after the span
            let textNode = countElement.nextSibling;
            if (textNode && textNode.nodeType === 3) {
                textNode.textContent = ' ' + textPlural;
            } else {
                // Fallback in case the structure is different
                countElement.insertAdjacentText('afterend', ' ' + textPlural);
            }
        }
    }


    // Filter functionality (Click listener)
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            applyFilter(filterValue);
        });
    });

    // Apply initial filter on page load (now applies 'all' which is the default active button)
    const initialActiveButton = document.querySelector('.filter-btn.active');
    if (initialActiveButton) {
        applyFilter(initialActiveButton.getAttribute('data-filter'));
    }

    // Smooth scroll for anchor links
    const certLinks = document.querySelectorAll('a[href^="#cert-"]');
    certLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // We click 'all' first to ensure the card is visible and all filters are reset
                const allButton = document.querySelector('.filter-btn[data-filter="all"]');
                if (allButton) {
                    allButton.click();
                }

                // Scroll to target (no need for a second filter click, as 'all' shows the target)
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });

                    // Highlight the card
                    targetElement.style.transform = 'scale(1.02)';
                    targetElement.style.borderColor = 'rgba(220, 38, 38, 0.6)';

                    setTimeout(() => {
                        targetElement.style.transform = '';
                        targetElement.style.borderColor = '';
                    }, 2000);
                }, 300);
            }
        });
    });
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
