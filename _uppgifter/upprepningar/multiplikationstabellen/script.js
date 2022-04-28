async function main() {
    let z
    for (let y = 1; y <= 10; y++) {
        for (let x = 1; x <= 10; x++) {
            z = str(x * y)
            print(z.padStart(4, ' '), end='')
        }
        print()
    }
}
