import { Kneel, Roll } from './drStates.js'



export default class Doctor {
    constructor(darkstar) {
        this.darkstar = darkstar
        this.spritewidth = 88
        this.spriteheight = 88
        this.width = 88
        this.height = 88
        this.x = 0
        this.y = this.darkstar.height - this.height
        this.vy = 0 //velocity y
        this.weight = 1
        this.image = drdarkstarpng
        this.frameX = 0
        this.frameY = 0
        this.speed = 0
        this.maxSpeed = 11
        this.minFrame = 0
        this.maxFrame = 150
        this.states = [new Kneel(this),new Roll(this)]
        this.currentState = this.states[0]
        this.currentState.enter()

    }
    update(strings) {
        this.currentState.subtleStrings(strings)
        // horizontal movement
        this.x += this.speed
        if (strings.includes('a')) this.speed = -this.maxSpeed
        else if (strings.includes('s')) this.speed = 0
        else if (strings.includes('d')) this.speed = this.maxSpeed
        else if (strings.includes('d')) this.x++
        else if (strings.includes('j')) this.x++
        else if (strings.includes('k')) this.x++
        else if (strings.includes('l')) this.x++
        else if (strings.includes('u')) this.x++
        else if (strings.includes('i')) this.x++
        else if (strings.includes('o')) this.x++
        else this.speed = 0
        if (this.x < 0) this.x = 0
        if (this.x > this.darkstar.width - this.width) this.x = this.darkstar.width - this.width
        // vertical movement
        //if (strings.includes('w') && this.onGround()) this.vy -= 33
        this.y += this.vy
        if (!this.onGround() ) this.vy += this.weight
        else this.vy = 0

    }
    draw(inkblotmagic) {
     inkblotmagic.drawImage(this.image,this.frameX * this. width, this.frameY * this.height,this.width,this.height, this.x, this.y, this.width, this.height)
    }
    onGround(){
        return this.y >= this.darkstar.height - this.height
    }
    setState(state){
        this.currentState = this.states[state]
        this.currentState.enter() 
    }
}