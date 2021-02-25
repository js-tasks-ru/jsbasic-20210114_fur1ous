function hideSelf() {
  let hideBtn = document.querySelector('.hide-self-button');

  hideBtn.onclick = (e) => {
    e.preventDefault();

    e.currentTarget.setAttribute('hidden', 'hidden');
  }
}
