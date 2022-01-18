var filter = document.querySelector("select");
var num = document.querySelectorAll(".item div");
var button = document.querySelector("button");

filter.addEventListener("change", () => {
  var items = document.querySelector("#selectOption option:checked");
  console.log(items.value);
  for (var j = 0; j < num.length; j++) {
    var val = num[j].getAttribute("class");
    console.log(val);

    if (items.value == val) {
      num[j].style.display = "inline-block";
    } else {
      num[j].style.display = "none";
    }
  }
});
