$(document).ready(function() {
	var turns = 0;

	var spot1 = $('#spot1');
	var spot2 = $('#spot2');
	var spot3 = $('#spot3');
	var spot4 = $('#spot4');
	var spot5 = $('#spot5');
	var spot6 = $('#spot6');
	var spot7 = $('#spot7');
	var spot8 = $('#spot8');
	var spot9 = $('#spot9');

	// Check for every row, column and diagonal
	function checkWinningCondition(player) {
		return spot1.hasClass(player) && spot2.hasClass(player) && spot3.hasClass(player) ||
		spot4.hasClass(player) && spot5.hasClass(player) && spot6.hasClass(player) ||
	    spot7.hasClass(player) && spot8.hasClass(player) && spot9.hasClass(player) ||
	    spot1.hasClass(player) && spot4.hasClass(player) && spot7.hasClass(player) ||
	    spot2.hasClass(player) && spot5.hasClass(player) && spot8.hasClass(player) ||
	    spot3.hasClass(player) && spot6.hasClass(player) && spot9.hasClass(player) ||
	    spot1.hasClass(player) && spot5.hasClass(player) && spot9.hasClass(player) ||
	    spot3.hasClass(player) && spot5.hasClass(player) && spot7.hasClass(player);
	}

	// Resetting the board
	function resetBoard() {
		$('#board td').text('');
		$('#board td').removeClass('disable');
		$('#board td').removeClass('o');
		$('#board td').removeClass('x');
	}

	$('#board td').on('click', function() {
		// Cannot click on occupied space
		if ($(this).hasClass('disable')) {
			alert('This spot is already filled');
		}

		// O starts first, so even-indexed turn is O's turn
		else if (turns%2 == 0) {
			turns++;
			$(this).text('o');
			$(this).addClass('disable o');

			if (checkWinningCondition('o')) {
				alert('Winner: O');
				resetBoard();
				turns = 0;
		    }

		    // O will have the last move, if the move does not lead to winning, it is a tiw
		    if (turns == 9) {
				alert('Tie Game');
				resetBoard();
				turns = 0;
			}
		}

		// Odd-indexed turn is X's turn
		else {
			turns++;
			$(this).text('x');
			$(this).addClass('disable x');

			if (checkWinningCondition('x')) {
				alert('Winner: X');
				resetBoard();
				turns = 0;
		    }
		}
	})

	// Reset handler
	$('#reset').on('click', function() {
		resetBoard();
		turns = 0;
	})

});

