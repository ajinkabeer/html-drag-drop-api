const dragList = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richPeople = [
  "Jeff Bezoz",
  "Bill Gates",
  "Warren Buffet",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Armancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page"
];

// Store list items
const listItems = [];

let dragStartIndex;

createList();

// Inject list items into DOM
function createList() {
  [...richPeople]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
    <p class="person-name">${person}</p>
    <i class="fas fa-grip-vertical"></i>
    </div>
    `;
      listItems.push(listItem);
      dragList.appendChild(listItem);
    });
  addEventListeners();
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach(item => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}

function dragStart() {
  console.log("Event :", "dragStart");
}

function dragEnter() {
  console.log("Event :", "dragEnter");
}

function dragDrop() {
  console.log("Event :", "dragDrop");
}

function dragLeave() {
  console.log("Event :", "dragLeave");
}

function dragOver() {
  console.log("Event :", "dragOver");
}
