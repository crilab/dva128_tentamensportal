async function main() {
    const people = [
        {
            "name": "Anna",
            "age": 28
        },
        {
            "name": "Erik",
            "age": 35
        },
        {
            "name": "Maria",
            "age": 42
        },
        {
            "name": "Lars",
            "age": 19
        },
        {
            "name": "Sofia",
            "age": 55
        }
    ]

    let name = await input('name > ')
    let match = ''

    for (const person of people) {
        if (person.name === name) {
            match = person.age
            break
        }
    }

    print('----------')

    if (match === '') {
        print(`ERROR: ${name} not found...`)
    } else {
        print(`MATCH: ${name} is ${match} years old!`)
    }
}
