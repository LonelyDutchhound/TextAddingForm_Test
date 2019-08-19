$(function functionName() {

  $('.text-form__add-button')[0].addEventListener('click', addPost);

});

function addPost () {
 if ( $('.text-input__field').val() !== "" && $('.date-input__field').val() !== "") {
    userText = $('.text-input__field').val();
    userDate = $('.date-input__field').val();

    $('.text-input__field,.date-input__field').val('');

    let newUserPost = new UserPost (userText, userDate);

    $('.text-form__show-text-group').prepend(newUserPost.createPost());
  }
};

function UserPost ( userText, userDate ) {
  this.userText = userText,
  this.userDate = userDate,
  this.createPost = function () {
    const checkBox = '<div class="user-post__checkbox"><input type="checkbox" id="' + this.userDate + '"></div>';
    let postString = '<div class="user-post_text"><p><i>' + this.userDate + '</i><br>' + this.userText + '</p></div>';
    let postHtml = '<div class="user-post__block">' + checkBox + postString + '</div>'
    return postHtml;
  }
};
