// 날짜변수
const date = new Date();
const nowTime = document.querySelector("#nt");
const day2 = document.querySelector(".day");
const hours = date.getHours();
const minutes = ('0' + date.getMinutes()).slice(-2);
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

// 실패
refresh()
function refresh() {
    // 시간 바꾸는 함수
    day2.innerHTML = `${day}일 `;
    nowTime.innerHTML = `${hours} : ${minutes}`;
    setTimeout(function () {
        refresh()
    }, 1000);
}