drawImage takes up to 9!! arguments
1. image we want to draw

2. sx source x
3. sy source y


4. sw source width
5. sh source height
of the rectangle we want to crop out of the image, in this case a single frame of the spritesheet

6. dx destination x
7. dy destination y

shrink or stretch image to fit this dimensions
8. dw destination width
9. dh destination height


     //  inkblotmagic.fillRect(this.x, this.y, this.width, this.height)
     // this is enough to test if our image is working
// inkblotmagic.drawImage(this.image, this.x, this.y)
// ref to drawImage.md for more infio
     inkblotmagic.drawImage(this.image,0,0,this.width,this.height, this.x, this.y, this.width, this.height)



       // js auto creates references to all elems with ids into global namespace using id as var name
        // so instead of 
        //        this.image = document.getElementById('drdarkstarpng')
// we can do:
        this.image = drdarkstarpng //pretty sweet!