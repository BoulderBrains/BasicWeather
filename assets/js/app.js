// This is pulling your personal API key out of the config.js file
var myApiKey = apiKeys.MY_KEY;
// const moment = require('moment')

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

		// API url for Current Condition Card
		var currentURL = "https://dataservice.accuweather.com/currentconditions/v1/" + response[0].Key + "?apikey=" + myApiKey + "&details=true";
		
		$.ajax({
			url: currentURL,
			method: "GET"
		}).then(function (response) {
			console.log(response)

			$("#current-temp").text(response[0].Temperature.Imperial.Value + " " + response[0].Temperature.Imperial.Unit);
			$("#current-weather-text").text(response[0].WeatherText);
			$("#currnt-wind").text("Windspeed " + response[0].Wind.Speed.Imperial.Value + " " + response[0].Wind.Speed.Imperial.Unit);
			$("#current-rain").text("Chance of rain " + response[0].PrecipitationSummary.Precipitation.Imperial.Value + " %");
			$("#current-visibility").text("Visibility " + response[0].Visibility.Imperial.Value + " " + response[0].Visibility.Imperial.Unit);
			$("#current-pressure").text("Pressure "  + response[0].Pressure.Imperial.Value + " " + response[0].Pressure.Imperial.Unit);
		});


		// API url for Forecast Cards
		var forecastURL = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + response[0].Key + "?apikey=" + myApiKey + "&details=true&metric=false";
		
		$.ajax({
			url: forecastURL,
			method: "GET"
		}).then(function (response) {
			console.log(response);
			
			
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
			const unformattedSunriseTime1 = response.DailyForecasts[0].Sun.Rise;
			const formattedSunriseTime1 = moment(unformattedSunriseTime1).format("h:mm");
			sunrise.append(formattedSunriseTime1);

			var sunset = $("#day1Sunset");
			const unformattedSunsetTime1 = response.DailyForecasts[0].Sun.Set;
			const formattedSunsetTime1 = moment(unformattedSunsetTime1).format("h:mm");
			sunset.append(formattedSunsetTime1);


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
			const unformattedSunriseTime2 = response.DailyForecasts[1].Sun.Rise;
			const formattedSunriseTime2 = moment(unformattedSunriseTime2).format("h:mm");
			sunrise.append(formattedSunriseTime2);

			var sunset = $("#day2Sunset");
			const unformattedSunsetTime2 = response.DailyForecasts[1].Sun.Set;
			const formattedSunsetTime2 = moment(unformattedSunsetTime2).format("h:mm");
			sunset.append(formattedSunsetTime2);


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
			const unformattedSunriseTime3 = response.DailyForecasts[2].Sun.Rise;
			const formattedSunriseTime3 = moment(unformattedSunriseTime3).format("h:mm");
			sunrise.append(formattedSunriseTime3);

			var sunset = $("#day3Sunset");
			const unformattedSunsetTime3 = response.DailyForecasts[2].Sun.Set;
			const formattedSunsetTime3 = moment(unformattedSunsetTime3).format("h:mm");
			sunset.append(formattedSunsetTime3);


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
			const unformattedSunriseTime4 = response.DailyForecasts[3].Sun.Rise;
			const formattedSunriseTime4 = moment(unformattedSunriseTime4).format("h:mm");
			sunrise.append(formattedSunriseTime4);

			var sunset = $("#day4Sunset");
			const unformattedSunsetTime4 = response.DailyForecasts[3].Sun.Set;
			const formattedSunsetTime4 = moment(unformattedSunsetTime4).format("h:mm");
			sunset.append(formattedSunsetTime4);


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
			const unformattedSunriseTime5 = response.DailyForecasts[4].Sun.Rise;
			const formattedSunriseTime5 = moment(unformattedSunriseTime5).format("h:mm");
			sunrise.append(formattedSunriseTime5);

			var sunset = $("#day5Sunset");
			const unformattedSunsetTime5 = response.DailyForecasts[4].Sun.Set;
			const formattedSunsetTime5 = moment(unformattedSunsetTime5).format("h:mm");
			sunset.append(formattedSunsetTime5);
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
