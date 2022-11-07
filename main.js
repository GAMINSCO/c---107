function start() {
    navigator.mediaDevices.getUserMedia( {audio:true} );
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/85i0xGWRy/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, result) {

}