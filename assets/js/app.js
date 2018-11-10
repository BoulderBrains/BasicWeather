// This is pulling your personal API key out of the config.js file
var myApiKey = apiKeys.MY_KEY;
console.log(new Date())
console.log(new Date().getTime())
console.log(new moment().format("HH:mm"));
var d = ["Sunday","Monday", "Tuesday", "Wednesday", 
			"Thursday", "Friday", "Saturday"];
			var n = new Date().getDay();
			$("#today").text(d[n]);
			$("#time-display").append(new moment().format("HH:mm"));
			var m = new Date().getMonth() + 1;
			var t = new Date().getDate();
			var y = new Date().getFullYear();
			$("#date").append(m + "/" + t + "/" + y);

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
			// $("#current-temp").text(response[0].Temperature.Imperial.Value + " " + response[0].Temperature.Imperial.Unit);
			// $("#current-weather-text").text(response[0].WeatherText);
			// $("#current-wind").append( + response[0].Wind.Speed.Imperial.Value + " " + response[0].Wind.Speed.Imperial.Unit);
			// $("#current-rain").append( + response[0].PrecipitationSummary.Precipitation.Imperial.Value + " %");
			$("#day1Visibility").append( + response[0].Visibility.Imperial.Value + " " + response[0].Visibility.Imperial.Unit);
			$("#day1Pressure").append(  + response[0].Pressure.Imperial.Value + " " + response[0].Pressure.Imperial.Unit);
		});


		// API url for Forecast Cards
		var forecastURL = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + response[0].Key + "?apikey=" + myApiKey + "&details=true&metric=false";
		
		$.ajax({
			url: forecastURL,
			method: "GET"
		}).then(function (response) {
			console.log(response);
			console.log(new Date());
			$("time-display").text();
			$("date").append(new Date());
			var d = ["Sunday","Monday", "Tuesday", "Wednesday", 
			"Thursday", "Friday", "Saturday"];


			// day1
			var n = new Date().getDay();
			if (n < 7){
			$("#day1").text(d[n]);
			}else{
				$("#day1").text(d[n - 7]);
			};

			// Icon for card
			var weatherIconContainer1 = $('#weather-icon1');
			var iconNumber = "0" + response.DailyForecasts[0].Day.Icon
			var imageURL = "assets/images/accuWeatherIcons/"
			weatherIconContainer1.attr('src', imageURL + iconNumber + '-s.png');
			

			var temp = $("#day1temp");
			temp.text(response.DailyForecasts[0].Temperature.Minimum.Value + " - ");
			temp.append(response.DailyForecasts[0].Temperature.Maximum.Value);

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
			sunrise.append(" am");

			var sunset = $("#day1Sunset");
			const unformattedSunsetTime1 = response.DailyForecasts[0].Sun.Set;
			const formattedSunsetTime1 = moment(unformattedSunsetTime1).format("h:mm");
			sunset.append(formattedSunsetTime1);
			sunset.append(" pm");

			var phase = $("#day1Phase");
			phase.append(response.DailyForecasts[0].Day.LongPhrase)

			var Suntime = $("#day1SunTime")
			Suntime.append(response.DailyForecasts[0].HoursOfSun)
			// day 2
			var n = new Date().getDay() + 1;
			if (n < 7){
				$("#day2").text(d[n]);
				}else{
					$("#day2").text(d[n - 7]);
				};

			// Icon for card
			var weatherIconContainer2 = $('#weather-icon2');
			var iconNumber = "0" + response.DailyForecasts[1].Day.Icon
			var imageURL = "assets/images/accuWeatherIcons/"
			weatherIconContainer2.attr('src', imageURL + iconNumber + '-s.png');

			var temp = $("#day2temp");
			temp.text(response.DailyForecasts[1].Temperature.Minimum.Value + " - ");
			temp.append(response.DailyForecasts[1].Temperature.Maximum.Value);

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
			sunrise.append(" am");

			var sunset = $("#day2Sunset");
			const unformattedSunsetTime2 = response.DailyForecasts[1].Sun.Set;
			const formattedSunsetTime2 = moment(unformattedSunsetTime2).format("h:mm");
			sunset.append(formattedSunsetTime2);
			sunset.append(" pm");

			var phase = $("#day2Phase");
			phase.append(response.DailyForecasts[1].Day.LongPhrase)

			var Suntime = $("#day2SunTime")
			Suntime.append(response.DailyForecasts[1].HoursOfSun)

			// day3
			var n = new Date().getDay() + 2;
			if (n < 7){
				$("#day3").text(d[n]);
				}else{
					$("#day3").text(d[n - 7]);
				};

				// Icon for card
			var weatherIconContainer3 = $('#weather-icon3');
			var iconNumber = "0" + response.DailyForecasts[2].Day.Icon
			var imageURL = "assets/images/accuWeatherIcons/"
			weatherIconContainer3.attr('src', imageURL + iconNumber + '-s.png');


			var temp = $("#day3temp");
			temp.text(response.DailyForecasts[2].Temperature.Minimum.Value + " - ");
			temp.append(response.DailyForecasts[2].Temperature.Maximum.Value);

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
			sunrise.append(" am");

			var sunset = $("#day3Sunset");
			const unformattedSunsetTime3 = response.DailyForecasts[2].Sun.Set;
			const formattedSunsetTime3 = moment(unformattedSunsetTime3).format("h:mm");
			sunset.append(formattedSunsetTime3);
			sunset.append(" pm");

			var phase = $("#day3Phase");
			phase.append(response.DailyForecasts[2].Day.LongPhrase)

			var Suntime = $("#day3SunTime")
			Suntime.append(response.DailyForecasts[2].HoursOfSun)


			// day 4
			var n = new Date().getDay() + 3;
			if (n < 7){
				$("#day4").text(d[n]);
				}else{
					$("#day4").text(d[n - 7]);
				};

			// Icon for card
			var weatherIconContainer4 = $('#weather-icon4');
			var iconNumber = "0" + response.DailyForecasts[3].Day.Icon
			var imageURL = "assets/images/accuWeatherIcons/"
			weatherIconContainer4.attr('src', imageURL + iconNumber + '-s.png');


			var temp = $("#day4temp");
			temp.text(response.DailyForecasts[3].Temperature.Minimum.Value + " - ");
			temp.append(response.DailyForecasts[3].Temperature.Maximum.Value);

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
			sunrise.append(" am");

			var sunset = $("#day4Sunset");
			const unformattedSunsetTime4 = response.DailyForecasts[3].Sun.Set;
			const formattedSunsetTime4 = moment(unformattedSunsetTime4).format("h:mm");
			sunset.append(formattedSunsetTime4);
			sunset.append(" pm");

			var phase = $("#day4Phase");
			phase.append(response.DailyForecasts[3].Day.LongPhrase)

			var Suntime = $("#day4SunTime")
			Suntime.append(response.DailyForecasts[3].HoursOfSun)
			// day 5
			var n = new Date().getDay() + 4;
			if (n < 7){
				$("#day5").text(d[n]);
				}else{
					$("#day5").text(d[n - 7]);
				};


			// Icon for card
			var weatherIconContainer5 = $('#weather-icon5');
			var iconNumber = "0" + response.DailyForecasts[4].Day.Icon
			var imageURL = "assets/images/accuWeatherIcons/"
			weatherIconContainer5.attr('src', imageURL + iconNumber + '-s.png');

			var temp = $("#day5temp");
			temp.text(response.DailyForecasts[4].Temperature.Minimum.Value + " - ");
			temp.append(response.DailyForecasts[4].Temperature.Maximum.Value);

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
			sunrise.append(" am");

			var sunset = $("#day5Sunset");
			const unformattedSunsetTime5 = response.DailyForecasts[4].Sun.Set;
			const formattedSunsetTime5 = moment(unformattedSunsetTime5).format("h:mm");
			sunset.append(formattedSunsetTime5);
			sunset.append(" pm");

			var phase = $("#day5Phase");
			phase.append(response.DailyForecasts[4].Day.LongPhrase);

			var Suntime = $("#day5SunTime")
			Suntime.append(response.DailyForecasts[4].HoursOfSun);
			// // -----------------------------------------------------------------------
			
			// Adding the current zipcode for the weather currently being display
			var userZip= $("#zip2");
			userZip.append(zip);
		})
	});
	hideEntryShowForm();
});


function hideEntryShowForm() {
	$(".entry-container").hide();
	$("#zip-display-return").show();
	$(".card-container").show();
}

function showEntryHideForm() {
	$(".entry-container").show();
	$("#zip-display-return").hide();
	$(".card-container").hide();
}

function showAdditonalDayInfo() {
	// Onclick of forcast card, display additional day weather info in #additional-day-data
}