
// Registration page validation logic
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    
    
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

         // Contact Number
         const contact = document.querySelector("#contact").value.trim();
         const contactRegex = /^[0-9]{10}$/;
         if (!contactRegex.test(contact)) {
             alert("Please enter a valid 10-digit contact number.");
             valid = false;
         }

         // College Name
        const college = document.querySelector("#college").value.trim();
        if (college === "") {
            alert("College name is required.");
            valid = false;
        }

        // Department
        const department = document.querySelector("#department").value.trim();
        if (department === "") {
            alert("Department is required.");
            valid = false;
        }

        // Year
        const year = document.querySelector("#year").value;
        if (year === "") {
            alert("Please select your academic year.");
            valid = false;
        }

        // RBT Number
        const rbt = document.querySelector("#rbt").value.trim();
        if (rbt === "") {
            alert("RBT Number is required.");
            valid = false;
        }

    

        // If any validation fails, prevent the form submission
        if (!valid) {
            event.preventDefault();
        }
    });
});
