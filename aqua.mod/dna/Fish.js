let id = 0

class Fish extends LabFrame {

    constructor(st) {
        super( augment({
            name: 'fish' + (++id),
            born:  0,
            x:     0,
            y:     0,
            dir:  -1,
            speed: 0,
            r:     100,
            scale: 1,
            w:     100,
            h:     40,
            dx:    0,
            dy:    0,

            shakeShiftFactor: .003,
            shakeTimeFactor:  1.1,
        }, st) )
        this.scale = 2*this.r / this.w
    }

    evo(dt) {
        const { w, r, scale } = this
        const sh = ry(this.shakeShiftFactor) / scale

        // move
        this.x += (this.dir < 0? 1 : -1) * this.speed * dt

        // shake
        // this.dx = sh * cos($.env.time),
        this.dy = sh * cos(this.shakeTimeFactor * $.env.time - this.born)
    }

}
