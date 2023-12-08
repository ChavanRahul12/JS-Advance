const AddValue = () => {
    var div = document.querySelectorAll("div")
    for (let i = 0; i < div.length; i++) {
        div[i].innerHTML = (i == 0) ? (div[i] = 10) : (div[i] = (i + 1) * 10)
    }
}