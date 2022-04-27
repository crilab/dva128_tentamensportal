async function main() {
    let usernames = []
    function generate_username(forename, surname) {
        let i = 0
        let username
        
        forename = forename.toLowerCase()
        surname = surname.toLowerCase()

        do {
            i += 1
            username = forename[0] + surname[0] + surname.slice(-1) + i
        } while (usernames.includes(username))

        usernames.push(username)
        return username
    }

    const users = [
        'Anna Andersson',
        'Lars Johansson',
        'Eva Lindberg',
        'Erik Lundberg',
        'Per Svensson',
        'Emma Lindberg',
        'Petra Svensson',
        'Marie Gustafsson'
    ]

    let forename, surname, username
    
    for (let user of users) {
        [forename, surname] = user.split(' ')
        username = generate_username(forename, surname)
        print(`${forename} ${surname} - ${username}`)
    }
}
