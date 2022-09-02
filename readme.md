There are three main things that we want to do with this project.

First is to figure out animations with canvas. Main inspirations are this saga by Frank:
https://www.youtube.com/playlist?list=PLU9cwxLeypqhzVmN5x20cFsTFmftZ1NL8

Second is to use the Pixel Rain methods in this saga:
https://www.youtube.com/playlist?list=PLU9cwxLeypqgmoWMDcZuMqVHTo-LE3s_k
To create a makeshift rendering engine mostly to allow for choppy sprite animations. Let me elaborate: Fluid animation takes a lot of work. Right now we don't have the resources. Hence, by using to sprites as keyframes and pixel rain as a sort of transform, with some tooling we should be able to come up with something that transitions between keyframes giving fluidity to the movements.

This is inspired by the fact that old CRT tvs and monitors, being pretty hardcore, had a sort of phasing, vsync and a time for each "pixel" to get brighter (which bled into neighbouring pixels) and took a few moments to "cool off" after the image changed.

This is why old games in emulators look much better on old tvs than in leds. Clever coders have built in systems into emulators that, well, emulate that. This is in that vein.

The third is using Franks audio visualization from
https://www.youtube.com/playlist?list=PLU9cwxLeypqiP16fBKj9yCl6DLq-WyBNC
to further enrich visuals by taking input from whatever music you are listening into to modify the variables in the game, so the color palette, the generative growing patterns of trees, even enemy movement pattern and the damage of spells changes according to music.

This will be hell to balance but thats beyond the point.