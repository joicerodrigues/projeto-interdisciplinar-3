import instance from '../index';

interface Login {
    email          :string;
    password       :string;
}

function login(login: Login) {
    return instance.post('/login', login)
}

function signUp(signUp: {}) {
    return instance.post('/vendedores', signUp)
}

export {
    login,
    signUp
}