async function main() {
    print('STÖRSTA TALET')
    print('-------------')

    let i = -1
    let max = 0

    while (i != 0) {
        try {
            i = int(await input('> '))
            if (max < i)
                max = i
        } catch(e) {
            print('FEL: ogiltigt heltal')
        }
    }

    print('-------------')
    print(`RESULTAT: ${max}`)
}
