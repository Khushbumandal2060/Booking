var modal = document.getElementById("bookingModal");
var btns = document.querySelectorAll(".book-btn");
var span = document.getElementsByClassName("close")[0];

btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        var region = this.getAttribute("data-region");
        document.getElementById("bookingRegion").value = region;
        modal.style.display = "block";
    });
});

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Form submission handling
document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var region = document.getElementById("bookingRegion").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var guests = document.getElementById("bookingGuests").value;
    var name = document.getElementById("bookingName").value; // Get the value of the name field

    // Send the booking details to the backend server or display to the hotel manager
    var bookingDetails = "Region: " + region + "\nStart Date: " + startDate + "\nEnd Date: " + endDate + "\nGuests: " + guests + "\nName: " + name;
    console.log("Booking submitted for " + bookingDetails); // Log the booking details

    // Show notification alert with booking details
    alert("Hotel booked successfully with the following details:\n\n" + bookingDetails);

    modal.style.display = "none";
    this.reset();
});




function searchFunction() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var paragraphs = document.getElementById('content').getElementsByTagName('p');
    for (var i = 0; i < paragraphs.length; i++) {
        var text = paragraphs[i].textContent.toLowerCase();
        if (text.indexOf(input) > -1) {
            paragraphs[i].style.display = '';
        } else {
            paragraphs[i].style.display = 'none';
        }
    }
}
