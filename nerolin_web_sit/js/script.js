$(function () {
  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("open");
    $(".header_nav").fadeToggle();
  });
});

// ====================
// modal
// ====================
// 全ての開くボタンと閉じるボタンを取得
const modals = document.querySelectorAll(".js-modal");
const openButtons = document.querySelectorAll(".js-modal-open");
const closeButtons = document.querySelectorAll(".js-modal-close");

// 各ボタンごとに処理を割り当てる
openButtons.forEach((open, index) => {
  open.addEventListener("click", () => {
    modals[index].classList.add("is-active");
  });
});

closeButtons.forEach((close, index) => {
  close.addEventListener("click", () => {
    modals[index].classList.remove("is-active");
  });
});

// モーダルの外側クリックで閉じる
modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("is-active");
    }
  });
});
