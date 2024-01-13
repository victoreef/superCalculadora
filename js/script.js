let soma = document.getElementById('soma');
let subtracaoA = document.getElementById('subtracaoA');
let subtracaoB = document.getElementById('subtracaoB');

soma.innerHTML = 0;
subtracaoA.innerHTML = 0;
subtracaoB.innerHTML = 0;

function calculoSoma(a, b) {
     return a + b;

};

function factorialize(a) {
    if (a < 0) 
          return -1;
    else if (a == 0) 
        return 1;
    else {
        return (a * factorialize(a - 1));
    }
  }

  function factorialize(b) {
    if (b < 0) 
          return -1;
    else if (b == 0) 
        return 1;
    else {
        return (b * factorialize(b - 1));
    }
  }



const calculoSubtracao = (a, b) => a - b;

const mult = (a, b) => a * b;

const divA = (a, b) => a / b;

const divB = (a, b) => b / a;

const med = (a, b) => (a + b) / 2 ;




const calcular = () => {
    let inputA = document.getElementById('primeiroNumero').value;
    let inputB = document.getElementById('segundoNumero').value;

    let a = parseFloat(inputA);
    let b = parseFloat(inputB);

    soma.innerHTML = calculoSoma(a, b);
    subtracaoA.innerHTML = calculoSubtracao(a, b);
    subtracaoB.innerHTML = calculoSubtracao(b, a);
    
    multiplicacao.innerHTML = mult(b, a);
    divisaoA.innerHTML = divA (a, b)
    divisaoB.innerHTML = divB (a, b)
    document.getElementById("potenciaA").innerHTML = Math.pow(a, b);
    document.getElementById("potenciaB").innerHTML = Math.pow(b, a);
    document.getElementById("raizA").innerHTML = Math.sqrt(a, b);
    document.getElementById("raizB").innerHTML = Math.sqrt(b, a);
    fatorialA.innerHTML = factorialize(a);
    fatorialB.innerHTML = factorialize(b);
    document.getElementById("porcentagemA").innerHTML =	(a/ 100)*a;
    document.getElementById("porcentagemB").innerHTML =	(b/ 100)*a;
    media.innerHTML = med(a, b);

    
}




