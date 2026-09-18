/* Contact form: opens the visitor's email client with the message pre-filled.
   No backend, no third-party services. */
(function () {
  'use strict';

  var year = document.getElementById('year');
  if (year) { year.textContent = String(new Date().getFullYear()); }

  var form = document.getElementById('enquiry-form');
  var note = document.getElementById('form-note');
  if (!form) { return; }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = form.elements.name.value.trim();
    var phone = form.elements.phone.value.trim();
    var message = form.elements.message.value.trim();

    var subject = 'Tyre enquiry' + (name ? ' from ' + name : '');
    var body = 'Name: ' + name + '\nPhone: ' + phone + '\n\n' + message + '\n';

    window.location.href = 'mailto:wxy7@hotmail.com' +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    if (note) {
      note.hidden = false;
      note.scrollIntoView({ block: 'nearest' });
    }
  });
})();
