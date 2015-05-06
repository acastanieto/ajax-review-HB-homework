// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    // TODO: get the fortune and show it in the fortune-text div\
    $("#fortune-text").load("/fortune");
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();
    // var url = "/weather?zipcode=" + $("#zipcode-field").val();
    var url = "/weather?" + $("#weather-form").serialize();

    // TODO: request weather with that URL and show the forecast in #weather-info
      $.get(url, function(result) {
        if (result === "nozip") {
          $("#weather-info").html("I don't have that forecast.");
        } else {
          $("#weather-info").html(
            "Today's forecast is " + result["forecast"] +
            " The temperature is " + result["temp"] + ".");


        }
      });
}




$("#weather-form").on('submit', showWeather);
