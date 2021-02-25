/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tbody = table.getElementsByTagName('tbody')[0];
  let trs = tbody.getElementsByTagName('tr');

  Array.from(trs).forEach(
    row => {
      const statusCell = row.getElementsByTagName('td')[3];

      if(statusCell.getAttribute('data-available') === "true") {
        row.classList.add('available');
      }

      else if(statusCell.getAttribute('data-available') === "false") {
        row.classList.add('unavailable');
      }

      else if (!statusCell.dataset.available) {
        row.setAttribute('hidden', 'hidden');
      }

      const genderCell = row.getElementsByTagName('td')[2];
      if(genderCell.textContent === 'm') {
        row.classList.add('male');
      }
      else{
        row.classList.add('female');
      }

      const ageCell = row.getElementsByTagName('td')[1];
      if(Number(ageCell.textContent) < 18) {
        row.style.textDecoration = 'line-through';
      }
    }
  );
}
