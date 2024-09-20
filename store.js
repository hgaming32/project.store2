// Array of grocery items with prices in Kenyan Shillings
const groceryItems = [
    {name: parseFloat(prompt("what is the item you want to purchase")),
    price: 300 },
    {name: parseFloat(prompt("what is the second item you want to purchase")),
    price: 100 },
    {name: parseFloat(prompt("what is the third item you want to purchase")),
    price: 100 }
];

// Function to calculate total price
const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price, 0);
};

// Function to get user input for payment
const processPayment = () => {
    const total = calculateTotal(groceryItems);
    const userPayment = parseFloat(prompt(`The total is KES ${total}. How much do you want to pay?`));

    if (userPayment >= total) {
        const change = userPayment - total;
        alert(`Thank you! Your change is KES ${change}.`);
    } else {
        alert(`Sorry, that's not enough. You still owe KES ${(total - userPayment)}.`);
    }
};

// Start the payment process
processPayment();