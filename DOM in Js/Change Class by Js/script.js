const Display = () => {
    var h1 = document.querySelector("h1").classList;
    var btn = document.querySelector("button");
    // if (btn.innerHTML == "Show Details") {
    //     h1.add("show");
    //     btn.innerHTML = "Hide Details"
    // }
    // else {
    //     h1.remove("show");
    //     btn.innerHTML = "Show Details"
    // }
    h1.toggle("show");
    (btn.innerHTML == "Show Details") ? (btn.innerHTML = "Hide Details") : (btn.innerHTML = "Show Details")
}