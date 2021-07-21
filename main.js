Webcam.set({
    width: 410,
    height: 400,
    image_format: 'png',
    png_quality: 90,
    
    constraints: {
        facingMode: "environment"
    }
});
camera = document.getElementById("camera");

Webcam.attach('#camera');