var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var title = document.createElement("h1");

var pages = [
  {
    name: "Home",
    content: "Home"
  },
  {
    name: "About",
    content: "Ethan"
  },
  {
    name: "Interact",
    content: "none"
  }
];

for (var i = 0; i < pages.length; i++) {
  createPage(pages[i]);
}

function createPage(pg) {
  var button = document.createElement("button");
  button.addEventListener("click", function () {
    contentWrite(pg.content, pg.name);
  });
  button.innerHTML = pg.name;
  nav.appendChild(button);
}

function contentWrite(content, pg) {
  display.innerHTML = "";

  if (pg == "Home") {
    Home();
  }

  if (pg == "About") {
    About();
  }

  if (pg == "Interact") {
    Interact();
  }
}

function Home() {
  title.innerHTML = "Home";
  display.appendChild(title);
}

function About() {
  title.innerHTML = "About";
  display.appendChild(title);
  var header = document.createElement("h3");
  header.innerHTML = "Ethan";
  display.appendChild(header);
}

function Interact() {
  title.innerHTML = "Interact";
  display.appendChild(title);
 
  var countNumber = document.getElementById("click");
var button = document.getElementById("counter"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "counter ";
   countNumber.innerHTML = count + "";
};
  
}

contentWrite(pages[0].content, "Home");