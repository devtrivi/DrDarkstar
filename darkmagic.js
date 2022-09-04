import  Doctor  from './dr/dr.js'
import { SubtleStrings } from './dr/subtleStrings.js'


window.addEventListener('load', function(){

const harddarkness = document.getElementById('darklight')
const inkblotmagic = harddark.getContext('2d')


harddark.width = 700;
harddark.height = 700;

class Darkstar {
    constructor(width, height){
        
        this.width = width
        this.height = height
        this.doctor = new Doctor(this)
        this.strings = new SubtleStrings()
            }
    update(deltaTime){ 
        this.doctor.update(this.strings.activeSubtleStrings,deltaTime)

    }
        draw(inkblotmagic){ 
this.doctor.draw(inkblotmagic)
    }
}


const darkstar = new Darkstar(harddark.width, harddark.height)
const lastTime = 0
console.log(darkstar)

function animate(timeStamp){
    const deltaTime = 5
    //console.log('timeStamp : ',timeStamp, ' - lastTime : ',lastTime)
    //console.log(typeof(timeStamp))
    //console.log(typeof(lastTime))
    //lastTime = timeStamp
    inkblotmagic.clearRect(0,0,harddark.width, harddark.height)
    darkstar.update(deltaTime)
    darkstar.draw(inkblotmagic)
    requestAnimationFrame(animate)
}
animate(1)
})