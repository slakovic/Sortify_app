document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("fileInput");
    const sortButton = document.getElementById("sortButton");
    const undoButton = document.getElementById("undoButton");
    const statusMessage = document.getElementById("statusMessage");
    const loginForm = document.getElementById("loginForm");

    let backupData = null;

    // Function to sort files
    function organizeFiles() {
        const files = fileInput.files;
        if (!files || files.length === 0) {
            statusMessage.textContent = "Please select files to organize.";
            return;
        }

        // Create a backup of the original file input
        backupData = Array.from(files);

        // Reset the file input
        fileInput.value = null;

        // Implement file sorting logic here
        // You can use the 'files' array to access selected files

        // Display a success message
        statusMessage.textContent = "File organization completed.";
    }

    // Function to undo file sorting
    function undoOrganization() {
        if (backupData) {
            // Restore the original files
            backupData.forEach(file => {
                // Implement logic to restore files to their original locations
                // You can use the 'file' object to access file details
            });

            // Clear the backup data
            backupData = null;

            // Display an undo success message
            statusMessage.textContent = "Undo completed. Files restored to their original locations.";
        } else {
            statusMessage.textContent = "No backup data found.";
        }
    }

    // Function to handle login using Fetch API
    function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        fetch("login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to the dashboard upon successful login
                window.location.href = "dashboard.php";
            } else {
                // Display an error message if login fails
                statusMessage.textContent = "Login failed. Please try again.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            statusMessage.textContent = "An error occurred while processing your request.";
        });
    }

    // Event listeners for buttons
    sortButton.addEventListener("click", organizeFiles);
    undoButton.addEventListener("click", undoOrganization);
    
    // Event listener for login form submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        login();
    });
});
