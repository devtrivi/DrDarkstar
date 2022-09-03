


import  Doctor  from './dr.js'








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
    }
    update(){ 
        this.doctor.update()

    }
    
    draw(inkblotmagic){ 
this.doctor.draw(inkblotmagic)
    }
}


const darkstar = new Darkstar(harddark.width, harddark.height)

console.log(darkstar)

function animate(){
    inkblotmagic.clearRect(0,0,harddark.width, harddark.height)
    //darkstar.update()
    darkstar.draw(inkblotmagic)
    requestAnimationFrame(animate)
}
animate()
})