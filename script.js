function scrollDown() {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thanks for reaching out, Prashant will get back to you soon!');
    this.reset();
});
