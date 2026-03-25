const model = document.querySelector('#eyeball');

function getOrbit(){
    console.log(`${model.getCameraOrbit()}`)
}

function setOrbit(orbit){
    model.cameraOrbit = orbit;
}