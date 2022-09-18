const addBtn = document.querySelector(".fa-square-plus");
const doInput = document.querySelector("#input11");
const dolist = document.getElementById("dolist1");
const newU1 = document.createElement("ul");
dolist.appendChild(newU1);

addBtn.addEventListener("click", () => {
  // const counter = 0;
  if (!doInput.value) {
    alert("please enter a language");
  } else {
    // counter++;
    newU1.innerHTML += `<li><i class="checked fa-regular fa-square"></i>
    <div>${doInput.value}</div><i class="xxx fa-solid fa-circle-xmark"></i> `;
  }

  doInput.value = "";
  doInput.focus();

  const checkeds = document.querySelectorAll(".checked");
  const trashes = document.querySelectorAll(".xxx");
  const okeys = document.querySelectorAll(".fa-square-check");

  checkeds.forEach((e) =>
    e.addEventListener("click", () => {
      e.nextElementSibling.classList.add("linethrough");

      if ((e.className = checkeds)) {
        e.setAttribute("class", "fa-regular fa-square-check");
      } else if ((e.className = okeys)) {
        e.setAttribute("class", "fa-square");
      }
    })
  );

  trashes.forEach((e) =>
    e.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      // counter--;

      inputTask.focus();
    })
  );

  let numb = newU1.childElementCount;
  document.getElementById("last").innerText = numb + " TASKS";
});
doInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    addBtn.click();
  }
  window.addEventListener("load", () => {
    doInput.focus();
  });
});
