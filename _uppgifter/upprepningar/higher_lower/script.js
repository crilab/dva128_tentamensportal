async function main() {
    print('HIGHER LOWER')
    print('------------')

    let correct = Math.floor(Math.random() * 100)
    let guess = -1
    let guesses = 0

    while (guess != correct) {
        guess = int(await input('> '))
        guesses += 1

        if (guess < correct)
            print('Högre!')
        else if (correct < guess)
            print('Lägre!')
    }

    print('------------')
    print(`${guess} är korrekt!`)
    print(`Det tog dig ${guesses} gissningar.`)
}
