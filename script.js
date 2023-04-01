function converterUnidades(valor, unidadeEntrada, unidadeconvertida) {
    if (unidadeEntrada === "grama" && unidadeconvertida === "quilograma") {
          return valor / 1000;
    } else if (unidadeEntrada === "grama" && unidadeconvertida === "hectograma") {
          return valor / 100; 
    } else if (unidadeEntrada === "quilograma" && unidadeconvertida === "grama") {
       return valor * 1000; 
    } else if (unidadeEntrada === "quilograma" && unidadeconvertida === "hectograma") {
          return valor * 10;
    } else if (unidadeEntrada === "hectograma" && unidadeconvertida === "quilograma") {
          return valor / 10;
    } else if (unidadeEntrada === "hectograma" && unidadeconvertida === "grama") {
          return valor * 100; 
    } else {
      return valor;
    }
  }
  const botaoConverter = document.getElementById("converter");
  const valorInput = document.getElementById("valor");
  const unidadeEntradaSelect = document.getElementById("unidade-entrada");
  const unidadeconvertidaSelect = document.getElementById("unidade-convertida");
  const resultadoP = document.getElementById("resultado");
  
  botaoConverter.addEventListener("click", function () {
    const valor = parseFloat(valorInput.value);
    const unidadeEntrada = unidadeEntradaSelect.value;
    const unidadeconvertida = unidadeconvertidaSelect.value;
  
    const valorConvertido = converterUnidades(
      valor,
      unidadeEntrada,
      unidadeconvertida
    );
  
    resultadoP.innerHTML = `${valor} ${unidadeEntrada}(s) é igual a ${valorConvertido} ${unidadeconvertida}(s)`;
  });