async function main() {
    function print_all_keys(obj) {
        for (const key in obj) {
            print(key)
            if (obj[key] instanceof Object)
                print_all_keys(obj[key])
        }
    }
    
    const person = {
        'namn': 'Petra Svensson',
        'bostad': {
            'typ': 'hyra',
            'avgift': 5000
        },
        'husdjur': {
            'Douglas': {
                'typ': 'hund'
            },
            'Stampe': {
                'typ': 'kanin'
            }
        }
    }

    print_all_keys(person)
}
