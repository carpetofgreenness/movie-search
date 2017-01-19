var value = ""

$( "#searchbar" ).keyup(function() {
	value = $( this ).val();
	// console.log(value);
	if (value.length >= 3) {
	    $.ajax({
			url: "http://www.omdbapi.com/?",
			data: {
			t: value
			},
			dataType: "json",
			success: function(response) {
			console.log(response);
			$("#movie-title").html(response.Title);
			$("#poster").attr("src", response.Poster);
			}
		});
	}	

});

// $.ajax("http://www.omdbapi.com/?",
//     {
//       t: value
//     },
//     function(response) {
//       console.log(response);
//     }
//   );



// $.ajax({
//   url: "http://www.omdbapi.com/?",
//   data: {
//     t: word
//   },
//   dataType: "json",
//   success: function(response) {
//     console.log(response);
//     $("#movie-title").html(response.Title);
// 	$("#poster").attr("src", response.Poster);
//   }
// });
