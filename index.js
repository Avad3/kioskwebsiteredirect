const windowOpen = document.getElementById('windowopen');
const popupWindowOpen = document.getElementById('popupwindowopen');

windowOpen.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    window.open(windowOpen.value)
  }
});
popupWindowOpen.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    window.open(popupWindowOpen.value, 'testing', 'width=600px,height=600px')
  }
})
