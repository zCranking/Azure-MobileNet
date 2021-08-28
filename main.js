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

function take_snapshot(){
    Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML = '<img id="mintbox" src="' + data_uri + '">';
    });
}

//ml5 version
console.log("ml5 version", ml5.version);

// var classifier
classifier = ml5.imageClassifier('MobileNet', modelLoaded);
// function model
function modelLoaded(){
    console.log("model loaded");
}
//function check
function check(){
    img = document.getElementById("mintbox");
    classifier.classify(img, gotResult);
    
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}