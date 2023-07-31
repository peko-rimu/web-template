window.addEventListener('load', function() {
  var elements = document.getElementsByClassName('js-header__nav'); // 表示または非表示にする要素のクラス名を指定

  function toggleElementVisibility() {
    if (window.innerWidth < 1024) {
      // デバイスの幅が1024px未満の場合に非要素を表示にする
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
      }
    } else {
      // デバイスの幅が1024px以上の場合に要素を表示する
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = '';
      }
    }
  }

  toggleElementVisibility(); // 初回の読み込み時に要素の表示状態を設定

  window.addEventListener('resize', toggleElementVisibility); // ウィンドウのリサイズ時に要素の表示状態を更新
});