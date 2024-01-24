const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



// 【fade in animation】スクロールしたらふわっとセクションを表示させる
document.addEventListener("DOMContentLoaded", function () {
  // すべてのセクション要素を取得
  const sections = document.querySelectorAll(".section");

  // Intersection Observerの設定
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          // セクションが画面内に表示された場合
          if (entry.isIntersecting) {
              // セクションにis-visibleクラスを追加し、アニメーションを開始
              entry.target.classList.add("is-visible");
              // もう一度同じセクションに対してObserverを無効化（一度だけ実行されるようにする）
              observer.unobserve(entry.target);
          }
      });
  });

  // すべてのセクションに対してObserverを登録
  sections.forEach(section => {
      observer.observe(section);
  });
});
