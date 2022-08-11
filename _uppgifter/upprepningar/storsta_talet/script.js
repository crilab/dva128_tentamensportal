async function main() {
    print('LARGEST INTEGER')
    print('---------------')

    let i = -1
    let max = 0

    while (i != 0) {
        try {
            i = int(await input('> '))
            if (max < i)
                max = i
        } catch(e) {
            print('ERROR: invalid integer')
        }
    }

    print('---------------')
    print(`RESULT: ${max}`)
}
