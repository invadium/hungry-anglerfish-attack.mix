const Fish = require('/mod/aqua/dna/Fish')

let id = 0
class Anglerfish extends Fish {

    constructor(st) {
        super( augment({
            name: 'anglerfish' + (++id),
            w:     525,
            h:     422,

            shakeShiftFactor: .006,
            shakeTimeFactor:  1.3,
        }, st) )
    }

    draw() {
        const { x, y, w, h, r, dx, dy, dir, scale: s } = this

        save()
        translate(x + dx, y + dy)
        scale(s)

        super.draw()

        ctx.angler = 'ANGLER'
        image(res.anglerfish, -.5*w, -.5*h, w, h)

        fill('#ffffff')
        circle(.30*r, -.33*r, .3*r)

        fill('#ffffa0')
        circle(2.4*r, -.65*r, .2*r)

        restore()

        //lineWidth(2)
        //stroke('#ffff00')
        //circle(this.x, this.y, this.r)
    }
}
