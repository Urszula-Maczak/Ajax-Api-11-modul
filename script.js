	var url = 'https://restcountries.eu/rest/v2/name/';
	var urlCapital = 'https://restcountries.eu/rest/v2/capital/';
	var urlLanguage = 'https://restcountries.eu/rest/v2/lang/';

	var countriesList = $('#countries');
	var capitalList = $('#capitals');
	var languagesList = $('#languages');

	$('#search').click(searchCountries);
	$('#search').click(searchCapitals);
	$('#search').click(searchLanguages);

	function searchCountries() {
		var countryName = $('#country-name').val();
		
		if (!countryName.length) countryName = 'Poland';

		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
		});
	}

	function searchCapitals() {
		var capitalName = $('#country-name').val();

		if (!capitalName.length) capitalName = 'Warsaw';

		$.ajax({
			url: urlCapital + capitalName,
			method: 'GET',
			success: showCapitalList
		});
	}

	function searchLanguages() {
		var languageName = $('#country-name').val();

		if (!languageName) languageName = 'Pl';

		$.ajax({
			url: urlLanguage + languageName,
			method: 'GET',
			success: showLanguagesList
		});
	}

	function showCountriesList(resp) {
		countriesList.empty();

		resp.forEach(function(item) {
			$('<li>').text(item.name).appendTo(countriesList);

		});
	}

	function showCapitalList(resp) {
		capitalList.empty();

		resp.forEach(function(item) {
			$('<li>').text(item.name).appendTo(capitalList);			
		});
	}

	function showLanguagesList(resp) {
		languagesList.empty();

		resp.forEach(function(item) {
			$('<li>').text(item.name).appendTo(languagesList);
		});
	}
