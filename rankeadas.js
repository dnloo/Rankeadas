let vitorias = "";
let derrotas = "";
let nivel = "";

vitorias = 105;
derrotas = 1;



function resultadoParcial(vitorias, derrotas){
      return vitorias - derrotas
}

let resultado = resultadoParcial(vitorias, derrotas)


if (resultado < 10){
    nivel = "Ferro"
}
    else if(resultado <= 20){
        nivel = "Bronze"
    }
    else if(resultado <= 50){
        nivel = "Prata"
    }
    else if(resultado <= 80){
        nivel = "Ouro"
    }
    else if(resultado <= 90){
        nivel = "Diamante"
    }
    else if(resultado <= 100){
        nivel = "Lendario"
    }
    else if(resultado >= 101){
        nivel = "Imortal"
    }

console.log(`O Herói tem de saldo de ${resultado} está no nível de ${nivel}`)

