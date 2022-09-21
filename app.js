const addBtn = document.querySelector(".fa-square-plus");
const doInput = document.querySelector("#input11");
const dolist = document.getElementById("dolist1");
const newU1 = document.createElement("ul");
let counter = 0;
dolist.appendChild(newU1);
addBtn.addEventListener("click", () => {
  if (!doInput.value) {
    alert("Please enter a task");
  } else {
    newU1.innerHTML += `<li><img class="checked" src="https://cdn-icons-png.flaticon.com/512/64/64571.png"/>
    <div>${doInput.value}</div><img class="xxx" src="https://img.icons8.com/plasticine/2x/x.png"/> `;
  }
  document.getElementById("last").innerText =
    counter + " OUT OF " + newU1.childElementCount + " TASKS COMPLETED";
  doInput.value = "";
  doInput.focus();
  const checkeds = document.querySelectorAll(".checked");
  const trashes = document.querySelectorAll(".xxx");
  checkeds.forEach((e) =>
    e.addEventListener("click", () => {
      if (!e.nextElementSibling.classList.contains("linethrough")) {
        e.nextElementSibling.classList.add("linethrough");
        e.setAttribute(
          "src",
          "https://img.icons8.com/color/344/checked-2--v1.png"
        );
        counter++;
      } else {
        e.nextElementSibling.classList.remove("linethrough");
        e.setAttribute(
          "src",
          "https://cdn-icons-png.flaticon.com/512/64/64571.png"
        );
        counter--;
      }
      document.getElementById("last").innerText =
        counter + " OUT OF " + newU1.childElementCount + " TASKS COMPLETED";
    })
  );
  trashes.forEach((e) =>
    e.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      counter > 0 ? counter-- : 0;
      document.getElementById("last").innerText =
        counter + " OUT OF " + newU1.childElementCount + " TASKS COMPLETED";
      doInput.focus();
    })
  );
});
doInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    addBtn.click();
  }
  window.addEventListener("load", () => {
    doInput.focus();
  });
});
