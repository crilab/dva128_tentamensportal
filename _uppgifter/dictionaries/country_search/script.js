async function main() {
    const countries = {
        "Sweden": ["Stockholm", "Göteborg", "Malmö"],
        "Norway": ["Oslo", "Bergen", "Trondheim"],
        "England": ["London", "Birmingham", "Manchester"],
        "Germany": ["Berlin", "Hamburg", "Munich"],
        "France": ["Paris", "Marseille", "Toulouse"]
    }

    let city_search = await input('city > ')

    let found = false
    for (const country in countries) {
        for (const city of countries[country]) {
            if (city.toLowerCase() == city_search.toLowerCase()) {
                found = true
                print(country)
            }
        }
    }
    if (!found) {
        print(`ERROR: not found (${city_search})`)
    }
}
