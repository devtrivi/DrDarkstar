export class SubtleStrings{
    constructor(){
        this.activeSubtleStrings = []
        window.addEventListener('keydown', e => {
            if ((
                e.key === 'w' || // jump
                e.key === 'a'||  // walk
                e.key === 's'|| // crouch
                e.key === 'd'|| // also walk
                e.key === 'j'|| // punch
                e.key === 'k'|| // jump
                e.key === 'l'|| // roll
                e.key === 'u'|| // dash
                e.key === 'i'|| // djanna
                e.key === 'o'   // shield
                ) && this.activeSubtleStrings.indexOf(e.key) === -1){
                    this.activeSubtleStrings.push(e.key)
            }
            console.log(e.key, this.activeSubtleStrings)

        })
        window.addEventListener('keyup', e => {
            if (  e.key === 'w' || 
            e.key === 'a'|| 
            e.key === 's'|| 
            e.key === 'd'|| 
            e.key === 'j'|| 
            e.key === 'k'|| 
            e.key === 'l'|| 
            e.key === 'u'|| 
            e.key === 'i'|| 
            e.key === 'o'){
                this.activeSubtleStrings.splice(this.activeSubtleStrings.indexOf(e.key),1)
            }
            console.log(e.key, this.activeSubtleStrings)

        })
    }
}