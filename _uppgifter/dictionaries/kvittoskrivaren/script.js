async function main() {
    const kundvagn = [
        {
            'namn': 'T-shirt',
            'antal': 2,
            'kostnad': 149
        },
        {
            'namn': 'Shorts',
            'antal': 1,
            'kostnad': 199
        },
        {
            'namn': 'Strumpor',
            'antal': 3,
            'kostnad': 49
        },
        {
            'namn': 'Baddräkt',
            'antal': 1,
            'kostnad': 249
        }
    ]

    const line = () => { print('-------------------------') }

    print('         KVITTO          ')
    line()

    let total = 39

    for (const artikel of kundvagn) {
        print(`${artikel.antal} st ${artikel.namn} (${artikel.kostnad} kr/st)`)
        total += artikel.antal * artikel.kostnad
    }

    line()

    print('Fraktavgift: 39 kr')
    print(`Total kostnad: ${total} kr`)
}
