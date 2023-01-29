const ulNavBar = document.getElementById("ul-navbar")

const createListItens = (item, i) => {
    let li = document.createElement("li")
    li.className = `list-${i+1}`
    let a = document.createElement("a")
    let textLink = document.createTextNode(`${item}`)
    a.appendChild(textLink)
    li.appendChild(a)
    ulNavBar.appendChild(li)
}

textNavBar.forEach(createListItens)
