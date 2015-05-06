// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $('#fortune-text').load('/fortune');
}

$('#get-fortune-button').on('click', showFortune);




// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();
    $('#weather-info').empty();

    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    $.get(url, function(data){
       for (item in data){
            $('#weather-info').append("<p><b>" + item.toUpperCase() + ":</b> " + data[item] + "</p>");
        }
    });
}

$("#weather-form").on('submit', showWeather);
