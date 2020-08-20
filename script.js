function isValidCPF(cpf) {
  const pesoCPF = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]

  function calcularDigito(str, peso) {
    let soma = 0;
    for (let indice = str.length - 1, digito; indice >= 0; indice--) {
      digito = parseInt(str.substring(indice, indice + 1));
      soma += digito * peso[peso.length - str.length + indice];
    }
    soma = 11 - soma % 11;
    return soma > 9 ? 0 : soma;
  }

  if ((cpf == null) || (cpf.length !== 11)) {
    return false;
  }

  const digito1 = calcularDigito(cpf.substring(0, 9), pesoCPF);
  const digito2 = calcularDigito(cpf.substring(0, 9) + digito1, pesoCPF);
  return cpf == cpf.substring(0, 9) + digito1.toString() + digito2.toString();
}


function cpfValidator() {
  const cpf = document.querySelector('#cpfValue').value;

  if (isValidCPF(cpf)) {
    document.querySelector('#success').style.display = 'block';
    document.querySelector('#error').style.display = 'none';
  } else {
    document.querySelector('#error').style.display = 'block';
    document.querySelector('#success').style.display = 'none';
  }
}