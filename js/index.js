document.addEventListener('DOMContentLoaded', function () {
  // モーダルボタンの要素を取得
  var modalButton = document.querySelector('.js-modal-button');

  // モーダルを開閉する関数
  function toggleModal() {
    // グレー背景の要素を取得
    var modalLayer = document.querySelector('.js-modal');

    // グレー背景にis-showクラスをトグルして表示/非表示を切り替える
    modalLayer.classList.toggle('is-show');

    // グレー背景が表示されている場合、body要素にスクロールを禁止するクラスを追加
    if (modalLayer.classList.contains('is-show')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // モーダルボタンがクリックされたときにtoggleModal関数を実行
  modalButton.addEventListener('click', toggleModal);

  // ×ボタンの要素を取得
  var closeButton = document.querySelector('.js-close-button');

  // ×ボタンがクリックされたときにtoggleModal関数を実行
  closeButton.addEventListener('click', toggleModal);

  // グレー背景の要素を取得 同一コードがあるが、以下がないとグレー背景をクリックして反応しなくなる。
  var modalLayer = document.querySelector('.js-modal');

  // グレー背景がクリックされたときにtoggleModal関数を実行
  modalLayer.addEventListener('click', function (event) {
    // クリックされた要素が.modal__inner以下の要素である場合はtoggleModalを実行しない
    if (!event.target.closest('.modal__inner')) {
      toggleModal();
    }
  });
});

// Chat GPTで上記コードを取得