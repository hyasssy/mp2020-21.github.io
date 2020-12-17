var items  = [];

items.push("大里淳 / Jun Osato 大滝彩加 / Ayaka Otaki ");
items.push("岡 千穂 / Chiho Oka 古閑慶治 / Cage Koga ");
items.push("小林舞衣 / Mai Kobayashi 椎名悠香 / Yuka Shiina ");
items.push("宍倉志信 / Shinobu Shishikura 志村茉那美 / Manami Shimura ");
items.push("瀬古瑞歩 / Mizuho Seko 平井亨季 / Koki Hirai ");
items.push("福原翼 / Tsubasa Fukuhara 吉田真也 / Shinya Yoshida ");
items.push("内海拓 / Taku Uchiumi 笠島久美子 / Kumiko Kasajima ");
items.push("ジョイス・ラム / Joyce Lam 孫奎星 / Sun Kuixing ");
items.push("龍村景一 / Keiichi Tatsumura 田中彩 / Aya Tanaka ");
items.push("西村梨緒葉 / Rioha Nishimura 林裕人 / Yuto Hayashi ");
items.push("松井靖果 / Shizuka Matsui 山岸耕輔 / Kosuke Yamagishi ");


var br = "<br>";

var msg = "";

for (let i = 0; i < items.length; i++) {
    msg = msg + items[i] + items[i] + items[i] + br 
}

for (let i = 0; i < 6; i++) {
    msg = msg + msg 
}

document.getElementById("NamesArea").innerHTML = msg;
