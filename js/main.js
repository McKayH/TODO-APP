let lists = [];

function addNewList(){
    const list = document.getElementById('listIn').value;
    if(list != '')
    {

        const given = {
            name: list,
            Items: [],
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
function displayToDo(name){
    document.getElementById('mainContain').innerHTML = `
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
        <h2 class="mdl-card__title-text" id="title">${name}</h2>
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
    checkCon(name);

}
function addItem(){
    const name = document.getElementById('title').innerHTML;
    const todo = document.getElementById('whatToDo').value;
    const amount  = document.getElementById('liItem');
    const item = {
        id: amount.getElementsByTagName('li').length + 1,
        value: todo,
    }
    lists.forEach(index => {
        if(index.name === name){
            index.Items.push(item);
            console.log(item);
            displayItem(item.value);
        }
        console.log(1);
    });
}
function displayItem(value){
    let toDoList = '';
    toDoList += `
    <li class="toDo mdl-list__item">
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect doneButton">Done</button>
    <span class="goal mdl-list__item-primary-content">
    <button class=" editing mdl-button mdl-js-button mdl-button--icon" onclick="editGoal()">
    <i class="material-icons">edit</i>
    </button>
    <span class="text">${value}</span> 
    </span> 
    <button class=" deleteButton mdl-button mdl-js-button mdl-button--icon">
    <i class="material-icons">cancel</i>
    </button>
    </li>`;
    document.getElementById('liItem').innerHTML = toDoList;
    document.getElementById("textInModal").style.display = "none";
}
function checkCon(list){
    let toDoList ='';
    lists.forEach(index =>{
        if(list === index.name){
            index.Items.forEach(obj =>{
                toDoList += `
                <li class="toDo mdl-list__item">
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect doneButton">Done</button>
                    <span class="goal mdl-list__item-primary-content">
                    <button class=" editing mdl-button mdl-js-button mdl-button--icon" onclick="editGoal()">
                    <i class="material-icons">edit</i>
                    </button>
                    <span class="text">${obj.value}</span> 
                    </span> 
                    <button class=" deleteButton mdl-button mdl-js-button mdl-button--icon">
                        <i class="material-icons">cancel</i>
                    </button>
                </li>`;
                document.getElementById('liItem').innerHTML = toDoList;
            });
            
        }
    });
}
