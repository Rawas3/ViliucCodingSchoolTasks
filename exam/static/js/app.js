const dataReload = document.querySelectorAll("[language]");
dataReload.forEach((el) => {
  el.addEventListener("click", () => {
    const attr = el.getAttribute("language");
    console.log(attr);
    for (let key in langArr) {
      let elem = document.querySelector(".lang-" + key);
      if (elem) {
        elem.innerHTML = langArr[key][attr];
      }
    }
  });
});
