async function main() {
    function pet_filter(pets) {
        return pets.filter(
            pet => ['cat', 'dog'].includes(pet['type'])
        )
    }

    const pets = [
        { 'name': 'Smulan', 'type': 'cat' },
        { 'name': 'Molly', 'type': 'dog' },
        { 'name': 'Stampe', 'type': 'rabbit' },
        { 'name': 'Bella', 'type': 'cat' },
        { 'name': 'Blubbe', 'type': 'fish' },
        { 'name': 'Morris', 'type': 'dog' }
    ]
    
    const cats_and_dogs = pet_filter(pets)

    for (const pet of cats_and_dogs) {
        print(`${pet["name"]} (${pet["type"]})`)
    }
}
