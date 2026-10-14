const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); mobileNav.hidden = true; }
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  mobileNav.hidden = expanded;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 650) closeMenu(); });
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => { const selected = filter === button; filter.classList.toggle('active', selected); filter.setAttribute('aria-pressed', String(selected)); });
  let count = 0;
  projects.forEach(project => { const visible = button.dataset.filter === 'all' || project.dataset.category.split(' ').includes(button.dataset.filter); project.hidden = !visible; if (visible) count++; });
  document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown.`;
}));
document.querySelector('#year').textContent = new Date().getFullYear();
