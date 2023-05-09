const container = document.querySelector('.container');
const couches = document.querySelectorAll('.row .ic_couch:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

const moviesContainer = document.querySelector('.movies-container');
const movieElements = moviesContainer.querySelectorAll('.movie');
let selectedMoviePrice = null;

movieElements.forEach(movie => {
  movie.addEventListener('click', () => {
    selectedMoviePrice = parseInt(movie.dataset.price);
    console.log(`Selected movie price: ${selectedMoviePrice}`);
    updateSelectedCount(); // Update the count and total when a new movie is selected
  });
});

// Updating total price and seats count 
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .ic_couch.selected');
  const selectedSeatsCount = selectedSeats.length;

  const seatsIndex = [...selectedSeats].map(function (ic_couch){
    return [...couches].indexOf(ic_couch);
  }) 

  localStorage.setItem ('selectedSeats', JSON.stringify(seatsIndex));

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * selectedMoviePrice;
}

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('ic_couch') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
  }

  updateSelectedCount();
});

