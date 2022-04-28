async function main() {
    print('SUMMERARE')
    print('---------')

    let i = -1
    let sum = 0

    while (i != 0) {
        try {
            i = int(await input('> '))
            sum += i
        } catch(e) {
            print('FEL: ogiltigt heltal')
        }
    }

    print('---------')
    print(`SUMMA: ${sum}`)
}
