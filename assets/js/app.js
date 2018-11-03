// This is pulling your personal API key out of the config.js file
var myApiKey = apiKeys.MY_KEY;

// This .on("click") function will trigger the AJAX Call
$("#find-zip").on("click", function (event) {
	event.preventDefault();

	// Here we grab the text from the input box
	var zip = $("#zip-input").val();

	// URL
	var queryURL = "https://dataservice.accuweather.com/locations/v1/postalcodes/search" + "?apikey=" + myApiKey + "&q=" + zip;

	// Write code between the dashes below to hit the queryURL with $ajax, then take the response data
	// and display it in the div with an id of zip-view

	// ------the reponse.

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function (response) {
		console.log(response[0].Key)

		// "?details=true&metric=false"
		var forecastURL = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + response[0].Key + "?apikey=" + myApiKey + "&details=true&metric=false";
		var currentURL = "https://dataservice.accuweather.com/currentconditions/v1/" + response[0].Key + "?apikey=" + myApiKey + "&details=true";
		$.ajax({
			url: forecastURL,
			method: "GET"
		}).then(function (response) {
			$().text(response)
			console.log(response)

			$("#current-temp").text(response[0].Temperature.Imperial.Value + " " + response[0].Temperature.Imperial.Unit)
			$(".weather-text").text(response[0].WeatherText)
			$(".windspeed").text("Winddpeed " + response[0].Wind.Speed.Imperial.Value + " " + response[0].Wind.Speed.Imperial.Unit)
			$(".chance-of-precipitation").text("Chance of rain " + response[0].PrecipitationSummary.Precipitation.Imperial.Value + " %")
			$(".visibility").text("Visibility " + response[0].Visibility.Imperial.Value + " " + response[0].Visibility.Imperial.Unit)
			$(".pressure").text("Pressure "  + response[0].Pressure.Imperial.Value + " " + response[0].Pressure.Imperial.Unit)
			
			//--------------------------cant make api key to work. will update when it does work. 
			// day1
			var temp = $("#day1temp");
			temp.text(response.DailyForecasts[0].Temperature.Maximum.Value + " - ");
			temp.append(response.DailyForecasts[0].Temperature.Minimum.Value);

			var rain = $("#day1Rain");
			rain.append(response.DailyForecasts[0].Day.PrecipitationProbability);
			rain.append("%");

			var wind = $("#day1Wind");
			wind.append(response.DailyForecasts[0].Day.Wind.Speed.Value);
			wind.append(response.DailyForecasts[0].Day.Wind.Speed.Unit);

			var sunrise = $("#day1Sunrise");
			sunrise.append(response.DailyForecasts[0].Sun.Rise);

			var sunset = $("#day1Sunset");
			sunset.append(response.DailyForecasts[0].Sun.Set);
			// day 2
			var temp = $("#day2temp");
			temp.text(response.DailyForecasts[1].Temperature.Maximum.Value + " - ");
			temp.append(response.DailyForecasts[1].Temperature.Minimum.Value);

			var rain = $("#day2Rain");
			rain.append(response.DailyForecasts[1].Day.PrecipitationProbability);
			rain.append("%");

			var wind = $("#day2Wind");
			wind.append(response.DailyForecasts[1].Day.Wind.Speed.Value);
			wind.append(response.DailyForecasts[1].Day.Wind.Speed.Unit);

			var sunrise = $("#day2Sunrise");
			sunrise.append(response.DailyForecasts[1].Sun.Rise);

			var sunset = $("#day2Sunset");
			sunset.append(response.DailyForecasts[1].Sun.Set);

			// day3
			var temp = $("#day3temp");
			temp.text(response.DailyForecasts[2].Temperature.Maximum.Value + " - ");
			temp.append(response.DailyForecasts[2].Temperature.Minimum.Value);

			var rain = $("#day3Rain");
			rain.append(response.DailyForecasts[2].Day.PrecipitationProbability);
			rain.append("%");

			var wind = $("#day3Wind");
			wind.append(response.DailyForecasts[2].Day.Wind.Speed.Value);
			wind.append(response.DailyForecasts[2].Day.Wind.Speed.Unit);
			var sunrise = $("#day3Sunrise");
			sunrise.append(response.DailyForecasts[2].Sun.Rise);

			var sunset = $("#day3Sunset");
			sunset.append(response.DailyForecasts[2].Sun.Set);
			// day 4
			var temp = $("#day4temp");
			temp.text(response.DailyForecasts[3].Temperature.Maximum.Value + " - ");
			temp.append(response.DailyForecasts[3].Temperature.Minimum.Value);

			var rain = $("#day4Rain");
			rain.append(response.DailyForecasts[3].Day.PrecipitationProbability);
			rain.append("%");

			var wind = $("#day4Wind");
			wind.append(response.DailyForecasts[3].Day.Wind.Speed.Value);
			wind.append(response.DailyForecasts[3].Day.Wind.Speed.Unit);
			var sunrise = $("#day4Sunrise");
			sunrise.append(response.DailyForecasts[3].Sun.Rise);

			var sunset = $("#day4Sunset");
			sunset.append(response.DailyForecasts[3].Sun.Set);
			// day 5
			var temp = $("#day5temp");
			temp.text(response.DailyForecasts[4].Temperature.Maximum.Value + " - ");
			temp.append(response.DailyForecasts[4].Temperature.Minimum.Value);

			var rain = $("#day5Rain");
			rain.append(response.DailyForecasts[4].Day.PrecipitationProbability);
			rain.append("%");

			var wind = $("#day5Wind");
			wind.append(response.DailyForecasts[4].Day.Wind.Speed.Value);
			wind.append(response.DailyForecasts[4].Day.Wind.Speed.Unit);

			var sunrise = $("#day5Sunrise");
			sunrise.append(response.DailyForecasts[4].Sun.Rise);

			var sunset = $("#day5Sunset");
			sunset.append(response.DailyForecasts[4].Sun.Set);
			// // -----------------------------------------------------------------------
		})
	});
	hideEntryShowForm();
});


function hideEntryShowForm() {
	$(".entry-container").hide();
	$(".card-container").show();
}

function showEntryHideForm() {
	$(".entry-container").show();
	$(".card-container").hide();
}
