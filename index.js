const windowOpen = document.getElementById('windowopen');
const aHref = document.getElementById('link');

windowOpen.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    aHref.href = windowOpen.value;
  }
});
