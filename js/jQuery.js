$('#changeChar').click(function(){
    $('#mapView').fadeOut('slow', function() {
        $('#charView').fadeIn('slow', function() {

        });
    });
});

$('.charSelect').click(function(){
    $('#charView').fadeOut('slow', function(){
        $('#mapView').fadeIn('slow', function(){

        });
    });
});

// FINAL DESTINATION

var fdWins = Number;
var fdLosses = Number;

$('#fdWin, #fdLoss').change(function(){
    fdWins = parseInt($('#fdWin').val());
    fdLosses = parseInt($('#fdLoss').val());
    fdWinRate = ((fdWins / (fdWins + fdLosses)) * 100).toPrecision(4);
	$('.fdBar').css({
		width: fdWinRate + '%'
    }).html(fdWinRate + '%');
});

// BATTLEFIELD

$('#bfWin, #bfLoss').change(function(){
    bfWins = parseInt($('#bfWin').val());
    bfLosses = parseInt($('#bfLoss').val());
    bfWinRate = ((bfWins / (bfWins + bfLosses)) * 100).toPrecision(4);
	$('.bfBar').css({
		width: bfWinRate + '%'
    }).html(bfWinRate + '%');
});

// FOUNTAIN OF DREAMS

$('#fountainWin, #fountainLoss').change(function(){
    fountainWins = parseInt($('#fountainWin').val());
    fountainLosses = parseInt($('#fountainLoss').val());
    fountainWinRate = ((fountainWins / (fountainWins + fountainLosses)) * 100).toPrecision(4);
	$('.fountainBar').css({
		width: fdWinRate + '%'
    }).html(fdWinRate + '%');
});

// YOSHI STORY

$('#fdWin, #fdLoss').change(function(){
    fdWins = parseInt($('#fdWin').val());
    fdLosses = parseInt($('#fdLoss').val());
    fdWinRate = ((fdWins / (fdWins + fdLosses)) * 100).toPrecision(4);
	$('.fdBar').css({
		width: fdWinRate + '%'
    }).html(fdWinRate + '%');
});

// DREAM LAND

$('#fdWin, #fdLoss').change(function(){
    fdWins = parseInt($('#fdWin').val());
    fdLosses = parseInt($('#fdLoss').val());
    fdWinRate = ((fdWins / (fdWins + fdLosses)) * 100).toPrecision(4);
	$('.fdBar').css({
		width: fdWinRate + '%'
    }).html(fdWinRate + '%');
});

// POKEMON STADIUM

$('#fdWin, #fdLoss').change(function(){
    fdWins = parseInt($('#fdWin').val());
    fdLosses = parseInt($('#fdLoss').val());
    fdWinRate = ((fdWins / (fdWins + fdLosses)) * 100).toPrecision(4);
	$('.fdBar').css({
		width: fdWinRate + '%'
    }).html(fdWinRate + '%');
});