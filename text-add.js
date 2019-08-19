$(function functionName() {

  $('.text-form__add-button')[0].addEventListener('click', addPost);

});

function addPost () {
 if ( $('.text-input__field').val() !== "" && $('.date-input__field').val() !== "") {

    let userText = $('.text-input__field').val();
    let userDate = $('.date-input__field').val();

    $('.text-input__field,.date-input__field').val('');

    let newUserPost = new UserPost (userText, userDate);

    $('.text-form__show-text-group').prepend(newUserPost.createPost());

    $('input:checkbox')[0].addEventListener('change', sortPosts);
  }
};

function UserPost ( userText, userDate ) {
  this.userText = userText,
  this.userDate = userDate.substring(0, 10) + ' ' + userDate.substring(12),
  this.uniqId = userDate.split('-').join('').split(':').join('');
  this.createPost = function () {
    const checkBox = '<div class="user-post__checkbox"><input type="checkbox" id="n' + this.uniqId + '"></div>';
    let postString = '<div class="user-post_text"><p><i>' + this.userDate + '</i><br>' + this.userText + '</p></div>';
    let postHtml = '<div class="user-post__block  n' + this.uniqId +'">' + checkBox + postString + '</div>'
    return postHtml;
  }
};

function sortPosts() {
  let postId = window.event.target.id;
  $('.'+ postId).toggleClass('selected');

}
