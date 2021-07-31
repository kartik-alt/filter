function preload(){


}

function setup (){

    canvas=createCanvas(400,400)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose',gotposes)
    nosex=0;
    nosey=0;
    leftcheeks=0;
    rightcheeks=0;
}

function take_snapshot(){
 save("sasta_clown.png")

}

function draw() {
image(video,0,0,400,400);
fill("brown");
stroke("black")
circle(nosex,nosey,40);
fill("yellow");


}
function modelloaded(){
console.log('posenetloaded')

}

function gotposes(result){
console.log(result);

if(result.length>0){

    console.log("nose x = " +result[0].pose.nose.x);
    console.log("nose y = "+result[0].pose.nose.y );
    nosex=result[0].pose.nose.x;
    nosey=result[0].pose.nose.y;
    nosemustache=result[0].pose.x;
    nosemustacheleft=result[0].pose.y

    


}
}

