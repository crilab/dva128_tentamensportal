async function main() {
    let birds = {}
    let bird = ''
    let total = 0

    while (true) {
        bird = await input('Bird: ')
        bird = bird.toLowerCase()

        if (birds[bird] === undefined)
            birds[bird] = 0

        birds[bird] += 1
        total += 1

        print(`(${bird}) ${birds[bird]} out of ${total}`)
        print()
    }
}
