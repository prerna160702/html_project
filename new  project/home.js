const items = document.querySelectorAll('.item');
const containers = document.querySelectorAll('.container');
const dropZone = document.querySelector('.container.dropzone');
const resetBtn = document.querySelector('#resetBtn');

let draggedItem = null;

// Add event listeners for drag and drop
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

containers.forEach(container => {
  container.addEventListener('dragover', dragOver);
  container.addEventListener('dragenter', dragEnter);
  container.addEventListener('dragleave', dragLeave);
  container.addEventListener('drop', drop);
});

resetBtn.addEventListener('click', resetContainers);

// Drag functions
function dragStart() {
  draggedItem = this;
  setTimeout(() => {
    this.style.display = 'none';
  }, 0);
}

function dragEnd() {
  setTimeout(() => {
    draggedItem.style.display = 'block';
    draggedItem = null;
  }, 0);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('dragover');
}

function dragLeave() {
  this.classList.remove('dragover');
}

function drop() {
  this.classList.remove('dragover');
  if (draggedItem !== null) {
    this.appendChild(draggedItem);
    draggedItem = null;
    showMessage('Item dropped successfully!');
  }
}

function showMessage(message) {
  const dropZone = document.querySelector('.container.dropzone');
  const messageEl = document.createElement('div');
  messageEl.className = 'message';
  messageEl.innerText = message;
  dropZone.appendChild(messageEl);
}

function resetContainers() {
  containers.forEach(container => {
    container.innerHTML = container === dropZone ? '<h3>Drop Zone</h3>' : '';
  });
}
