function calcular() {
  let largura = parseFloat(document.getElementById("largura").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let tipo = document.getElementById("tipo").value;
  let led = document.getElementById("led").checked;

  if (isNaN(largura) || isNaN(altura)) {
    document.getElementById("resultado").innerText = "Preencha largura e altura corretamente!";
    return;
  }

  let area = largura * altura;
  let preco_m2;

  switch (tipo) {
    case "acrilico": preco_m2 = 120; break;
    case "acm": preco_m2 = 150; break;
    case "lona": preco_m2 = 90; break;
  }

  let total = area * preco_m2;
  if (led) total += 30;

  document.getElementById("resultado").innerText = `Valor total: R$ ${total.toFixed(2)}`;
}
