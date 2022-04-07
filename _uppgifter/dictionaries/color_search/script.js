async function main() {
    const countries = {
        'Denmark': ['red', 'white'],
        'Finland': ['white', 'blue'],
        'France': ['blue', 'white', 'red'],
        'Germany': ['black', 'red', 'yellow'],
        'Iceland': ['blue', 'white', 'red'],
        'Netherlands': ['red', 'white', 'blue'],
        'Norway': ['red', 'white', 'blue'],
        'Sweden': ['yellow', 'blue'],
        'Ukraine': ['blue', 'yellow']
    }

    let colors = await input('colors > ')
    colors = colors.split(' ')

    for (const country in countries) {
        let match = true
        for (const color of colors) {
            if (!countries[country].includes(color)) {
                match = false
            }
        }
        if (match) {
            print(country)
        }
    }
}