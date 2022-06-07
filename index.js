// Write your code here!
const main = document.querySelector("main")
    main.remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML="Keegan is the champion";
document.head.append(newHeader);

