Nose_X = 0;
Nose_Y = 0;
Lipstick_Image = "";

function preload() {
    Lipstick_Image = loadImage("l1.png");
}

function setup() {
    canvas = createCanvas(480, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 480);
    video.hide();
    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", GotPoses);
}

function ModelLoaded() {
    console.log("poseNet is initialized");
}

function GotPoses(results) {
    console.log(results);
    Nose_X = results[0].pose.nose.x;
    Nose_Y = results[0].pose.nose.x;
    console.log("Nose x = " + Nose_X);
    console.log("Nose y = " + Nose_Y);
}

function draw() {
    image(video, 0, 0, 480, 480);
    image(Lipstick_Image, Nose_X - 22, Nose_Y + 43, 50, 40);
}

function OnClick() {
    save("FilterImage.png");
}
