window.addEventListener('keyup', e => {
  if (e.key == 'a') {
    document.body.classList.toggle('debug');
  }
});

let liked = false;
const likeButton = document.querySelector('.card__like');

likeButton.addEventListener('click', () => {
  if (liked == false) {
    like();
    likeButton.classList.add('liked');
    likeButton.classList.remove('not-liked');
    liked = true;
  } else {
    dislike();
    likeButton.classList.add('not-liked');
    likeButton.classList.remove('liked');
    liked = false;
  }
});

function like() {
  const likesTotalElement = document.querySelector('.card__likes-total');
  let likesTotalValue = parseInt(likesTotalElement.innerText);
  likesTotalElement.innerHTML = likesTotalValue + 1;
}

function dislike() {
  const likesTotalElement = document.querySelector('.card__likes-total');
  let likesTotalValue = parseInt(likesTotalElement.innerText);
  likesTotalElement.innerHTML = likesTotalValue - 1;
}
