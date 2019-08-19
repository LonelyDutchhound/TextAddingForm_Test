$(function functionName() {

  $('.text-form__add-button')[0].addEventListener('click', addNewUserText);

});

function addNewUserText () {
  let userText, userDate;

  userText = $('.text-input__field').val();
  userDate = $('.date-input__field').val();

  $('.text-input__field,.date-input__field').val('');

  console.log(userText, userDate);
}
