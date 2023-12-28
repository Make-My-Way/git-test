window.addEventListener('load', function () {
  // ハンバーガーメニューの処理
  var hamburgerButton = document.querySelector('.header__hamburger');
  var hamburgerMenu = document.querySelector('.header__gnav__list');
  var hamburgerBars = document.querySelectorAll(".header__hamburger--bar");
  //↑を追加してハンバーガーメニューのバーもセレクタとして適用させた。Allで複数セレクタに適用させた。

  hamburgerButton.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('is-show');

    // ハンバーガーメニューのバーの動きを指示
    hamburgerBars.forEach(function (element) {
      element.classList.toggle('is-show');
    });
  });
});

// ChatGPTで正しいか確認した！