/*
問題文

時針と分針の長さがそれぞれ A センチメートル、B センチメートルであるアナログ時計を考えます。
時針と分針それぞれの片方の端点は同じ定点に固定されており、この点を中心としてそれぞれの針は一定の角速度で時計回りに回転します。時針は 12 時間で、分針は 1 時間で 1 周します。
0 時ちょうどに時針と分針は重なっていました。ちょうど H 時 M 分になったとき、2 本の針の固定されていない方の端点は何センチメートル離れているでしょうか。

制約

入力はすべて整数
1 ≤ A, B ≤1000
0 ≤ H ≤ 11
0 ≤ M ≤ 59
*/

function clock(A, B, H, M) {
  var longRad = 2 * (H * 60 + M) / 720 * Math.PI;
  var shortRad = 2 * M / 60 * Math.PI;
  var long = [A * Math.cos(longRad), A * Math.sin(longRad)];
  var short = [B * Math.cos(shortRad), B * Math.sin(shortRad)];

  var d = Math.sqrt((long[0] - short[0]) ** 2 + (long[1] - short[1]) ** 2);
  return d;
}

console.log(clock(3, 4, 9, 0));