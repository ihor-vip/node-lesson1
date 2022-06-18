function createUser(name, surname) {
    return {
        name: name.trim(),
        surname,
        email: `${name}.${surname}@gmail.com`.toLowerCase().trim()
    }
}

module.exports = { createUser}