const textareaEl = document.getElementById("textarea");
const totalcharactersEl = document.getElementById("total-character");
const remainingEl = document.getElementById("remaining");

textareaEl.addEventListener("keyup",()=>{
    updateLength();
});

function updateLength(){
    totalcharactersEl.innerText = textareaEl.value.length;
    remainingEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}