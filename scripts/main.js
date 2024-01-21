const myImage = document.getElementById("second-img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "./images/snoopy1.jpg") {
        myImage.setAttribute("src", "./images/snoopy2.jpg");
    } else {
        myImage.setAttribute("src", "./images/snoopy1.jpg");
    }
};

let myButton = document.querySelector("button");
let myList = document.querySelector("ul");

function addListItem() {
    const myItem = prompt("Please enter your item.");
    if (!myItem) {
        addListItem();
    } else {
        const listItem = document.createElement("li");
        listItem.textContent = `${myItem}`;
        myList.appendChild(listItem);
        localStorage.setItem("listItems", myList.innerHTML);
    }
}

function renderListItems() {
    const listItems = localStorage.getItem("listItems");
    if (listItems) {
        myList.innerHTML = listItems;
    }
}

renderListItems();

myButton.onclick = () => {
    addListItem();
};
