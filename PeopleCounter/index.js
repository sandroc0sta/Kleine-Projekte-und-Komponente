let countEl=document.getElementById("count-el");
let count = 0;


function increment(element) {
    count++;
    element.textContent = count;
}

function decrement(element) {
    
    if(count>0){
        count--; 
    element.textContent = count;
    }
}

function save(element) {
    
    if(element.textContent.trim() !== "")
    element.textContent+= " - " + count;

    else{
        element.textContent+= count;
    }
}

function reset(element) {
    element.textContent='';
    countEl.textContent = 0;
}