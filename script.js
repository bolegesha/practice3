const p = document.querySelector(".paragraph");
const h = document.querySelector(".heading");
const count = p.innerText.split(" ");

h.innerText += " | " + count.length + " words";

p.innerHTML = p.innerText.replaceAll("?", "🤔");
p.innerHTML = p.innerText.replaceAll("!", "😲");
p.innerHTML = p.innerText.replaceAll(". ", ".<br>");

for (let i = 0; i < count.length; i++) {
    if (words[i].length > 8) {
        p.innerHTML = p.innerHTML.replace(
        count[i],
        `<span class="yellow">${words[i]}</span>`
        );
    }
}
