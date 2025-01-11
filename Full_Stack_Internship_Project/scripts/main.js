document.addEventListener('DOMContentLoaded', () => {
    // Tabs functionality
    const tabs = document.querySelectorAll('.tab');
    const articleContent = document.querySelector('.article-content');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
    
            // Update content dynamically
            const tabName = tab.textContent;
            if (tabName === 'Latest') {
                articleContent.innerHTML = `
                    <h2>Are Salesforce Certifications Still Relevant?</h2>
                    <p>Top Voices Join the Great Cert Debate</p>
                    <p>By Henry Martin - January 10, 2025</p>
                `;
            } else if (tabName === 'Most Popular') {
                articleContent.innerHTML = `
                    <h2>Top Salesforce Tools of 2025</h2>
                    <p>A deep dive into the tools transforming Salesforce</p>
                    <p>By Jane Doe - January 5, 2025</p>
                `;
            } else if (tabName === 'Editors\' Picks') {
                articleContent.innerHTML = `
                    <h2>5 Hidden Features in Salesforce You Should Know</h2>
                    <p>Learn about the features that save time and improve productivity</p>
                    <p>By John Smith - December 30, 2024</p>
                `;
            }
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Scroll-to-top button
    const scrollToTopButton = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
