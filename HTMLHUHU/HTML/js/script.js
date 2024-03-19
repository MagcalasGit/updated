document.addEventListener('DOMContentLoaded', function() {
    var aboutLink = document.querySelector('a[href="#Mgallery"]');
    if(aboutLink) {
        aboutLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            var aboutSection = document.getElementById('gallery');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

