const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
]

const list = document.querySelector("#ingredients");

const elements = ingredients.map((option) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = `${option}`;
  listItemEl.classList.add("item");
  return listItemEl;
});

list.append(...elements);

// const table = document.querySelector('#ingredients')

// const createLi = ingredients.map(elem => {
//   const li = document.createElement('li')

//   li.textContent = elem

//   li.classList.add('item')

//   table.appendChild(li)
// })
