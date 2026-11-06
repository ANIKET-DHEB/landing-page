const enquiryModal = document.getElementById("enquiryModal");
const closeEnquiry = document.getElementById("closeEnquiry");

const openEnquiryButtons = document.querySelectorAll(".open-enquiry");
openEnquiryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        enquiryModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

closeEnquiry.addEventListener("click", () => {
    enquiryModal.classList.remove("active");
    document.body.style.overflow = "auto";
});


enquiryModal.addEventListener("click", (event) => {
    if (event.target === enquiryModal) {
        enquiryModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        enquiryModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});
const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Thank you! Your enquiry has been submitted successfully.");

    enquiryForm.reset();

    enquiryModal.classList.remove("active");
    document.body.style.overflow = "auto";
});