let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
}
function decrement(){
    count -= 1;
    countEl.innerText = count;
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
        var thing = " " + count + " -"
    // 3. Render the variable in the saveEl using innerText
    saveEl.innerText += thing
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
    count = 0;
    countEl.textContent = 0
}