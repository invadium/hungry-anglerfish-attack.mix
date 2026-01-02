const st = {
    FQ:         1,
    spawnBand: .35,
}

function newFish() {
    const x = rx(.5) + 200
    const y = ry(rnd() * 2 * 2 * st.spawnBand - st.spawnBand)

    lab.port.spawn( dna.Cod, {
        Z:     11,
        dir: 1,
        born:  env.time,
        speed: rx(0.05),
        x,
        y,
    })
}

function evo(dt) {
    if (rnd() < st.FQ * dt) newFish()
}
