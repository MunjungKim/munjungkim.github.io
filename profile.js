// Assembles the email address at runtime so it is not sitting in the markup
// for scrapers. The <noscript> fallback in the markup covers JS-off visitors.
(function () {
  var user = 'qns8tc';
  var host = ['virginia', 'edu'].join('.');
  var address = user + '@' + host;

  var link = document.querySelector('.email-address');
  if (!link) return;

  link.textContent = address;
  link.href = 'mailto:' + address;
  link.hidden = false;

  // Close the disclosure when clicking outside it or pressing Escape.
  var disclosures = document.querySelectorAll('.email-disclosure, .name-disclosure');

  document.addEventListener('click', function (event) {
    disclosures.forEach(function (details) {
      if (details.open && !details.contains(event.target)) {
        details.open = false;
      }
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    disclosures.forEach(function (details) {
      details.open = false;
    });
  });
})();
