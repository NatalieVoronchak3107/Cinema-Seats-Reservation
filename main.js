/*const container = document.querySelector(".container");
const couches = document.querySelectorAll(".row .ic_couch:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const moviesContainer = document.querySelector(".movies-container");
const movieElements = moviesContainer.querySelectorAll(".movie");

let selectedMoviePrice = null;

function saveMovieData(movieName, selectedMoviePrice, index) {
  localStorage.setItem("selectedMovie", movieName);
  localStorage.setItem("selectedMoviePrice", selectedMoviePrice);
  localStorage.setItem("index", index);
  console.log(`Selected movie: ${movieName}`);
  console.log(`Selected movie price: ${selectedMoviePrice}`);
  console.log(`Movie index: ${index}`);
}

movieElements.forEach((movie, index) => {
  movie.addEventListener("click", () => {
    const movieName = movie.dataset.name;
    selectedMoviePrice = parseInt(movie.dataset.price);
    saveMovieData(movieName, selectedMoviePrice, index);
    updateSelectedCount();
  });
});

//Updating count and total price of selected seats, and store the data in Local Storage
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .ic_couch.selected");
  const selectedSeatsCount = selectedSeats.length;
  const selectedSeatsElement = document.getElementById("selected-seats");

  const seatsArray = Array.from(selectedSeats).map((seat) => {
    const row = seat.parentElement.dataset.row;
    const seatNumber = seat.dataset.seat;
    return { row, seatNumber };
  });

  const seatsDisplayArray = seatsArray.map(
    (seat) => `${seat.row}: ${seat.seatNumber}`
  );

  const seatsIndex = [...selectedSeats].map((ic_couch) => {
    return [...couches].indexOf(ic_couch);
  });

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  localStorage.setItem("selectedSeatsArray", JSON.stringify(seatsArray));

  selectedSeatsElement.innerText = seatsDisplayArray.join(", ");
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * selectedMoviePrice;
}

function updateUI() {
  const selectedSeatsIndexes = JSON.parse(
    localStorage.getItem("selectedSeats")
  );
  const seats = document.querySelectorAll(".row .ic_couch");

  if (selectedSeatsIndexes !== null && selectedSeatsIndexes.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeatsIndexes.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("index");
  const selectedMovie = localStorage.getItem("selectedMovie");
  const movieElement = document.getElementById("movie");

  if (selectedMovie !== null) {
    movieElement.innerText = selectedMovie;
  }

  if (selectedMovieIndex !== null) {
    movieElements[selectedMovieIndex].click();
  }
}
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("ic_couch") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

updateUI(); */

const container = document.querySelector('.container');
const couches = document.querySelectorAll('.row .ic_couch:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const moviesContainer = document.querySelector('.movies-container');
const movieElements = moviesContainer.querySelectorAll('.movie');
const movieElement = document.getElementById('movie');

let selectedMoviePrice = null;

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

updateUI();

