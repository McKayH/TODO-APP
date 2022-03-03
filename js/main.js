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
}
