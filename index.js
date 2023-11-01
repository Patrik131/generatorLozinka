let duljina = document.getElementById("duljina").value;
let gumb = document.getElementById("bla");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

gumb.addEventListener("click", ()=>{
    console.log("Bravo")
    const chars = [
        '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '`', '~',
        '(', ')', '{', '}', '[', ']', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '/', '?',
        ...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ];

    for(let i = 0; i<duljina; i++) {
        let rand = Math.floor(Math.random() * chars.length);
        let rand1 = Math.floor(Math.random() *chars.length);
        password1.innerHTML += chars[rand];
        password2.innerHTML+= chars[rand1];
    }
    
})