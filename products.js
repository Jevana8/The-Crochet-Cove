document.getElementById('addToCart').addEventListener('click', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Initialize as empty array if none exist
    let itemsAdded = false; // Flag to track if any items are added
    // Product 1: Christmas Special
    if (document.getElementById('select0').checked) {
        const quantity = document.getElementById('quantity-special').value;
        if (quantity > 0) {
            cartItems.push({
                name: "Christmas Special - Crochet Christmas Set",
                quantity: quantity,
                price: 9000
            });
            itemsAdded = true; // Set flag to true
        }
    }

    // Product 2: Baby Halter Crop Top and Shorts
    if (document.getElementById('select1').checked) {
        const quantity = document.getElementById('quantity1').value;
        if (quantity > 0) {
            cartItems.push({ //Global array
                name: "Baby Halter Crop Top and Shorts",
                quantity: quantity,
                price: 7150
            });
            itemsAdded = true; // Set flag to true
        }
    }

    // Product 3: Sofa Cover
    if (document.getElementById('select2').checked) {
        const quantity = document.getElementById('quantity2').value;
        if (quantity > 0) {
            cartItems.push({
                name: "Sofa Handle Cover",
                quantity: quantity,
                price: 3000 
            });
            itemsAdded = true; // Set flag to true
        }
    }

    // Product 4: Baby Halter Crop Top and Skirt Set
    if (document.getElementById('select3').checked) {
        const quantity = document.getElementById('quantity3').value;
        if (quantity > 0) {
            cartItems.push({
                name: "Baby Halter Crop Top and Skirt Set",
                quantity: quantity,
                price: 5000 
            });
            itemsAdded = true; // Set flag to true
        }
    }

    // Product 5: Breast Cancer Pins
    if (document.getElementById('select4').checked) {
        const quantity = document.getElementById('quantity4').value;
        if (quantity > 0) {
            cartItems.push({
                name: "Breast Cancer Pins",
                quantity: quantity,
                price: 600 
            });
            itemsAdded = true; // Set flag to true
        }
    }

    // Product 6: Heart Shaped Tassel Earrings
    if (document.getElementById('select5').checked) {
        const quantity = document.getElementById('quantity5').value;
        if (quantity > 0) {
            cartItems.push({
                name: "Heart Shaped Tassel Earrings",
                quantity: quantity,
                price: 2500 
            });
            itemsAdded = true; // Set flag to true
        }
    }

    // Product 7: Watermemlon Earrings
    if (document.getElementById('select6').checked) {
        const quantity = document.getElementById('quantity6').value;
        if (quantity > 0) {
            cartItems.push({
                name: "Watermemlon Earrings",
                quantity: quantity,
                price: 2500 
            });
            itemsAdded = true; // Set flag to true
        }
    }

    // Product 8: Pineapple Earrings
    if (document.getElementById('select7').checked) {
        const quantity = document.getElementById('quantity7').value;
        if (quantity > 0) {
            cartItems.push({
                name: "Pineapple Earrings",
                quantity: quantity,
                price: 2500 
            });
            itemsAdded = true; // Set flag to true
        }
    }

    // Product 9: Diamond Earrings
    if (document.getElementById('select8').checked) {
        const quantity = document.getElementById('quantity8').value;
        if (quantity > 0) {
            cartItems.push({
                name: "Diamond Earrings",
                quantity: quantity,
                price: 2500 
            });
            itemsAdded = true; // Set flag to true
        }
    }

    // Product 10: Granny Square Teddy
    if (document.getElementById('select9').checked) {
        const quantity = document.getElementById('quantity9').value;
        if (quantity > 0) {
            cartItems.push({
                name: "Granny Square Teddy",
                quantity: quantity,
                price: 3000 
            });
            itemsAdded = true; // Set flag to true
        }
    }

    // Product 11: Bikini
    if (document.getElementById('select10').checked) {
        const quantity = document.getElementById('quantity10').value;
        if (quantity > 0) {
            cartItems.push({
                name: "Bikini",
                quantity: quantity,
                price: 10500 
            });
            itemsAdded = true; // Set flag to true
        }
    }

    // Product 12: V-Shaped Scarf
    if (document.getElementById('select11').checked) {
        const quantity = document.getElementById('quantity11').value;
        if (quantity > 0) {
            cartItems.push({
                name: "V-Shaped Scarf",
                quantity: quantity,
                price: 6000 
            });
            itemsAdded = true; // Set flag to true
        }
    }

    // Product 13: Lion Keychain
    if (document.getElementById('select12').checked) {
        const quantity = document.getElementById('quantity12').value;
        if (quantity > 0) {
            cartItems.push({
                name: "Lion Keychain",
                quantity: quantity,
                price: 2000 
            });
            itemsAdded = true; // Set flag to true
        }
    }

    if (itemsAdded) {
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update localStorage with new cart
        displayCart(cartItems); // Display the updated cart
    } else {
        alert('Please select at least one product and quantity to add to the cart.');
    }
});

// Function to display the cart
function displayCart(cartItems) {
    let cartSummary = "Your Cart:\n\n";
    let total = 0;

    cartItems.forEach(item => {
        cartSummary += `${item.name} - Quantity: ${item.quantity} - Price: $JMD${item.price * item.quantity}\n`;
        total += item.price * item.quantity;
    });

    cartSummary += `\nTotal: $JMD${total}`;
    alert(cartSummary); // Display cart summary in an alert box
}






// Checkout Button Event Listener
document.getElementById('checkoutButton').addEventListener('click', function () {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Ensure cartItems is initialized

    if (cartItems.length === 0) {
        alert("Your cart is empty. Please add some items before proceeding to checkout.");
        return; // Exit if cart is empty
    }

    const taxRate = 0.15; // 15% tax rate
    const discountThreshold = 10000; // Discount applied for orders over 10,000 JMD
    const discountRate = 0.10; // 10% discount

    let subtotal = 0;
    let taxAmount = 0;
    let discountAmount = 0;
    let total = 0;

    // Calculate Subtotal
    cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    // Calculate Tax
    taxAmount = subtotal * taxRate;

    // Calculate Discount
    if (subtotal > discountThreshold) {
        discountAmount = subtotal * discountRate;
    }

    // Calculate Total
    total = subtotal + taxAmount - discountAmount;

    // Store calculation details in localStorage
    localStorage.setItem('subtotal', subtotal.toFixed(2));
    localStorage.setItem('taxAmount', taxAmount.toFixed(2));
    localStorage.setItem('discountAmount', discountAmount.toFixed(2));
    localStorage.setItem('total', total.toFixed(2));

    // Redirect to the invoice page
    window.location.href = 'invoice.html'; // This should work if cartItems is defined
});

// Cancel Button Event Listener
document.getElementById('cancelButton').addEventListener('click', function() {
    // Clear cart items from localStorage
    localStorage.removeItem('cartItems'); // Remove cart items
    localStorage.removeItem('subtotal'); // Remove subtotal
    localStorage.removeItem('taxAmount'); // Remove tax amount
    localStorage.removeItem('discountAmount'); // Remove discount amount
    localStorage.removeItem('total'); // Remove total

    alert("Your cart has been cleared."); // Notify user that the cart has been cleared
});

// Exit Button Event Listener
document.getElementById('exitButton').addEventListener('click', function() {
    window.location.href = 'about.html'; // Redirect to the About page
});



// Function to change the main product image when a thumbnail is clicked
function changeImage(mainImageId, imageUrl) {
    document.getElementById(mainImageId).src = imageUrl;
}



