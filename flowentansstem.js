// No request form – only passive enhancements (links are now allowed)
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Verify no form elements exist
    const forms = document.querySelectorAll('form, input, textarea, button, select');
    if (forms.length === 0) {
      console.log('✅ No request form or inputs – matches "only displayed message alert"');
    }

