const Z = 11

function aqua() {

    lab.port.spawn( dna.Anglerfish, {
        Z: 101,
        x: 0,
        y: 0,
    })

    lab.port.spawn( dna.Cod, {
        Z:   11,
        dir: -1,
        x:   -200,
        y:   -200,
        speed: 20,
    })

}
