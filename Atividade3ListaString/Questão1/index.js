function citacaoDeNomes(nome) {
  let partesNome = nome.split(' ');
  let formato = partesNome.pop();

  if (formato === '(normal)') {
    let tamanho = partesNome.length;
    let citacao = partesNome[tamanho - 1].toUpperCase() + ";";
    partesNome.pop();
    for (let i = 0; i < partesNome.length; i++) {
      citacao += partesNome[i] + " ";
    }
    return citacao.trim();
  } else if (formato === '(compacto)') {
    let tamanho = partesNome.length;
    let citacao = partesNome[tamanho - 1].toUpperCase() + ",";
    partesNome.pop();
    for (let i = 0; i < partesNome.length; i++) {
      if (partesNome[i].length > 3) {
        citacao += partesNome[i][0].toUpperCase() + ".";
      }
    }
    return citacao;
  } 
}

console.log(citacaoDeNomes('João da Silva Melo (normal)'));
console.log(citacaoDeNomes('João da Silva Melo (compacto)'));
