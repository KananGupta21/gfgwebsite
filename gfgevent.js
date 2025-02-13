// Load and display team information from the XML file
function loadTeam() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "highlights.xml", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const xmlDoc = xhr.responseXML;
            const teamSection = document.getElementById("team");
            
            // Parse the XML data
            const coordinator = xmlDoc.getElementsByTagName("coordinator")[0];
            const president = xmlDoc.getElementsByTagName("president")[0];
            const vicePresident = xmlDoc.getElementsByTagName("vicePresident")[0];

            teamSection.innerHTML = `
                <h2>Meet the Team</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${coordinator.getElementsByTagName("name")[0].textContent}</td>
                            <td>${coordinator.getElementsByTagName("designation")[0].textContent}</td>
                            <td>${coordinator.getElementsByTagName("contact")[0].textContent}</td>
                        </tr>
                        <tr>
                            <td>${president.getElementsByTagName("name")[0].textContent}</td>
                            <td>${president.getElementsByTagName("designation")[0].textContent}</td>
                            <td>${president.getElementsByTagName("contact")[0].textContent}</td>
                        </tr>
                        <tr>
                            <td>${vicePresident.getElementsByTagName("name")[0].textContent}</td>
                            <td>${vicePresident.getElementsByTagName("designation")[0].textContent}</td>
                            <td>${vicePresident.getElementsByTagName("contact")[0].textContent}</td>
                        </tr>
                    </tbody>
                </table>
            `;
        }
    };
    xhr.send();
}

// Registration page validation logic
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const passwordInput = document.querySelector("#password");
    const confirmPasswordInput = document.querySelector("#confirm-password");
    
    form.addEventListener("submit", (event) => {
        let valid = true;

        // Full Name validation
        const fullName = document.querySelector("#fullname").value.trim();
        if (fullName === "") {
            alert("Full Name is required.");
            valid = false;
        }

        // Email validation
        const email = document.querySelector("#email").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            valid = false;
        }

        // Password validation
        const password = passwordInput.value.trim();
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            valid = false;
        }

        // Confirm Password validation
        const confirmPassword = confirmPasswordInput.value.trim();
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            valid = false;
        }

        // If any validation fails, prevent the form submission
        if (!valid) {
            event.preventDefault();
        }
    });

    // Add event listener to password inputs for live feedback
    confirmPasswordInput.addEventListener("input", () => {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.style.borderColor = "red";
        } else {
            confirmPasswordInput.style.borderColor = "green";
        }
    });
});
