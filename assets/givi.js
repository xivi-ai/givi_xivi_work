/* Shows the confirmation message after the whitepaper form redirects back with ?success=true */
(function () {
  if (location.search.indexOf('success=true') === -1) return;
  var note = document.getElementById('form-note');
  var form = document.getElementById('whitepaper-form');
  if (note) note.textContent = 'Thank you. We have your request and will be in touch.';
  if (form) form.hidden = true;
  var section = document.getElementById('partner');
  if (section && section.scrollIntoView) section.scrollIntoView();
})();
