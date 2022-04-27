async function main() {
    function translate(text) {
        text = text.toLowerCase()

        for (const word in words) {
            text = text.replaceAll(word, words[word])
        }

        return text
    }

    const words = {
        'att': 'to',
        'det': 'it',
        'gillar': 'like',
        'jag': 'I',
        'mat': 'food',
        'spela': 'play',
        'tv-spel': 'videogames',
        'roligt': 'fun',
        'är': 'is'
    }

    let text

    while (true) {
        text = await input('text > ')
        print(`translation > ${translate(text)}`)
        print()
    }
}
