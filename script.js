function func() {
    let consLog = console.log(document.getElementById("numb").value);
    if (consLog<5) {
        document.getElementById("check").onclick = func;
    } else console.warn("Nehua")
}
