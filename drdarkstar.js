// class coonstructor on js gets automatically called when we use the 'new' keyworkd
// ie whenever we call 'new Doctor' it runs the constructor
// this also runs any code inside the constructor
// so we run 'new Doctor' inside DarkStar constructor so every time the game is run the player appears.
export default class Doctor {
    constructor(star){
        this.star = star
        // usually you get the frame by the size of the spritesheed divided by number of dancing guys
        // here we were smart and used a bujo journal 
        // so we got the frame size in gimp while making the grid match the bujo dots
        // get a dotted sheet of paper for your spritesheets or print one
        // better instructions for making spritesheet in spritesheet.md
        this.width = 88
        this.height = 88
        // where is drdarkstar on the darkstar?
        this.x = 0
        // height in web is negative, use your sprite height for zero.
        this.y = 88
    }
    update(){ // animation loop

    }
    draw(inkblotmagic){ // each individual stroke, so to speak
        // this sounds so much like a harry potter spell formula...
        inkblotmagic.fillRect(this.x, this.y, this.width, this.height)

    }
}