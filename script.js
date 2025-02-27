const stars = document.querySelectorAll('.star');
const submitButton = document.getElementById('submit-rating');
const avgRatingText = document.getElementById('avg-rating');
const userRatingText = document.getElementById('user-rating');

let userRating = 0;
let totalRatings = 0;
let totalScore = 0;

// Handle click on a star
stars.forEach(star => {
  star.addEventListener('click', () => {
    userRating = parseInt(star.getAttribute('data-value'));
    updateStars();
  });
});

// Update the display of stars
function updateStars() {
  stars.forEach(star => {
    if (parseInt(star.getAttribute('data-value')) <= userRating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });

  userRatingText.textContent = userRating;
}

// Submit rating
submitButton.addEventListener('click', () => {
  if (userRating > 0) {
    totalRatings++;
    totalScore += userRating;

    const avgRating = (totalScore / totalRatings).toFixed(1);
    avgRatingText.textContent = avgRating;
  } else {
    alert('Please select a rating! 🌟');
  }
});