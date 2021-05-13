"use-strict";

const btn = document.querySelector("#addBtn");
let listWrap = document.querySelector("#listWrap");

btn.addEventListener("click", () => {
  const inputValue = document.querySelector("#todoInput").value;

  // 새로운 li 만들기
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  newSpan.setAttribute("class", "xBtn");
  newSpan.innerText = " X";
  newLi.innerHTML = inputValue;
  newLi.appendChild(newSpan);
  listWrap.appendChild(newLi);

  // let btns = document.querySelectorAll(".xBtn");

  // for (let i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", (e) => {
  //     const li = e.target.parentNode;
  //     listWrap.removeChild(li);
  //   });
  // }

  let lis = document.querySelectorAll("li");

  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", (e) => {
      if (lis[i].getAttribute("class")) {
        lis[i].setAttribute("class", "");
      } else {
        lis[i].setAttribute("class", "li-class");
      }
    });
  }
});

function deleted() {}
