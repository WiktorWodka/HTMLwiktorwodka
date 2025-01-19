document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    let index = 0;
    const images = gallery.querySelectorAll('img');

    images.forEach((img, i) => {
        img.style.display = (i === 0) ? 'block' : 'none';
    });

    function showImage(idx) {
        images.forEach((img, i) => {
            img.style.display = (i === idx) ? 'block' : 'none';
        });
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    }

    setInterval(nextImage, 8000); 

    window.nextImage = nextImage;
    window.prevImage = prevImage;
});

