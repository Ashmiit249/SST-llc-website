/* Contact form: opens the visitor's email client with the message pre-filled.
   No backend, no third-party services. */
(function () {
  'use strict';

  var year = document.getElementById('year');
  if (year) { year.textContent = String(new Date().getFullYear()); }

  var form = document.getElementById('enquiry-form');
  var note = document.getElementById('form-note');
  if (!form) { return; }

  function enquiry() {
    return {
      name: form.elements.name.value.trim(),
      phone: form.elements.phone.value.trim(),
      message: form.elements.message.value.trim()
    };
  }

  var waButton = document.getElementById('wa-send');
  if (waButton) {
    waButton.addEventListener('click', function () {
      if (!form.reportValidity()) { return; }
      var e = enquiry();
      var text = 'Hello Sanjit Suri Trading. ' + e.message + '\n\nName: ' + e.name + '\nPhone: ' + e.phone;
      window.open('https://wa.me/971558827290?text=' + encodeURIComponent(text), '_blank', 'noopener');
    });
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var e = enquiry();
    var name = e.name, phone = e.phone, message = e.message;

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
