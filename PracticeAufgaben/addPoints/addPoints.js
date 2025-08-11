let points = 3;

function add3Points(){
    points+=3;
}

function remove1Point(){
    points--;
}

while(points<10){
    add3Points();
    if(points>10){
        while(points>10){
            remove1Point();
        }
    }
}

console.log(points);