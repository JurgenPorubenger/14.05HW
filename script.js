function func() {
    let variable= document.getElementById("numb").value; 
    if (variable<=5&&!isNaN(variable)) {
        console.log("This is number: " + variable);
    } 
    else if (isNaN(variable)&&variable.length<=5){
        if (/\s/.test(variable)) {
            console.log("String contains whitespace: " + variable);
        } else {
            console.log("String not contains whitespace");
        }
        // console.log("This is string: " + variable);
    } else {console.log( variable.split(" "));}
}
    document.getElementById("check").onclick = function() {
            func();   
    }

