/*function changeBackgroundColor(color){
    let section = document.getElementById('coding-journey');
    section.style.backgroundColor = color;
}

document.getElementById('intro').addEventListener('click', () => changeBackgroundColor("#2CA02C"));

document.getElementById('react').addEventListener('click', () => changeBackgroundColor("#FF7F0E"));

document.getElementById('backend').addEventListener('click', () => changeBackgroundColor("#9467BD"));
*/
document.addEventListener('DOMContentLoaded', () => {
  const sections = [
    { id: 'intro', color: '#2CA02C' },
    { id: 'react', color: '#FF7F0E' },
    { id: 'backend', color: '#9467BD' }
  ];

  sections.forEach(section => {
    const element = document.getElementById(section.id);
    if (element) {
      element.addEventListener('click', () => changeBackgroundColor(section.color));
    }
  });
});

function changeBackgroundColor(color) {
  let section = document.getElementById('coding-journey');
  if (section) {
    section.style.backgroundColor = color;
  }
}