function setup() {
    canvas = createCanvas(300,230);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fbq-E4b2M/model.json",modelLoaded);
}

function modelLoaded() {
    console.log(modelLoaded);
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify (video , gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("object_span").innerHTML = results[0].label;
        document.getElementById("accuracy_span").innerHTML = results[0].confidence.toFixed(3);
    }
}