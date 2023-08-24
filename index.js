// Select all the buttons and elements you need
const minusButtons = document.querySelectorAll('.minus');
const addButtons = document.querySelectorAll('.add');
const likeButtons = document.querySelectorAll('.like');
const deleteButtons = document.querySelectorAll('.delete');
const quantities = document.querySelectorAll('.quantity');
const prices = document.querySelectorAll('#price');
const totalPrices = document.querySelectorAll('#total-price');

// Add event listeners for each button
for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener('click', () => {
        // Get the current quantity and price
        let quantity = parseInt(quantities[i].textContent);
        let price = parseInt(prices[i].textContent);
        
        // Decrease the quantity and update the element
        if (quantity > 1) {
            quantity--;
            quantities[i].textContent = quantity;
            totalPrices[i].textContent = quantity * price;
        }
    });
    
    addButtons[i].addEventListener('click', () => {
        // Get the current quantity and price
        let quantity = parseInt(quantities[i].textContent);
        let price = parseInt(prices[i].textContent);
        
        // Increase the quantity and update the element
        quantity++;
        quantities[i].textContent = quantity;
        totalPrices[i].textContent = quantity * price;
    });
    
    likeButtons[i].addEventListener('click', () => {
        // Toggle the "liked" class to change the button color
        likeButtons[i].classList.toggle('liked');
    });
    
    deleteButtons[i].addEventListener('click', () => {
        // Remove the entire item when the delete button is clicked
        const card = deleteButtons[i].closest('.card');
        card.remove();
    });
}
