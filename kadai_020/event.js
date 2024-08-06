//textというidを持つ要素を取得し、中身を出力する
console.log(document.getElementById('text'));

//btnというid名を持つhtml要素を取得し、中身を出力する
console.log(document.getElementById('btn'));

//ボタンがクリックされた時に実行されるイベントリスナーを追加
btn.addEventListener('click',() => {
  //見出しのテキストを変更
 text.textContent = 'ボタンをクリックしました';
});
