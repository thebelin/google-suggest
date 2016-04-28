/**
 * Get autocomplete suggestions from google for the specifed keyword seed
 *
 * @param seed string The seed to search based upon
 */
function getSuggestions (seed) {
  // The URL to hit for Google's suggestions
  var suggestUrl = "http://suggestqueries.google.com/complete/search?client=chrome&q=" + encodeURI(seed || "how to"),
    response, resArr;

  if (seed) {
    // The response from the suggestion URL
    response = UrlFetchApp.fetch(suggestUrl);
      
    // An array of the the responses, parsed from the JSON text
    resArr = JSON.parse(response);

    // Return the array of data if it was returned
    if (resArr && resArr.length && resArr[1]) {
      return resArr[1];
    }
  }
  // Return the seed itself as an array if there was nothing
  return [seed];
}

/**
 * A test to run on the getSuggestions function to make sure it works
 */
function testGetSuggestions () {
  return getSuggestions('test phrase');
}


/**
 * getAlphaSuggestions
 *
 * Gets suggestions for the seed + a - z
 *
 * @param seed sting The seed to get the alpha suggestions for
 */
function getAlphaSuggestions(seed)
{
  // The var to be returned
  var ret = [],
  
  // A var to modify for each letter iteration
      thisRet,

  // The entirety of the alphabet
      alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if (!seed) {
    return [''];
  }
  // Iterate the alpha array of characters
  alpha.map(function (char) {
    // Add a suggestion for each character
    thisRet = getSuggestions(seed + ' ' + char);
    
    // Add each of the results for each letter to the result set
    thisRet.map(function (res) {
      ret.push(res);
    });
 
    // A sleep function to keep the api from timing out
    Utilities.sleep(1000);

  });
  if (ret.length) {
    return ret;
  }
  return [''];
}
