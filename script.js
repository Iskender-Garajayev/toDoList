let addToDoButton = document.getElementById('addToDo');
let cleareToDoButton = document.getElementById('clearToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText=document.getElementById('inputText');
let inputNum = document.getElementById('inputNum')

addToDoButton.addEventListener('click', function(){
  let paragraph = document.createElement('p')
  paragraph.classList.add('paragraph-styling')
  toDoContainer.appendChild(paragraph);
  paragraph.innerHTML=inputText.value;
  inputText.value = "";

  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = 'line-through'
  })

  paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph)
  })

cleareToDoButton.addEventListener('click', function(){
  paragraph.remove();
})



})