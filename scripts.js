$.ajax("http://www.omdbapi.com/?",
    {
      t: "sharknado"
    },
    function(response) {
      console.log(response);
    }
  );

$.ajax({
  url: "http://www.omdbapi.com/?",
  data: {
    t: "sharknado"
  },
  dataType: "json",
  success: function(response) {
    console.log(response);
    $("#movie-title").html(response.Title);
	$("#poster").attr("src", response.Poster);
  }
});

$( "#searchbar" ).keyup(function() {
  var value = $( this ).val();
  $( "p" ).text( value );
});

// $( "input" )
//   .keyup(function() {
//     var value = $( this ).val();
//     $( "p" ).text( value );
//   })
//   .keyup();