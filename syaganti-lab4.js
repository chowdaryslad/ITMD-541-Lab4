// Satya Diresh Kumar Yaganti
// ITMD 541-01 Graduate Student

(function() {
    'use strict';

    // Requirement 1: Change the main headline
    document.querySelector('.text-4xl.font-bold.mb-4.text-white.relative.z-20').textContent = "Uplift Your Brand with Stellar Marketing";

    // Requirement 2: Change the subheadline with bold and italic formatting
    document.querySelector('.text-xl.mb-6.text-white.relative.z-20').innerHTML = "Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive and excel</i></b>.";

    // Requirement 3: Change hero background image
    document.querySelector('#hero').style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";

    // Requirement 4: Match navbar background color to footer
    let footerColor = getComputedStyle(document.querySelector('.bg-gray-800')).backgroundColor;
    document.querySelector('.bg-blue-600').style.backgroundColor = footerColor;

    // Requirement 5: Remove "Get Started" CTA button
    let ctaButton = document.querySelector('.relative.bg-blue-600.text-white.px-6.py-2.rounded.hover\\:bg-blue-700.z-20');
    if (ctaButton) ctaButton.remove();

    // Requirement 6: Center-align section headings
    document.querySelectorAll('.text-3xl.font-bold.mb-6').forEach(heading => {
        heading.style.textAlign = "center";
    });

    // Requirement 7: Change service icons color
    document.querySelectorAll('.material-symbols-outlined.text-6xl').forEach(icon => {
        icon.style.color = "#47C714"; // Change icon color to green
    });

    // Requirement 8: Change digital marketing icon to 'Ads Click'
    const iconElement = document.querySelector('.material-symbols-outlined');
    
    function changeIcon() {
        iconElement.innerText = 'ads_click'; // Change the icon to 'ads_click'
    }
    
    changeIcon();

    // Requirement 9: Adjust specialized marketing solutions layout at >= 1024px
    let styleTag = document.createElement('style');
    styleTag.textContent = `
    @media (min-width: 1024px) {
        .grid.grid-cols-1.md\\:grid-cols-2.gap-6 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
    }
    `;
    document.head.appendChild(styleTag);

    // Requirement 10: Change Musicians image
    let musicianImg = document.querySelector('img[alt="Musicians"]'); 
    if (musicianImg) {
        musicianImg.src = "https://picsum.photos/id/453/400/300";
    }

    // Graduate Requirement: Form Handling
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the form from submitting to the broken URL

        // Get the form elements
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Check if both name and email are provided
        if (name && email) {
            alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
        } else {
            alert("Please provide a name and email.");
        }
    });

})();
