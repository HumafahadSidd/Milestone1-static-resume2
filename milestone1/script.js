"use strict";
const toggleButtons = document.getElementById('toggle-button');
const skillsSection = document.getElementById('Skills');
toggleButtons.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
