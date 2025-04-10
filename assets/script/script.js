// Inicialize com seu USER ID do EmailJS
(function() {
    emailjs.init("SEU_USER_ID");
  })();

  // Função para enviar o formulário
  document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', this)
      .then(function() {
        document.getElementById('mensagem-sucesso').classList.remove('d-none');
        document.getElementById('mensagem-erro').classList.add('d-none');
        document.getElementById('form-contato').reset();
      }, function(error) {
        document.getElementById('mensagem-sucesso').classList.add('d-none');
        document.getElementById('mensagem-erro').classList.remove('d-none');
        console.error('Erro:', error);
      });
  });
