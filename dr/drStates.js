

const states = {
    idle:0,
    walk:1,
    dash:2,
    jump:3,
    kneel:4,
    roll:5,
    shield:6
}

class State {
    constuctor(state){
        this.state = state
    }
}


export class Idle extends State { //0
    constructor(doctor){
        super('idle')
        this.doctor = doctor
    }
    enter(){
        this.doctor.frameY = 9.8
    console.log("I am Idle")
    }
    subtleStrings(strings){
if (strings.includes('a') || strings.includes('d')) {this.doctor.setState(states.walk)
} else if (strings.includes('w')){
    this.doctor.setState(states.jump)
}

else { this.doctor.setState(states.idle)}
    }
    }

export class Walk extends State { //1
    constructor(doctor){
        super('walk')
        this.doctor = doctor
    }
    enter(){
        this.doctor.frameY = 1
            console.log("I am Walking")
    }
    subtleStrings(strings){
         if(strings.includes('w')  ){
            this.doctor.setState(states.jump)
        } else if ((strings.includes('a') || strings.includes('d')) && strings.includes('o') ) {this.doctor.setState(states.walk)
        } else { this.doctor.setState(states.idle)}
    }
    }
    
            
    export class Dash extends State { //5
        constructor(doctor){
            super('dash')
            this.doctor = doctor
        }
        enter(){
            //if (strings.includes('o') && (strings.includes('a') || strings.includes('d')) ) this.doctor.speed += 33
            this.doctor.frameY = 5
            console.log("I am Dash")
        
        }
        subtleStrings(strings){
            if(strings.includes('s') ){
                this.doctor.setState(states.kneel)
            }
        }
        } 

    export class Jump extends State { //4
        constructor(doctor){
            super('jump')
            this.doctor = doctor
        }
        enter(){
            if (this.doctor.onGround()) this.doctor.vy -= 33
            this.doctor.frameY = 4
            console.log("I am Jump")
        
        }
        subtleStrings(strings){
             if(strings.includes('s') ){
            this.doctor.setState(states.kneel)
        }
        }
        }
        
    /*     export class Kneel extends State { //2
            constructor(doctor){
                super('kneel')
                this.doctor = doctor
            }
            enter(){
                this.doctor.frameY = 2
            
            }
            subtleStrings(strings){
                if(strings.includes('a') || strings.includes('d') ){
                    this.doctor.setState(states.roll)
                } else  if(!strings.includes('s')  ){
                    this.doctor.setState(states.idle)
                }
            }
            } */
/* export class Roll extends State { //3
    constructor(doctor){
        super('roll')
        this.doctor = doctor
    }
    enter(){
        this.doctor.frameY = 3
        console.log("I am Roll")
    
    }
    subtleStrings(strings){
        if(strings.includes('s') ){
            this.doctor.setState(states.kneel)
        }
    }
    } */

        /* export class Shield extends State { //6
            constructor(doctor){
                super('shield')
                this.doctor = doctor
            }
            enter(){
                if (this.doctor.onGround()) this.doctor.vy -= 33
                this.doctor.frameY = 6
                    console.log("I am Shield")
            
            }
            subtleStrings(strings){
                if(strings.includes('s') ){
                    this.doctor.setState(states.kneel)
                }
            }
            } */