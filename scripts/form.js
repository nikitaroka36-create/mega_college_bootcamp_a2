console.log("js connected");

const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", ()=> {
    console.log("user submitted the form.");
});

form.addEventListener("reset", ()=> {
    console.log("user reset the form");
});

form.addEventListener("input", (e) =>{
    // console.log(e);
    console.log(e.target.value);
});

const input = document.querySelector("input");

input.addEventListener("focus", ()=> {
    console.log("user focused on input.");
})

input.addEventListener("blur", ()=>{
    console.log("user left the input");
})

input.addEventListener("change", (e) => {
    // console.log(e);
    console.log(e.target.value);
})