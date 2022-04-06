async function main() {
    print('Vad är ditt namn?')
    let name = await input('> ')
    print('Hej ' + name)
}