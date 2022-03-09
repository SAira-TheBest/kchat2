status1 =""
img =""
function setup()
{
    canvas = createCanvas(640,420)
    canvas.center()

    objectDetector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function modelLoaded(){
    console.log("Model loaded :)")
    status1 = true
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results){
 
    if(error){
        console.error(error);
    }
    console.log(results)
    Objects = results;
}

function preload()
{
    img = loadImage("USE THIS TOOO.jpg")

}