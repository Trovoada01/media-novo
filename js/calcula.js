// Selecionar o formulário pelo ID
const form = document.querySelector('#formulario');

// Adicionar um ouvinte de evento para o evento de envio do formulário
form.addEventListener('submit', function(e) {
  // Impedir o comportamento padrão de envio do formulário
  e.preventDefault();

  // Selecionar os campos de entrada pelo ID
  const n1 = form.querySelector('#Num1');
  const n2 = form.querySelector('#Num2');

  // Obter os valores dos campos de entrada e convertê-los em números
  const n1v = Number(n1.value);
  const n2v = Number(n2.value);

  // Verificar se os valores são números válidos
  if (isNaN(n1v) || isNaN(n2v)) {
    exibeMensagem('Preencha ambos os campos com números válidos.', false);
  } else {
    // Calcular a média dos números
    const med = (n1v + n2v) / 2;

    // Exibir a mensagem com a média calculada
    const msg = `Sua média é ${med}`;
    exibeMensagem(msg, true);
  }
});

// Função para criar um elemento de parágrafo
function criarP() {
  const p = document.createElement('p');
  return p;
}

// Função para exibir mensagens no elemento com o ID 'resultado'
function exibeMensagem(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criarP();
  p.textContent = msg;

  // Adicionar uma classe de estilo com base na validade da mensagem
  if (isValid) {
    p.classList.add('valid');
  } else {
    p.classList.add('invalid');
  }

  // Adicionar o elemento de parágrafo à div de resultado
  resultado.appendChild(p);
}
