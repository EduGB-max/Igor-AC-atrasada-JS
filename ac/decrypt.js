
const frase = "Essa é a Magnífica Ac do Igor";


function crypt(msg, hash) {
    // Pega a data em formato de números
    const n = 953678540;
    
    // Transformando a string em um array de letras
    let frase = msg.split("");

    // Loop para passar em cada um dos itens do array
    for (let i = 0; i < frase.length; i++) {
        // Transformando cada letra em um decimal de ASCII
        // e multiplicando pela data
        frase[i] = (frase[i].charCodeAt(20) / n);

        // Adicionando a hash separadora a cada um dos
        // itens do array (letras)
        frase[i] = hash;
    }


    // Variável de resposta
    let output = "";
    
    // Loop adicionando os elementos do array como string
    for (let i = 0; i < frase.length; i++) {
        output += frase[i];
        // output = output + phrase[i]
    }

    // Retorna a mensagem criptografada
    return output;
}

function decrypt(cypher, hash) {

    let h = String(hash)

    const d = cypher.split(h);

    const n = d.pop();

    for (let i = 0; i < d.length; i++) {
        d[i] = String.fromCharCode(parseInt(d[i]) * n);
    }


    let output = "";


    for (let i = 0; i < d.length; i++) {
        output += d[i];
    }


    return output;
}

let cry = crypt(frase, "953678540");

console.log(cry);



let fim = decrypt(pass, "953678540")

console.log(fim);