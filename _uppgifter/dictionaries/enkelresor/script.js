async function main() {
    const enkelresor = [
        { 'avgångsort': 'Stockholm', 'destination': 'Göteborg' },
        { 'avgångsort': 'Göteborg', 'destination': 'Malmö' },
        { 'avgångsort': 'Malmö', 'destination': 'Västerås' },
        { 'avgångsort': 'Göteborg', 'destination': 'Stockholm' },
        { 'avgångsort': 'Västerås', 'destination': 'Göteborg' },
        { 'avgångsort': 'Stockholm', 'destination': 'Malmö' },
        { 'avgångsort': 'Göteborg', 'destination': 'Västerås' }
    ]
    
    let enkelresor_dict = {}

    for (const route of enkelresor) {
        if (enkelresor_dict[route['avgångsort']] === undefined)
            enkelresor_dict[route['avgångsort']] = []
        enkelresor_dict[route['avgångsort']].push(route['destination'])
    }

    // not pretty but works
    print('{')
    for (const key in enkelresor_dict) {
        const value = JSON.stringify(enkelresor_dict[key]).replaceAll(',', ', ')
        print(`    "${key}": ${value}`, '')
        print(key != 'Västerås' ? ',' : '')
    }
    print('}')
}
