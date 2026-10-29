// ----------------------------------------------------
// SPRINT 2 - FRONT-END //


// 1. MENU HAMBURGUER (MOBILE)
const btnMenu = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-menu');

if (btnMenu && navMenu) {
    btnMenu.addEventListener('click', function () {
        // Liga/desliga a classe active pra mostrar o menu no css
        navMenu.classList.toggle('active');
        btnMenu.classList.toggle('active');
    });
}


// 2. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
const formContato = document.querySelector('#form-contato');

if (formContato) {
    formContato.addEventListener('submit', function (event) {
        // Bloqueia o envio padrao da pagina pra validar na mão
        event.preventDefault();

        // Pega os inputs
        const nome = document.querySelector('#nome');
        const email = document.querySelector('#email');
        const mensagem = document.querySelector('#mensagem');
        const caixaSucesso = document.querySelector('#feedback-sucesso');

        let temErro = false;

        // Reseta os estilos de erro antes de testar
        nome.classList.remove('input-error');
        email.classList.remove('input-error');
        mensagem.classList.remove('input-error');

        // Valida se o nome tá vazio
        if (nome.value.trim() === '') {
            nome.classList.add('input-error');
            temErro = true;
        }

        // Valida email basico (se ta vazio ou sem @)
        if (email.value.trim() === '' || !email.value.includes('@') || !email.value.includes('.')) {
            email.classList.add('input-error');
            temErro = true;
        }

        // Valida mensagem com menos de 10 letras
        if (mensagem.value.trim().length < 10) {
            mensagem.classList.add('input-error');
            temErro = true;
        }

        // Se deu tudo certo, envia
        if (!temErro) {
            if (caixaSucesso) {
                caixaSucesso.textContent = 'Mensagem enviada com sucesso!';
                caixaSucesso.style.display = 'block';
            }
            formContato.reset();
        }
    });
}


// 3. MODAL DE DETALHES DA SOLUÇÃO
const botoesModal = document.querySelectorAll('.btn-abrir-modal');
const modal = document.querySelector('#modal-solucao');
const btnFechar = document.querySelector('.btn-fechar-modal');

if (modal) {
    // Abre o modal quando clica nos cards
    botoesModal.forEach(function (btn) {
        btn.addEventListener('click', function () {
            modal.classList.add('open');
        });
    });

    // Fecha no botão X
    if (btnFechar) {
        btnFechar.addEventListener('click', function () {
            modal.classList.remove('open');
        });
    }

    // Fecha se clicar no fundo escuro fora do card
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });
}