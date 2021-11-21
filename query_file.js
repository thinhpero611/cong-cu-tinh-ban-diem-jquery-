$(document).ready(function() {
	const testScore = [0, 0, 0, 0, 0, "?"];

	function addRowTable() {
	  //Thêm hàng vào table cùng với giá trị của từng cell
	  let text = "";
	  for (i in testScore) {
	  	text += "<td>" + testScore[i] + "</td>";
	  }
	  $('#myTable').append('<tr>'+text+'</tr>');
	}

	function setBack() {
		// Dat gia tri ve ban dau
		$("#name").val("");
	  	$("#math").val("");
	  	$("#physical").val("");
	  	$("#chemistry").val("");
	}
	const count = (function () {
	  // hàm khép kín để giữ giá trị đã tính mỗi khi gọi hàm
	  let counter = 0;
	  return function () {counter += 1; return counter}
	})();

	$('.add-user-btn').on('click', function() {
		position = count();
		testScore[0] = position;
		testScore[1] = $("#name").val();
	  	testScore[2] = $("#math").val();
	  	testScore[3] = $("#physical").val();
	  	testScore[4] = $("#chemistry").val();
	  	for(let i = 2; i< testScore.length-1; i++) {
	  		if (testScore[i] > 10 || testScore[i] < 0 ) {
	  			alert('ban nhap lai');
	  		}
	  	}
	  setBack();
	  addRowTable();
	});

	$('.avg-btn').on('click', function() {
		const sums = [];
		$('#myTable tr').each(function(index_row) {
			if (index_row > 0) {
				sums.push(0);
				console.log(index_row)
				$(this).children("td").each(function(index_col) {
					if (index_col > 1 && index_col < 5) {
						let value = $(this).text();
						// console.log(value);
						sums[index_row-1] += parseFloat(value);
					}
				});
			}
		});
		// console.log(sums);
		$('#myTable tr').each(function(index_row){
			if (index_row > 0) {
				$(this).children("td").each(function(index_col) {
					if (index_col === 5) {
						let avg_value = (sums[index_row-1]/3).toFixed(1);
						$(this).text(avg_value);
					}
				});
			}	
		});
	});

	$('.excell-student-btn').on('click', function() {
		$('#myTable tr').each(function(index_row){
			if (index_row > 0) {
				let avg = $(this).children().eq(5).text();
				if (Number(avg) >= 8.0) {
					$(this).addClass('redColor');
				}
			}	
		});

	});
});