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
            print('Higher!')
        else if (correct < guess)
            print('Lower!')
    }

    print('------------')
    print(`${guess} is correct!`)
    print(`It took you ${guesses} guesses.`)
}
