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

    const location = await input('Location: ')
    print('-----')

    for (const row of csv.split('\n')) {
        const row_location = row.split(',')[2]
        if (location == row_location)
            print(row)
    }
}
