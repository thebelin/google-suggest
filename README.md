# google-suggest by Belin Fieldson

This package has supporting files for a presentation on how to use the Google Auto-Complete tool for search
suggestions to derive pertinent keywords from a simple search.

Google's autocomplete feature is a gold mine of keywords and marketing terms. These keywords and terms are suggested to their users via an API. By tapping into this API and sending it requests for auto-completion which are related to your chosen search term, you can find many related search phrases which will probably be used by those searching for content.

This is done with two functions, one retrieves the search suggestions for a single term. The other function extends this query with alphabet components, making 25 requests (one for each letter of the alphabet) which get up to 10 results each for each alphabet character. There is a built in delay which causes this process to take about 30 seconds to complete. These requests count against the total number of external API requests you are allowed per day (20K for most accounts).
____

### Google Library ID:
MzveCKfxI8Vae53WtbuguSQIv2K89z2yK
____

### Example Of Use:
````
function getSuggestions (seed) {
  return GoogleSuggester.getSuggestions(seed);
}

function getAlphaSuggestions (seed) {
  return GoogleSuggester.getAlphaSuggestions(seed);
}
````

### Slideshow Presentation:
[Google Docs Slideshow](https://goo.gl/2zxCRX) This slideshow is intended to accompany a presentation
on how to use the suggester library.
