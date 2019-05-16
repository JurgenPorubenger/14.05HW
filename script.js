function func() {
    let variable= document.getElementById("numb").value; 
    if (variable<=5&&!isNaN(variable)) {
        console.log("This is number: " + document.getElementById("numb").value);
    } 
    else if (isNaN(variable)&&variable.length<=5){
        console.log("This is string: " + document.getElementById("numb").value);
    } else {console.log( variable.split(" "));}
}
    document.getElementById("check").onclick = function() {
            func();   
    }

