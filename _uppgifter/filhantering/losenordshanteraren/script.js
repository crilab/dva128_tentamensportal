async function main() {
    const file = {
        "master_password": "s3cr3t",
        "passwords": {
            "socialnetwork.example.com": {
                "username": "johan",
                "password": "abc123"
            },
            "school.example.com": {
                "username": "jsn1337",
                "password": "def456"
            }
        }
    }
    
    let master_password = await input('Master password: ')
    while (master_password != file.master_password) {
        print('ERROR: incorrect password')
        master_password = await input('Master password: ')
    }
    print('SUCCESS: authorized')

    let domain = await input('Domain: ')
    print('-----')
    if (domain in file.passwords) {
        for (const key in file.passwords[domain]) {
            print(`${key}: ${file.passwords[domain][key]}`)
        }
    } else {
        print('ERROR: unknown domain')
    }
    print('-----')
}
