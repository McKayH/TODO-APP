let lists = [];

function addNewList(){
    const list = document.getElementById('listIn').value;
    if(list != '')
    {

        const given = {
            name: list,
            Items: [],
            isDone: false,
        }
        lists.push(given);
        displayList();
    }
}

function displayList(){
    let listStr = '';
    lists.forEach(index => {
        listStr += `<li class="listClass" id="${index.name}" onclick="displayToDo('${index.name}')">
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
// adds page
function displayToDo(sthin){
    document.getElementById('mainContain').innerHTML = `
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
        <h2 class="mdl-card__title-text" id="title">${sthin}</h2>
        </div>
        <div class="mdl-card__actions mdl-card--border">
        </div>
        <div class="mdl-card__menu">
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onclick="addGoal()">
                <i class="material-icons">add</i>
            </button>
        </div>
        <ul class="mdl-list" id="liItem"></ul>
    </div>`;
    checkCon(sthin);

}
function addItem(){
    const thethin = document.getElementById('title').innerHTML;
    const todo = document.getElementById('whatToDo').value;
    const item = {
        id: Math.floor(Math.random() * 1000),
        value: todo,
    }
    lists.forEach(index => {
        if(index.name === thethin){
            index.Items.push(item);
            displayItem(index, thethin);
        }
    });
}
function displayItem(itm, thethin){
    let toDoList = '';
    itm.Items.forEach(ind =>{
    toDoList += `
    <li class="toDo mdl-list__item">
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect doneButton" onclick="finish(${ind.id},${thethin})">Done</button>
    <span class="goal mdl-list__item-primary-content">
    <button class=" editing mdl-button mdl-js-button mdl-button--icon" onclick="editGoal()">
    <i class="material-icons">edit</i>
    </button>
    <span class="text" id="${ind.id}">${ind.value}</span> 
    </span> 
    <button class=" deleteButton mdl-button mdl-js-button mdl-button--icon">
    <i class="material-icons">cancel</i>
    </button>
    </li>`;
    });
    document.getElementById('liItem').innerHTML = toDoList;
    document.getElementById("whatToDo").value = '';
    document.getElementById("textInModal").style.display = "none";
}
function checkCon(list){
    const tilis = document.getElementById('title').innerHTML;
    let toDoList ='';
    lists.forEach(index =>{
        if(list === index.name){
            index.Items.forEach(obj =>{
                toDoList += `
                <li class="toDo mdl-list__item">
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect doneButton" onclick="finish(${obj.id},${tilis})">Done</button>
                    <span class="goal mdl-list__item-primary-content">
                    <button class=" editing mdl-button mdl-js-button mdl-button--icon" onclick="editGoal()">
                    <i class="material-icons">edit</i>
                    </button>
                    <span class="text" id="${obj.id}">${obj.value}</span> 
                    </span> 
                    <button class=" deleteButton mdl-button mdl-js-button mdl-button--icon">
                    <i class="material-icons">cancel</i>
                    </button>
                    </li>`;
            });
            document.getElementById('liItem').innerHTML = toDoList;
            
        }
    });
}
