



export default class Doctor {
    constructor(darkstar) {
        this.darkstar = darkstar
        this.width = 88
        this.height = 88
        this.x = 0
        this.y = this.darkstar.height - this.height
               this.image = drdarkstarpng 
    }
    update() {
this.x++
    }
    draw(inkblotmagic) {
     inkblotmagic.drawImage(this.image,0,0,this.width,this.height, this.x, this.y, this.width, this.height)
    }
}