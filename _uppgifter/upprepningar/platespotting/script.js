async function main() {
    let next_num = 1
    let plate

    while (next_num <= 999) {
        plate = await input('> ')
        plate = plate.toUpperCase()

        if (int(plate.slice(3)) == next_num) {
            print(`Progress [${plate}]`)
            next_num += 1
        }
    }

    print('The End')
}
