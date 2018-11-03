// This is pulling your personal API key out of the config.js file
var myApiKey = apiKeys.MY_KEY;

// This .on("click") function will trigger the AJAX Call
$("#find-zip").on("click", function (event) {
	event.preventDefault();

	// Here we grab the text from the input box
	var zip = $("#zip-input").val();

	// URL
	var queryURL = "https://dataservice.accuweather.com/locations/v1/postalcodes/search" + "?apikey=" + myApiKey +"&q=" + zip;

	// Write code between the dashes below to hit the queryURL with $ajax, then take the response data
	// and display it in the div with an id of zip-view

	// ------the reponse.

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function (response) {
		console.log(response[0].Key)


		var forecastURL = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + response[0].Key + "?apikey=" + myApiKey;
		var currentURL = "http://dataservice.accuweather.com/currentconditions/v1/" + response[0].Key + "?apikey=" + myApiKey;
		$.ajax({
			url: currentURL,
			method: "GET"
		}).then(function (response) {
			$().text(response)
			console.log(response)


			//--------------------------cant make api key to work. will update when it does work. 
			//var carr = $("#current-temp").text(response);
		// 	var temp = $("#day1temp");
		// 	temp.text(response.DailyForecasts[0].Temperature.Maximum.Value +" - ");
		// 	temp.append(response.DailyForecasts[0].Temperature.Minimum.Value);
		// 	// var rain = $("#list-group-item chance-of-precipitation").text(response);
		// 	// var wind = $("#list-group-item windspeed").text(response)
		// 	// var sunset = $("#list-group-item sunset-time").text(response);
		// 	// var sunrise = $("#list-group-item sunrise-time").text(response)
		// 	var temp = $("#day2temp");
		// 	temp.text(response.DailyForecasts[1].Temperature.Maximum.Value +" - ");
		// 	temp.append(response.DailyForecasts[1].Temperature.Minimum.Value);

		// 	var temp = $("#day3temp");
		// 	temp.text(response.DailyForecasts[2].Temperature.Maximum.Value +" - ");
		// 	temp.append(response.DailyForecasts[2].Temperature.Minimum.Value);
		// 	var temp = $("#day4temp");

		// 	temp.text(response.DailyForecasts[3].Temperature.Maximum.Value +" - ");
		// 	temp.append(response.DailyForecasts[3].Temperature.Minimum.Value);
		// 	var temp = $("#day5temp");

		// 	temp.text(response.DailyForecasts[4].Temperature.Maximum.Value +" - ");
		// 	temp.append(response.DailyForecasts[4].Temperature.Minimum.Value);
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
