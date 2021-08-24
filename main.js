Webcam.set({
height:300,
width:350,
image_format:"png",
png_quality:99.9
});
camera=document.getElementById("cam");
Webcam.attach(camera);
function snapshot(){
    Webcam.snap(function(data_uri){ document.getElementById("result").innerHTML="<img  id='cam_result' src='"+data_uri+"'>"})
}
console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/70-pWbDqJ/model.json",uploadCheck)

function uploadCheck(){
    console.log("teachable Machine uploaded")
}
function check(){
    image=document.getElementById("cam_result");
    classifier.classify(image,gotResult)
}
function gotResult(error,results){
if (error){
    console.error(error);
}else{
    console.log(results);
    document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(4);
    document.getElementById("object_name").innerHTML=results[0].label
} 
}  