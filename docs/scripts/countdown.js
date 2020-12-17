// https://www.nishishi.com/javascript-tips/realtime-countdown-deadline.html

function set2fig(num) {
   // 数値が1桁だったら2桁の文字列にして返す
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function isNumOrZero(num) {
   // 数値でなかったら0にして返す
   if( isNaN(num) ) { return 0; }
   return num;
}
function showCountdown() {
   // 現在日時を数値(1970-01-01 00:00:00からのミリ秒)に変換
   var nowDate = new Date();
   var dnumNow = nowDate.getTime();

   // 指定日時を数値(1970-01-01 00:00:00からのミリ秒)に変換
   var inputYear  = 2021;
   var inputMonth = 1 - 1;
   var inputDate  = 15;
   var inputHour  = 11;
   var inputMin   = 0;
   var inputSec   = 0;
   var targetDate = new Date( isNumOrZero(inputYear), isNumOrZero(inputMonth), isNumOrZero(inputDate), isNumOrZero(inputHour), isNumOrZero(inputMin), isNumOrZero(inputSec) );
   var dnumTarget = targetDate.getTime();

   // 表示を準備
   var dlYear  = targetDate.getFullYear();
   var dlMonth = targetDate.getMonth() + 1;
   var dlDate  = targetDate.getDate();
   var dlHour  = targetDate.getHours();
   var dlMin   = targetDate.getMinutes();
   var dlSec   = targetDate.getSeconds();

   // 引き算して日数(ミリ秒)の差を計算
   var diff2Dates = dnumTarget - dnumNow;
   if( dnumTarget < dnumNow ) {
      // 期限が過ぎた場合は -1 を掛けて正の値に変換
      diff2Dates *= -1;
   }

   // 差のミリ秒を、日数・時間・分・秒に分割
   var dDays  = diff2Dates / ( 1000 * 60 * 60 * 24 );   // 日数
   diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
   var dHour  = diff2Dates / ( 1000 * 60 * 60 );   // 時間
   diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
   var dMin   = diff2Dates / ( 1000 * 60 );   // 分
   diff2Dates = diff2Dates % ( 1000 * 60 );
   var dSec   = diff2Dates / 1000;   // 秒


   // 二桁表示
   var Days;
   if (String(Math.floor(dDays)).length == 1) {
      Days = "0" + Math.floor(dDays)
   } else {
      Days = Math.floor(dDays)
   }
   var Hour;
   if (String(Math.floor(dHour)).length == 1) {
      Hour = "0" + Math.floor(dHour)
   } else {
      Hour = Math.floor(dHour)
   }
   var Min;
   if (String(Math.floor(dMin)).length == 1) {
      Min = "0" + Math.floor(dMin)
   } else {
      Min = Math.floor(dMin)
   }
   var Sec;
   if (String(Math.floor(dSec)).length == 1) {
      Sec = "0" + Math.floor(dSec)
   } else {
      Sec = Math.floor(dSec)
   }

   var msg2 = Days + "d"
            + Hour + "h"
            + Min + "m"
            + Sec + "s...";

   // 表示文字列の作成
   var msg;
   if( dnumTarget > dnumNow ) {
      // まだ期限が来ていない場合
      msg = msg2;
   }
   else {
      // 期限が過ぎた場合
      msg = "ご来場いただき、誠にありがとうございました。";
   }

   // 作成した文字列を表示
   document.getElementById("RealtimeCountdownArea").innerHTML = msg;
   // document.write(msg);
}
// 1秒ごとに実行
setInterval('showCountdown()',1000);
