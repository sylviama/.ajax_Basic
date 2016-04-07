$(document).ready(function(){
  $.ajax({
    url:"song.json"
  }).done(function(data){
    loopThroughSongs(data.songs);
  });

// //Way2
//   $.ajax({
//     url:"song.json",
//     success: loopThroughSongs
//   })

  //loop through function
  function loopThroughSongs(data){
    $(data).each(function(i, element){
      $("#list-of-songs").append("<h1>"+element.title+"</h1>");
      $("#list-of-songs").append("<div>"+element.album+"</div>");
      $("#list-of-songs").append("<div>"+element.artist+"</div>");
    });
  };

  //get more songs function
    $("#get-more-songs").click(function(){
      $.ajax({
        url:"more_songs.json"
      }).done(function(data){
        loopThroughSongs(data.songs);
        $("#get-more-songs").hide();
        $("#less").show();
      });
    })
  });

