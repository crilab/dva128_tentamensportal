async function main() {
    print('MEAN VALUE CALCULATOR')
    print('---------------------')

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
            print('ERROR: invalid integer')
        }
    }

    print('---------------------')
    if (count == 0) {
        print('ERROR: no integers')
    } else {
        print(`RESULT: ${sum / count}`)
    }
}
