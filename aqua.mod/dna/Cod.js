const Fish = require('/mod/aqua/dna/Fish')

let id = 0
class Cod extends Fish {

    constructor(st) {
        super( extend({
            name: 'cod' + (++id),
            r:     60,
            w:     640,
            h:     320,
        }, st) )
    }


    draw() {
        const { x, y, w, h, r, dx, dy, dir } = this

        save()
        translate(x + dx, y + dy)
        scale(dir < 0? this.scale : -this.scale, this.scale)

        super.draw()

        image(res.fish, -.5*w, -.5*h, w, h)

        restore()
    }

}
