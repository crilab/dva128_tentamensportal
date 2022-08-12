async function main() {
    const cart = [
        {
            'name': 'T-shirt',
            'quantity': 2,
            'cost': 149
        },
        {
            'name': 'Shorts',
            'quantity': 1,
            'cost': 199
        },
        {
            'name': 'Strumpor',
            'quantity': 3,
            'cost': 49
        },
        {
            'name': 'Baddräkt',
            'quantity': 1,
            'cost': 249
        }
    ]

    const line = () => { print('-------------------------') }

    print('         KVITTO          ')
    line()

    let total = 39

    for (const item of cart) {
        print(`${item.quantity} st ${item.name} (${item.cost} kr/st)`)
        total += item.quantity * item.cost
    }

    line()

    print('Fraktavgift: 39 kr')
    print(`Total kostnad: ${total} kr`)
}
