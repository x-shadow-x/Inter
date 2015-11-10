/**
 *  TODO:项目正式上线时，删除此处的Bootlint检测
 */
(function () {
    var s = document.createElement("script");
    s.onload = function () {
        bootlint.showLintReportForCurrentDocument([]);
    };
    s.src = "js/bootlint.js";
    document.body.appendChild(s)
})();
/*************************************************/
function mask() {
    var masks = $(".mask");
    for(var i = 0; i < masks.length; i++){
        masks[i].style.top=(masks[i].offsetHeight - 45)+"px";
    }
    console.log("hehe");
}
$(window).resize(mask);
$(window).load(mask);

