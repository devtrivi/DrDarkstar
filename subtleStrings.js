export class SubtleStrings{
    constructor(){
        this.keys = []
        window.addEventListener('keydown', e => {
            console.log(e.key)
        })
    }
}