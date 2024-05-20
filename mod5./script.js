// scripts.js

// Function to load the menu
function loadMenu() {
    const menuItems = [
        { name: "Espresso", price: "$2.00" },
        { name: "Cappuccino", price: "$3.00" },
        { name: "Latte", price: "$3.50" },
        { name: "Mocha", price: "$4.00" },
        { name: "Tea", price: "$1.50" }
    ];

    let menuDiv = document.getElementById('menuItems');
    menuDiv.innerHTML = ""; // Clear existing menu items

    menuItems.forEach(item => {
        let menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
        menuItemDiv.innerHTML = `<strong>${item.name}</strong> - ${item.price}`;
        menuDiv.appendChild(menuItemDiv);
    });
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simple form validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Here you would normally send the form data to the server
    console.log("Form submitted!", { name, email, message });
    alert("Thank you for your message, " + name + "!");

    // Clear the form
    document.getElementById('contactForm').reset();
}
