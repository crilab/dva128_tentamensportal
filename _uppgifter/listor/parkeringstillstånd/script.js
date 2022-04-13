async function main() {
    const granted_parking_permits = ['910101-1234', '820202-5678']

    print('.: PARKING PERMIT MANAGER :.')
    print('----------------------------')
    print('grant | Grant parking permit')
    print('check | Check parking permit')
    print('----------------------------')

    while (true) {
        let command = await input('command > ')
        let student
        switch (command) {
            case 'grant':
                student = await input('student > ')
                if (granted_parking_permits.includes(student)) {
                    print('ERROR: existing parking permit for student')
                    break
                }
                granted_parking_permits.push(student)
                print(`SUCCESS: granted parking permit to ${student}`)
                break
            case 'check':
                student = await input('student > ')

                if (granted_parking_permits.includes(student))
                    print(`${student} has a parking permit`)
                else
                    print(`${student} does not have a parking permit`)
                
                break
            default:
                print('ERROR: Unknown command')
        }
    }
}
