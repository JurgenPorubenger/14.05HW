function func() {
    let variable= document.getElementById("numb").value; 
    if (variable<=5&&variable!=Number) {
        console.log("This is number :" + document.getElementById("numb").value);
    } 
    else if (variable=String){
        console.log("This is string :" + document.getElementById("numb").value);
    } else {console.log("Shit!");}
}
    document.getElementById("check").onclick = function() {
            func();   
    }

