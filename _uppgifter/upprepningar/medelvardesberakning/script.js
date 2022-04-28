async function main() {
    print('MEDELVÄRDESBERÄKNING')
    print('--------------------')

    let i = ''
    let sum = count = 0

    while (true) {
        i = await input('> ')

        if (i == 'exit')
            break

        try {
            i = int(i)
            sum += i
            count += 1
        } catch(e) {
            print('FEL: ogiltigt heltal')
        }
    }

    print('--------------------')
    if (count == 0) {
        print('FEL: inga heltal')
    } else {
        print(`RESULTAT: ${sum / count}`)
    }
}
