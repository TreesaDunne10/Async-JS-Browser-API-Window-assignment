function fetchUserNames() {
    // Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // Configure the request: GET method, the API endpoint, and async=true
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    // Define the callback function to handle the response
    xhr.onload = function() {
        // Check if the request was successful (status code 200)
        if (xhr.status == 200) {
            // Parse the JSON response into a JavaScript array
            let users = JSON.parse(xhr.responseText);

            // Iterate over the array and log each user's name to the console
            users.forEach(user => {
                console.log(user.name);
            });
        } else {
            console.error("Failed to fetch data. Status: " + xhr.status);
        }
    };

    // Handle any errors that occur during the request
    xhr.onerror = function() {
        console.error("Request error occurred.");
    };

    // Send the request to the server
    xhr.send();
}

// Call the function to fetch user names and log them to the console
fetchUserNames();
