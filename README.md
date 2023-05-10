# Cinema-Seats-Reservation
This project is a user-friendly movie seat booking simulator. It offers a selection of movies and a graphical representation of the cinema layout, 
with different seat statuses color-coded.

Key JavaScript features showcased in this project include:
1. DOM Manipulation: JS is used to interact with and manipulate the Document Object Model (DOM), which is a representation of the webpage. 
DOM Manipulation is used to dynamically update the HTML content such as seat and movie selections, and the corresponding total ticket price. 
It's also used to change the color of selected and occupied seats.

2. Event Handling: The project uses JavaScript event handling to listen for and respond to user interactions. 
Event listeners are attached to the movie and seat elements. 
When a movie or seat is clicked, the corresponding event handler is invoked. This leads to updates in the selection and the total price.

3. Local Storage: JavaScript's Web Storage API is used to persist user data across browser sessions. 
In this case, the selected movie, its price, and the selected seats are stored in the user's browser. 
This information is then retrieved and used to restore the user's selection when the page is reloaded.
