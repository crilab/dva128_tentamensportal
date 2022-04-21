async function main() {
    const all_students = [
        'Anna',
        'Lars',
        'Eva',
        'Mikael',
        'Maria',
        'Anders'
    ]
    
    const team_a = [
        'Anna',
        'Maria'
    ]
    
    const team_b = [
        'Eva',
        'Anders'
    ]

    for (const student of all_students) {
        if (!team_a.includes(student) && !team_b.includes(student)) {
            print(student)
        }
    }
}
