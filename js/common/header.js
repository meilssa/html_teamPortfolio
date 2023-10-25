const gnb_li = document.querySelectorAll("#gnb>li");

gnb_li.forEach((el, index) => {
    el.addEventListener("mouseenter", (e) => {
        document.querySelector("#gnb>li.on").classList.remove("on")
        gnb_li[index].classList.add("on")
    })
});