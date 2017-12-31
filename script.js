$().ready(function() {
  var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

  for (i = 0; i < streamers.length; i++) {
    $("body").append('<div id="' + streamers[i] + '"></div>');
    $("#" + streamers[i]).append('<a href="https://twitch.tv/' + streamers[i] + '">' + streamers[i] + '</a>');

  var url = "https://wind-bow.glitch.me/twitch-api/streams/" + streamers[i];

  (function(i) {
    $.getJSON(url, function(data) {
      console.log(data);
      if (data.stream == null) {
        $("#" + streamers[i]).append("Streaming: offline");
      } else {
        $("#" + streamers[i]).append("Streaming: " + data.stream.channel.status);
      }
    });
  })(i);

  }
});
