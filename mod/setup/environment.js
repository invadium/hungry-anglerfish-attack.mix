function environment() {
    lab.background = null
    pin.aqua = mod['aqua']
    pin.backdrop = mod['backdrop']

    // copy debug and trace properties
    for (const prop in env.config) {
        if (prop.startsWith('debug') || prop.startsWith('trace')) env[prop] = env.config[prop]
    }
}
