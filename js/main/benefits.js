const art_h3 = document.querySelectorAll(".art_box>article>h3");



art_h3.forEach((el,index) => {
    el.innerHTML = art_h3[index].innerHTML.substr(0,10) + '...';
});