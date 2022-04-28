async function main() {
    let shape = await input('form: ')
    let height = int(await input('höjd: '))

    if (shape == 'rektangel') {
        let width = int(await input('bredd: '))
        print()
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                print('#', end='')
            }
            print()
        }
    } else if (shape == 'triangel') {
        print()
        for (let y = 0; y < height; y++) {
            for (let x = 0; x <= y; x++) {
                print('#', end='')
            }
            print()
        }
    }
}
