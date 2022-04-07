async function main() {
    let people = [
        {
            'name': 'Anna',
            'age': 25
        },
        {
            'name': 'Lars',
            'age': 20
        },
        {
            'name': 'Eva',
            'age': 30
        }
    ]

    people.sort((a, b) => {return a.age < b.age})

    people.forEach(person => {
        print(`${person.age} - ${person.name}`)
    })
}