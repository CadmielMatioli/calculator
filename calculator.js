function dis(val) {
    document.getElementById("result").value += val;
}

function solve() { 
    let x = document.getElementById("result").value 
    let y = eval(x);
    document.getElementById("result").value = y; 
}

function clr() { 
    document.getElementById("result").value = "";
}

function convert(){
    let x = document.getElementById("result").value 
    let y = eval(x);
    counter = Math.abs(y) * -1;
    document.getElementById("result").value = counter; 
}
