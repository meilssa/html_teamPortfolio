//변수설정
const info_slide = document.querySelector("#info");
const lis = document.querySelectorAll("#info li");
const info_btns = document.querySelector(".info_btns");
const [info_prev, info_next] = info_btns.children;
// const pop = document.querySelector(".pop");
// const close = pop.querySelector(".close");
// const opens = slide.querySelectorAll("a");

for (let i = 0; i < 3; i++) { info_slide.prepend(info_slide.lastElementChild); }

info_prev.addEventListener("click", () => {
    info_slide.prepend(info_slide.lastElementChild);
})

info_next.addEventListener("click", () => {
    info_slide.append(info_slide.firstElementChild);
})