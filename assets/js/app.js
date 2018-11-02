// This .on("click") function will trigger the AJAX Call
$("#find-zip").on("click", function (event) {
	event.preventDefault();

	// Here we grab the text from the input box
	var zip = $("#zip-input").val();

	// URL
	var queryURL = "http://dataservice.accuweather.com/locations/v1/postalcodes/search" + "?apikey=Eyz3mMQLVVsjPycNTTRNgKgK3NpKxNEy&q=" + zip;

	// Write code between the dashes below to hit the queryURL with $ajax, then take the response data
	// and display it in the div with an id of zip-view

	// ------the reponse.

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function (response) {
		console.log(response[0].Key)


		var forecastURL = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" + response[0].Key + "?apikey=Eyz3mMQLVVsjPycNTTRNgKgK3NpKxNEy";
		$.ajax({
			url: forecastURL,
			method: "GET"
		}).then(function (response) {
			$().text(response)
			console.log(response)

			// -----------------------------------------------------------------------
		})
	});
});