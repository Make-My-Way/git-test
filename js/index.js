document.addEventListener('DOMContentLoaded', function () {
  // ローディング画面の要素を取得
  const loadingScreen = document.getElementById('loading');

  // コンテンツが読み込まれたらローディング画面を非表示にする
  window.addEventListener('load', function () {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 1000); // フェードアウトのアニメーション時間と合わせて設定(このコードでは、setTimeout 内の時間をフェードアウトのアニメーション時間と合わせています。現在は 1000 ミリ秒（1秒）に設定されていますが、アニメーション時間に合わせて調整してください。)
  });
});
// ChatGPTでコード取得