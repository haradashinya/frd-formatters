
export const z2h = (value:string) => {
    // Convert hex zenkaku to hankaku
    var regex = /[Ａ-Ｚａ-ｚ０-９！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝]/g;
    // 入力値の全角を半角の文字に置換
    value = value.replace(regex, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    }).
    replace(/[‐－―]/g, '-') // ハイフンなど
    .replace(/[～〜]/g, '~')  // チルダ
    .replace(/　/g, ' ');  // スペース
        return value;
}