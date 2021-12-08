/* import $ from 'jquery' // import module example (npm i -D jquery)

	 //Движущийся эффект на главной секции

document.addEventListener('DOMContentLoaded', () => {

	$('.head-banner').mousemove(function(e) {
        var moveX = (e.pageX * -1 / 15);
        var moveY = (e.pageY * -1 / 15);
        $(this).css("background-position", moveX + "px " + moveY + "px");
    });

});
 */