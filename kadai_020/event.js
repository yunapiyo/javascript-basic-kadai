// textというidを持つ要素を定数textElementに代入
const textElement = document.getElementById('text');
// btnというid名を持つ要素を定数btnElementに代入
const btnElement = document.getElementById('btn');


//textというidを持つ要素を取得し、中身を出力する
console.log(document.getElementById('text'));

//btnというid名を持つhtml要素を取得し、中身を出力する
console.log(document.getElementById('btn'));


//ボタンがクリックされた時に実行されるイベントリスナーを追加
btn.addEventListener('click',() => {
  //見出しのテキストを変更
 textElement.textContent = 'ボタンをクリックしました';
});
