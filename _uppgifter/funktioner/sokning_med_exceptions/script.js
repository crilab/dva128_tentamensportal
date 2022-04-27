async function main() {
    function get_name(address) {
        for (const person of people) {
            if (person.address == address)
                return person.name
        }
        throw false
    }

    const people = [
        {
            'address': 'Funktionstorget 2',
            'name': 'Lena Eriksson'
        },
        {
            'address': 'Listgatan 1',
            'name': 'Erik Olsson'
        },
        {
            'address': 'Strängvägen 3',
            'name': 'Emma Johansson'
        }
    ]

    let address

    while (true) {
        address = await input('address > ')

        try {
            print(`MATCH: ${get_name(address)}`)
        } catch(e) {
            print('ERROR: no such address')
        }

        print()
    }
}
