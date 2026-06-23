console.log("js connected")

let event_div = document.querySelector("#event"); //eventDiv
console.log(event_div);

//parameters: event, function(euta event track garyo ani tyo event user le perform garyo
// aba k garne ta), options
event_div.addEventListener("click", ()=>{
    console.log("user clicked this div.");
});

event_div.addEventListener("dblclick", ()=>{
    console.log("user double clicked");
})

event_div.addEventListener("mouseenter", ()=>{
    console.log("pointer entered the div.")
})

event_div.addEventListener("mouseleave", ()=> {
    console.log("pointer left the div.")
})

window.addEventListener("load", ()=> {
    console.log("html loaded");
})