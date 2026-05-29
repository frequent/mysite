// Forwards visitors who land on the homepage (svenfranck.eu) to Sven's campaign
// page, picking the version that matches their browser's language. If their
// language is not French, English or German, the French page is used.

(function () {
  var campaignByLanguage = {
    fr: "https://svenfranck.eu/projets/campagne.html",
    en: "https://svenfranck.eu/en/projects/campaign.html",
    de: "https://svenfranck.eu/de/projekte/kampagne.html"
  };

  // The visitor's preferred languages, most preferred first.
  var preferred = (navigator.languages && navigator.languages.length)
    ? navigator.languages
    : [navigator.language || ""];

  // French is the default if none of the visitor's languages match.
  var target = campaignByLanguage.fr;
  for (var i = 0; i < preferred.length; i += 1) {
    var code = preferred[i].slice(0, 2).toLowerCase();
    if (campaignByLanguage[code]) {
      target = campaignByLanguage[code];
      break;
    }
  }

  // Replace the page (rather than add to history) so the browser's Back button
  // skips this forwarding step instead of sending the visitor forward again.
  window.location.replace(target);
}());
