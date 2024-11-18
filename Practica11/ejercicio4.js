class Usuario{
    constructor(username){
        this._username = username;
    }

    get username() {
        return this._username;
    }

    set username (username) {
        if (username.length >= 3) {
            this._username = username;
        } else {
            console.log(`El nombre de usuario '${username}' debe tener almenos 3 caracteres.`);
        }
    }
}

const usuario = new Usuario('Luis');
console.log(`Nombre valido: ${usuario.username}`);
usuario.username = 'Lu';

usuario.username = 'Angela';
console.log(`Nombre valido: ${usuario.username}`);