async function main() {
    print('SUMMER')
    print('------')

    let i = -1
    let sum = 0

    while (i != 0) {
        try {
            i = int(await input('> '))
            sum += i
        } catch(e) {
            print('ERROR: invalid integer')
        }
    }

    print('------')
    print(`RESULT: ${sum}`)
}
