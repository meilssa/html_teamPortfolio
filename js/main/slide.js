// 슬라이드 변수
const slider = document.querySelector(".slider");
const slide_art = document.querySelectorAll(".slider article");
const btns = document.querySelectorAll(".btns li");
const arrowbox = document.querySelector("arrowbox");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let slide_arr = Array.from(slide_art);
let btns_arr = Array.from(btns);
const len = slide_art.length - 1;
let num = 0;
let timer = null;
let marginLeft = 0;
const interval = 5000;

// 슬라이드
startRolling();
function startRolling(){
    timer = setInterval(rolling, interval);
}
function active(index){
    slider.style.marginLeft = `${-100 * index}%`;
    document.querySelector(".btns li.on").classList.remove("on");
    btns[index].classList.add("on");
    num = index;
}
function rolling(){
    if (num < len){
        num++;
    } else{
        num = 0;
    }
    active(num);
}
function button_click_auto(){
    btns.forEach((el, index)=>{
        el.addEventListener("click",(e)=>{
            e.preventDefault();
            active(index);
        })
    })
}
prev.addEventListener("click",(e)=>{
    num = (num + 8 + 9) % 9;
    e.preventDefault();
    active(num);
    clearInterval(timer);
    startRolling();
})
next.addEventListener("click",(e)=>{
    num = (num + 1 + 9) % 9;
    e.preventDefault();
    active(num);
    clearInterval(timer);
    startRolling();
})
button_click_auto();

