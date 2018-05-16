document.querySelectorAll('.js-calendar-graph-svg g g rect').forEach(function(element) {
    let color = random_rgba();
    element.setAttribute("fill", color);
});


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
