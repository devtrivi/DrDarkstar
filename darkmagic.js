

// if you are getting 'ambiguous import' you are using default export and { module } at the same time. Pick one.
import  Doctor  from './drdarkstar.js'

// check becouliin for art assets
// here i use my own because, face it
// dr darkstar looks awesome


// js waits for images and events to be loaded
// before the fun starts
window.addEventListener('load', function(){
// point js to our canvas
const harddarkness = document.getElementById('darklight')
// instance of 2d drawing API
const inkblotmagic = harddark.getContext('2d')
// canvas size to keep vintage look and save memory
// you can play around with size but keep in mind ordinary phone and monitor resolutions
harddark.width = 700;
harddark.height = 700;
// all logic in our game wlll go through Game class
class Darkstar {
    constructor(width, height){
        // we convert these to class properties
        this.width = width
        this.height = height
        // Doctor expects Star as an argument
        // since we are calling it from within we can use 'this'
        // inside a class 'this' refers to this class obj
        this.doctor = new Doctor(this)
    }
    update(){ // will run for every animation frame
        // trigger all calculations that need to happen

    }
    // player draw requires context so we pass it as a prop
    draw(inkblotmagic){ // graphics ui and so on
this.doctor.draw(inkblotmagic)
    }
}

// since we are calling new on Darkstar class the constructor will be run and with it, new Doctor
const darkstar = new Darkstar(harddark.width, harddark.height)

console.log(darkstar)

function animate(){
    darkstar.draw(inkblotmagic)
    requestAnimationFrame(animate)
}
animate()
})