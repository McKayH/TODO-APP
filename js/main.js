let lists = [];

function addNewList(){
   const given = {
       name: document.getElementById('listIn').value,
       Items: [],
   }
   lists.push(given);
   displayList();
}

function displayList(){
    let listStr = '';
    lists.forEach(index => {
        listStr += `<li class="listClass" id="${index.name}" onclick="displayToDo()">
        <button class=" deleteList mdl-button mdl-js-button mdl-button--icon">
        <i class="material-icons">cancel</i>
        </button>
        ${index.name} 
        </li>`;
    });
    document.getElementById('myLists').innerHTML = listStr;
    document.getElementById('listIn').value = '';
}
function addGoal(){
    document.getElementById("textInModal").style.display = "flex";
}

function addItem(){
    const newGoal = document.getElementById('whatToDo').value;
    if(newGoal === '')
    {
        return document.getElementById('whatToDo').value = '';
    }
    items.push(newGoal);
    document.getElementById('whatToDo').value = '';
    displayItems();
}
function displayItems(){
    let goal = '';
    console.log(items);
    items.forEach(index => {
        goal +=`<li class="toDo mdl-list__item">
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect doneButton">Done</button>
                    <span class="goal mdl-list__item-primary-content">
                        <button class=" editing mdl-button mdl-js-button mdl-button--icon" onclick="editGoal()">
                        <i class="material-icons">edit</i>
                        </button>
                    <span class="text">${index}</span> 
                    </span> 
                    <button class=" deleteButton mdl-button mdl-js-button mdl-button--icon">
                        <i class="material-icons">cancel</i>
                    </button>
                </li>`;
    });
    document.querySelector('liItem').innerHTML = goal;
    document.getElementById("textInModal").style.display = "none";
}