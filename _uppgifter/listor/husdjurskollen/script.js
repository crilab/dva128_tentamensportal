async function main() {
    const pet_owners = [
        { 'name': 'Anna', 'id': 'aa' },
        { 'name': 'Lars', 'id': 'bb' },
        { 'name': 'Eva', 'id': 'cc' }
    ]

    const pets = [
        { 'name': 'Doris', 'owner_id': 'bb' },
        { 'name': 'Molly', 'owner_id': 'cc' },
        { 'name': 'Stampe', 'owner_id': 'aa' },
        { 'name': 'Luna', 'owner_id': 'bb' },
        { 'name': 'Pelle', 'owner_id': 'aa' }
    ]
    
    let pet_owner_name = await input('Pet owner name > ')

    let pet_owner = pet_owners.find(pet_owner => pet_owner.name == pet_owner_name)

    if (!pet_owner)
        return

    let pet_owner_pets = pets.filter(pet => pet_owner.id == pet.owner_id)
    print(`${pet_owner_name} pets:`)
    pet_owner_pets.forEach(pet => {
        print(`- ${pet.name}`)
    })
}