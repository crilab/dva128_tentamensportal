async function main() {
    const flights = [
        { 'from': 'Stockholm', 'to': 'Göteborg' },
        { 'from': 'Göteborg', 'to': 'Malmö' },
        { 'from': 'Malmö', 'to': 'Västerås' },
        { 'from': 'Göteborg', 'to': 'Stockholm' },
        { 'from': 'Västerås', 'to': 'Göteborg' },
        { 'from': 'Stockholm', 'to': 'Malmö' },
        { 'from': 'Göteborg', 'to': 'Västerås' }
    ]
    
    let destinations = {}

    for (const flight of flights) {
        if (destinations[flight['from']] === undefined)
            destinations[flight['from']] = []
        destinations[flight['from']].push(flight['to'])
    }

    // not pretty but works
    print('{')
    for (const key in destinations) {
        const value = JSON.stringify(destinations[key]).replaceAll(',', ', ')
        print(`    "${key}": ${value}`, '')
        print(key != 'Västerås' ? ',' : '')
    }
    print('}')
}
