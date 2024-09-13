
const toggleButtons =document.getElementById('toggle-button') as HTMLButtonElement;
const skillsSection =document.getElementById('Skills') as HTMLElement;

toggleButtons.addEventListener('click',() => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
}
    });


