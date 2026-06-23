 console.log("js connected!");

 const header = document.querySelector("h1");
 console.log(header);
 console.log(header.textContent);
 header.innerText = "New Header";

const parent = document.querySelector("#parent");
//const parent = document.createElement("div");

 const secondary_header = document.createElement("h2");
 secondary_header.innerHTML = "<i>Secondary Header</i>";
 console.log(secondary_header);
 console.log(secondary_header.innerText);


 parent.appendChild(secondary_header);

 secondary_header.style.backgroundColor = "blue";
 secondary_header.style.color = "white";

 secondary_header.remove();