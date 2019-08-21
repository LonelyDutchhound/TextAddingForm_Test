$(() => {
  $('.text-form__add-button')[0].addEventListener('click', addPost);
  $('.text-form__add-group').keyup(function() {
    if (event.keyCode === 13) addPost();
    });
});

function addPost() {
  const $textfield = $('.text-input__field');
  const $datefield = $('.date-input__field');

  if ($textfield.val() && $datefield.val()) {
    const userText = $textfield.val();
    const userDate = $datefield.val();
    let newUserPost = new UserPost(userText, userDate);

    newUserPost.createDateContainer();
    newUserPost.createPost();

    $('.text-input__field,.date-input__field').val('');
    $('.text-form__show-text-group')[0].addEventListener('change', sortPosts);
  } else {
    $('.preq_error').addClass('show')
  }
};

function UserPost(userText, userDate) {
  this.userText = userText,
    this.userDate = userDate.substring(0, 10) + ' ' + userDate.substring(11),
    this.uniqId = userDate.split('-').join('').split(':').join('');

  this.createDateContainer = () => {
    if ($('.preq_error').length) $('.preq_error').removeClass('show');
    if (!$(`.n${this.uniqId.substring(0, 8)}`).length)
      $('.text-form__show-text-group').prepend(`
      <div class="user-post__date-block  n${this.uniqId.substring(0, 8)}">
        <p class="block-date">Post from ${this.userDate}</p>
      </div>`);
  };

  this.createPost = () => {
    $(`.n${this.uniqId.substring(0, 8)}`).append(`
      <div class="user-post__block  n${this.uniqId}">
      </div>`);
    $(`.n${this.uniqId}`).prepend(`
      <div class="user-post__checkbox">
        <input type="checkbox" id="n${this.uniqId}">
      </div><div class="user-post__text">
        <p><em>${this.userDate}</em><br>${this.userText}</p>
      </div>`);
  };
};

function sortPosts(event) {
  const postId = event.target.id;
  $('.' + postId).toggleClass('selected');
};
