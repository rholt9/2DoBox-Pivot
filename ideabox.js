function append(idea) {
  $('ul').prepend(
    `<section class="idea-section">
      <button class='delete-button buttons'>delete</button>
      <li class='idea-title' contenteditable>${idea.title}</li>
      <li class='idea-body' contenteditable>${idea.body}</li>
      <button class='up-vote buttons'>up</button>
      <button class='down-vote buttons'>down</button>
      <p>quality: ${idea.quality}</p>
    </section>`
  )}

function Idea (title, body) {
  this.title = title
  this.body = body
  this.id = Date.now()
  this.quality = 'swill'
}

function grabIdea () {
  var title = $('.title-input').val()
  var body = $('.body-input').val()
  var idea = new Idea(title, body)
  append(idea)
  console.log(idea);
}

$('.save-button').on('click', function() {
  grabIdea()
  clearFields()
})

function clearFields() {
  $('.title-input').val('')
  $('.body-input').val('')
}

$('.bottom-container').on('click', '.delete-button', function (e){
  $(e.target).closest('.idea-section').remove();
});

function upVote(quality) {
  switch(quality) {
    case 'swill':
      return 'plausible'
    case 'plausible':
      return 'genius'
    default:
      return 'genius'
  }
}

$('.bottom-container').on('click', '.up-vote', function(e) {
  $(e.target).closest('.idea-section').upVote(quality)
})
