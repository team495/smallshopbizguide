// Category filter pills
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    // TODO: filter brand cards by pill.dataset.filter when more brands are added
  });
});
