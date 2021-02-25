function toggleText() {
  let toggleBtn = document.querySelector('.toggle-text-button');
  let toggleText = document.getElementById('text');

  toggleBtn.onclick = function(e) {
    e.preventDefault();

    if (toggleText.hasAttribute('hidden')) {
      toggleText.removeAttribute('hidden')
    } else {
      toggleText.setAttribute('hidden', 'hidden');
    }
  };
}
