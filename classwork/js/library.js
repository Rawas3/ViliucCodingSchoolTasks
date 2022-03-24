function changeBackgroundColor(color, selector) {
  document.querySelector(selector).style.backgroundColor = color;
}

function displayStudents(items, selector, clean) {
  if (clean) {
    document.querySelector(selector).innerHTML = "";
  }
  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    //console.log(element);
    document.querySelector(selector).innerHTML += "<li>" + element + "</li>";
  }
}
