$(function functionName() {

  $('.text-form__add-button')[0].addEventListener('click', addNewUserText);

});

function addNewUserText () {

  userText = $('.text-input__field').val();
  userDate = $('.date-input__field').val();

  $('.text-input__field,.date-input__field').val('');

  let newUserPost = new UserPost (userText, userDate);

  console.log(newUserPost);
  $('text-form__show-text-group').
}

function UserPost ( userText, userDate ) {
  this.userText = userText,
  this.userDate = userDate
}
