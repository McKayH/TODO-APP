function geting(thing, listl){
    console.log(thing);
    console.log(listl);
    let a = '';
    let b = '';
    lists.forEach(ind => {
        if (listl.id === ind.name) { 
            console.log('finaly');
            a = ind;
        }
    });
    a.Items.forEach(ite =>{
        
        if(thing === ite.id){
            console.log('there');
            console.log(document.getElementById(ite.id));
            b = ite.id;
        }
    });  
    const result = document.getElementById(b); 
    return  result;
}
function finish(value,listl){
    console.log('this');
    let chg = geting(value,listl);
    console.log(chg);
    chg.style.backgroundColor = "lightgray";
    lists.forEach(done => {
        if (done.name === listl) {
            done.Items.forEach(ident => {
                if (ident.id === value) {
                    ident.isDone = true;
                }
            })
        }
    });
}