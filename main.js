// main page

const container = document.querySelector('.container');
const couches = document.querySelectorAll('.row .ic_couch:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const moviesContainer = document.querySelector('.movies-container');
const movieElements = moviesContainer.querySelectorAll('.movie');
const movieElement = document.getElementById('movie');

let selectedMoviePrice = null;

// Saving selected movie index and the price in Local Storage
function saveMovieData (movieName, selectedMoviePrice, index) {
    localStorage.setItem('selectedMovie', movieName);
    localStorage.setItem('selectedMoviePrice', selectedMoviePrice);
    localStorage.setItem('index', index);

    // Update the movie name in the UI
    movieElement.innerText = movieName;
    
    console.log(`Selected movie: ${movieName}`);
    console.log(`Selected movie price: ${selectedMoviePrice}`);
    console.log(`Movie index: ${index}`);
}

movieElements.forEach((movie, index) => {
  movie.addEventListener('click', () => {
    const movieName = movie.dataset.name;
    selectedMoviePrice = parseInt(movie.dataset.price);
    saveMovieData(movieName, selectedMoviePrice, index);
    updateSelectedCount(); 
  });
});

//Updating count and total price of selected seats, and store the data in Local Storage
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .ic_couch.selected');
    const selectedSeatsCount = selectedSeats.length;
    const selectedSeatsElement = document.getElementById('selected-seats');
  
    const seatsArray = Array.from(selectedSeats).map(seat => {
      const row = seat.parentElement.dataset.row;
      const seatNumber = seat.dataset.seat;
      return { row, seatNumber };
    });
  
    const seatsDisplayArray = seatsArray.map(seat => `${seat.row}: ${seat.seatNumber}`);
  
    const seatsIndex = [...selectedSeats].map(ic_couch => {
      return [...couches].indexOf(ic_couch);
    });
  
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    localStorage.setItem('selectedSeatsArray', JSON.stringify(seatsArray));
  
    selectedSeatsElement.innerText = seatsDisplayArray.join(', ');
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * selectedMoviePrice;
}

//Retrieving data from local storage and updates the UI accordingly when the page is loaded
function updateUI() {
    const selectedSeatsIndexes = JSON.parse(localStorage.getItem('selectedSeats'));
    const seats = document.querySelectorAll('.row .ic_couch');
  
    if (selectedSeatsIndexes !== null && selectedSeatsIndexes.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeatsIndexes.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
    }
  
    const selectedMovieIndex = localStorage.getItem('index');
    const selectedMovie = localStorage.getItem('selectedMovie');
  
    if (selectedMovie !== null) {
      movieElement.innerText = selectedMovie;
    }
  
    if (selectedMovieIndex !== null) {
      movieElements[selectedMovieIndex].click();
    }
  }
  
container.addEventListener('click', (e) => {
 if (
    e.target.classList.contains("ic_couch") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

//Clearing all selected elements
const clearButton = document.getElementById('clear-selection');

clearButton.addEventListener('click', clearSelection);

function clearSelection() {
    // Deselect all selected seats
    const selectedSeats = document.querySelectorAll('.row .ic_couch.selected');
    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
    });

    // Reset selected movie
    const movieElement = document.getElementById('movie');
    movieElement.innerText = 'No movie selected';

    // Clear selected seat numbers
    const selectedSeatsElement = document.getElementById('selected-seats');
    selectedSeatsElement.innerText = '';

    // Clear selection from Local Storage
    localStorage.removeItem('selectedSeats');
    localStorage.removeItem('selectedSeatsArray');
    localStorage.removeItem('selectedMovie');
    localStorage.removeItem('selectedMoviePrice');
    localStorage.removeItem('index');

    // Reset count and total price
    count.innerText = 0;
    total.innerText = 0;
}

updateUI();

// checkout page

document.getElementById('checkout').addEventListener('click', function() {
  window.location.href = "checkout.html";
});