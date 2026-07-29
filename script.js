let titleInput = document.getElementById("title_input");
let mainTitle = document.getElementById("main_title");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjectiveInput = document.getElementById("adjective");
let result = document.getElementById("story_result");

let submitButton = document.querySelector("button");
let adlibs = document.querySelector("form");

titleInput.addEventListener("input", updateValue);

function updateValue(e) {
  mainTitle.textContent = e.target.value;
}

submitButton.onclick = function(event) {
  event.preventDefault();

  let title = titleInput.value.trim();
  let nouns = nounInput.value.trim();
  let verbs = verbInput.value.trim();
  let adjectives = adjectiveInput.value.trim();

  if (!title || !nouns || !verbs || !adjectives) {
    result.textContent = "Please fill in all fields";
    return;
  }

  adlibs.style.display = "none";
  result.innerHTML = "Last night I ate a " + nouns + " and today I just had to exercise " + verbs + ". What a " + adjectives + " day!";
};