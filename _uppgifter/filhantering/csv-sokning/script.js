async function main() {
    const csv = `Anna,Andersson,Stockholm
Lars,Johansson,Västerås
Eva,Karlsson,Malmö
Mikael,Nilsson,Västerås
Maria,Eriksson,Malmö
Anders,Larsson,Stockholm
Karin,Olsson,Stockholm
Johan,Persson,Stockholm
Sara,Svensson,Malmö
Erik,Gustafsson,Malmö`

    const city = await input('Bostadsort: ')
    print('-----')

    for (const row of csv.split('\n')) {
        const row_city = row.split(',')[2]
        if (city == row_city)
            print(row)
    }
}
