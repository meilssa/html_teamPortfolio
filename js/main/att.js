const att = document.querySelector(".att")
const att_btn = att.querySelectorAll(".attUl li")
const att_inner = att.querySelectorAll(".att_inner")

att_btn.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        e.preventDefault()
        document.querySelector(".attUl li.on").classList.remove("on")
        att_btn[index].classList.add("on")
        document.querySelector(".att_inner.on").classList.remove("on")
        att_inner[index].classList.add("on")
    })
})

