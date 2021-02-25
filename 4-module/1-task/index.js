/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {

  let newList = document.createElement('ul');

  let items = [];
  for (let item of friends) {
    items.push(item.firstName+ ' '+ item.lastName);
  }

  items.map(item => {
    newList.innerHTML += '<li>'+ item +'</li>';
  });

  return newList;
}
