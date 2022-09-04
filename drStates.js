const states = {
    idle:0,
    walk:1,
    dash:2,
    jump:2,
    kneel:4,
    roll:1,
    shield:6
}

class State {
    constuctor(state){
        this.state = state
    }
}

export class Kneel extends State {
constructor(doctor){
    super('kneel')
    this.doctor = doctor
}
enter(){
    this.doctor.frameY = 4

}
subtleStrings(strings){
    if(strings.includes('a') || strings.includes('d') ){
        this.doctor.setState(states.roll)
    }
}
}

export class Roll extends State {
    constructor(doctor){
        super('roll')
        this.doctor = doctor
    }
    enter(){
        this.doctor.frameY = 5
    
    }
    subtleStrings(strings){
        if(strings.includes('s') ){
            this.doctor.setState(states.kneel)
        }
    }
    }

    export class Jump extends State {
        constructor(doctor){
            super('jump')
            this.doctor = doctor
        }
        enter(){
            this.doctor.frameY = 3
        
        }
        subtleStrings(strings){
            if(strings.includes('w') ){
                this.doctor.setState(states.kneel)
            }
        }
        }