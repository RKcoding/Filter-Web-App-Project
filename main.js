function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(480, 480);
    video.center();
    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", GotPoses);
}

function ModelLoaded() {
    console.log("poseNet is initialized");
}

function GotPoses(results) {
    console.log(results);
    console.log("Nose x = " + results[0].pose.nose.x);
    console.log("Nose y = " + results[0].pose.nose.y);
}

function draw() {

}

function OnClick() {
    save("FilterImage.png");
}
