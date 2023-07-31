window.addEventListener('load', function() {
  var elements = document.getElementsByClassName('js-header__btn'); // 表示または非表示にする要素のクラス名を指定

  function toggleElementVisibility() {
    if (window.innerWidth < 1024) {
      // デバイスの幅が1024px未満の場合に要素を表示にする
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'block';
      }
    } else {
      // デバイスの幅が1024px以上の場合に非要素を表示する
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
      }
    }
  }

  toggleElementVisibility(); // 初回の読み込み時に要素の表示状態を設定

  window.addEventListener('resize', toggleElementVisibility); // ウィンドウのリサイズ時に要素の表示状態を更新
});

window.addEventListener('load', function() {
  var headerBtn = document.querySelector('.js-header__btn'); // クリック対象の要素のクラス名を指定
  var imageUrl1 = '/image/menu_3line.svg'; // 画像1のURLを指定
  var imageUrl2 = '/image/menu_close.svg'; // 画像2のURLを指定

  var headerNav = document.querySelector('.js-header__nav'); // 表示・非表示を切り替える対象の要素のクラス名を指定

  var currentImageUrl = imageUrl1; // 現在の画像のURLを保持する変数

  function toggleImage() { //header__btnをクリックするとheader__btnの見た目が切り替わる
    if (currentImageUrl === imageUrl1) {
      headerBtn.style.backgroundImage = 'url(' + imageUrl2 + ')';
      currentImageUrl = imageUrl2;
    } else {
      headerBtn.style.backgroundImage = 'url(' + imageUrl1 + ')';
      currentImageUrl = imageUrl1;
    }
  }

  function toggleNav() { //header__btnをクリックするとheader__navの表示・非表示を切り替える
    if (currentImageUrl === imageUrl1) {
        headerNav.style.display = 'none';
    } else {
        headerNav.style.display = '';
    }
  }

  headerBtn.addEventListener('click', toggleImage);
  headerBtn.addEventListener('click', toggleNav);
});