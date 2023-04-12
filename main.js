function preLoad() {
    world_start= loadSound("world_start.wav");



    setPrites();
    MarioAnimation();
}


function setup() {
    canvas = createCanvas(1240,336);
    canvas.parent('canvas');

    initializeInSetup(mario);

    videoCreateCapture(VIDEO);
    vido.size(800,400);
    video.parent('gameConsole');
    
    poseNet = ml5.poseNet(video,modelLoaded);
    pose.on('pose', gotPoses);
}


function modelLoaded() {
    console.log('Modelo Carregado!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
    game();
}