const sectionTitles = document.querySelectorAll("section h2");
sectionTitles.forEach(title => {
	title.addEventListener("click", () => {
		title.parentNode.classList.toggle("expanded");
	});
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.querySelector(".float-button").style.display = "block";
  } else {
    document.querySelector(".float-button").style.display = "none";
  }
}

const addButton = document.querySelector(".float-button a");

addButton.addEventListener("click", function() {
  const newButton = document.createElement("button");
  newButton.classList.add("new-button");
  newButton.innerText = "❤️";
  newButtonsDiv.appendChild(newButton);
});
