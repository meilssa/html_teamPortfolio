// 수퍼문 & 다크문 
const lis = document.querySelectorAll(".tabList>ul>li");
const tabcont = document.querySelectorAll("div.tabcont");


lis.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelector(".tabList>ul>li.on").classList.remove("on");
        lis[index].classList.add("on");

        document.querySelector("div.tabcont.on").classList.remove("on");
        tabcont[index].classList.add("on")

    })
})

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 포토존 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const btns = document.querySelectorAll(".tabList_3 > .dark");
const tabConts = document.querySelectorAll("#contents");

btns.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelector(".tabList_3 > .dark.on").classList.remove("on");
        btns[index].classList.add("on");

        tabConts.forEach((cont) => cont.classList.remove("active"));
        tabConts[index].classList.add("active");
    });
});

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 이벤트 & 핫플레이스 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const btn = document.querySelectorAll(".tabList_3 > .dark1");
const tabCont = document.querySelectorAll("#content");

btn.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelector(".tabList_3 > .dark1.on").classList.remove("on");
        btn[index].classList.add("on");

        tabCont.forEach((cont) => cont.classList.remove("active"));
        tabCont[index].classList.add("active");
    });
});