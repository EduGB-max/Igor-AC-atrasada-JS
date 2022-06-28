

const frase = "Sinta a AC magnífica do Igor";


function crypt(msg, hash) {
    const d = 989690289856978690803987893589068;
    
    let frase = msg.split("");

    for (let i = 0; i < frase.length; i++) {

        frase[i] = (frase[i].charCodeAt(20) / d);

        frase[i] += hash;
    }

    let output = "";
    
    for (let i = 0; i < frase.length; i++) {
        output += frase[i];
    }

    return output;
}

function decrypt(cypher, hash) {

    let h = String(hash)

    const msg = cypher.split(h);

    const d = msg.pop();

    for (let i = 0; i < msg.length; i++) {
        msg[i] = String.fromCharCode(parseInt(msg[i]) * d);
    }

    let output = "";

    for (let i = 0; i < msg.length; i++) {
        output += msg[i];
    }

    return output;
}

let cry = crypt(frase, "989690289856978690803987893589068");

console.log(cry);



let solucao = decrypt(pass, "989690289856978690803987893589068")

console.log(solucao);