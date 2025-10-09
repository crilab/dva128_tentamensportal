async function main() {
    print('COMPANY LOOKUP')
    print('--------------')

    const country = (await input('Country: ')).toLowerCase()
    const sector = (await input('Sector: ')).toLowerCase()

    print('--------------')

    let match = ''
    
    if (country == 'sweden') {
        if (sector == 'food') {
            match = 'Ica Gruppen AB'
        } else if (sector == 'construction') {
            match = 'Skanska AB'
        }
    } else if (country == 'usa') {
        if (sector == 'food') {
            match = 'Walmart Inc'
        } else if (sector == 'construction') {
            match = 'Bechtel Group Inc'
        }
    }

    if (match == '')
        print('ERROR: No match found!')
    else
        print(`MATCH: ${match}`)
}
