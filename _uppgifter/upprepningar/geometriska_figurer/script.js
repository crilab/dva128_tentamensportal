async function main() {
    let shape = await input('shape: ')
    let height = int(await input('height: '))

    if (shape == 'rectangle') {
        let width = int(await input('width: '))
        print()
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                print('#', end='')
            }
            print()
        }
    } else if (shape == 'triangle') {
        print()
        for (let y = 0; y < height; y++) {
            for (let x = 0; x <= y; x++) {
                print('#', end='')
            }
            print()
        }
    }
}
