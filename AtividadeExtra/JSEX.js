const cursos = [
    "Análise e Desenvolvimento de Sistemas",
    "Gestão da Produção Industrial",
    "Logística",
    "Manufatura Avançada",
    "Gestão Empresarial",
    "Gestão de Tecnologia da Informação",
    "Eventos",
    "Mecatrônica Industrial",
    "Processos Metalúrgicos",
    "Projetos Mecânicos",
    "Sistemas Biomédicos"
];

const infoCursos = {
    "Análise e Desenvolvimento de Sistemas": "Curso focado no desenvolvimento de software, bancos de dados e tecnologias web.",
    "Gestão da Produção Industrial": "Formação para gerenciamento de processos produtivos em indústrias.",
    "Logística": "Curso para capacitar profissionais na gestão de operações logísticas e cadeia de suprimentos.",
    "Manufatura Avançada": "Preparação para a gestão e operação de tecnologias da Indústria 4.0.",
    "Gestão Empresarial": "Desenvolvimento de habilidades gerenciais e administrativas no ambiente empresarial.",
    "Gestão de Tecnologia da Informação": "Formação voltada à gestão de infraestrutura e serviços de TI.",
    "Eventos": "Curso para capacitar profissionais na organização e gestão de eventos.",
    "Mecatrônica Industrial": "Foco em automação e integração de sistemas industriais inteligentes.",
    "Processos Metalúrgicos": "Formação em tecnologias para o processamento e tratamento de metais.",
    "Projetos Mecânicos": "Desenvolvimento de habilidades para criação e otimização de projetos mecânicos.",
    "Sistemas Biomédicos": "Curso voltado à integração de tecnologias médicas e de engenharia para a saúde."
};

function carregarCursos() {
    const selectElement = document.getElementById('cursos');
    if (!selectElement) {
        console.error('Elemento select com ID "cursos" não encontrado.');
        return;
    }

    selectElement.innerHTML = '';

    const optionInicial = document.createElement('option');
    optionInicial.textContent = 'Selecione um curso';
    optionInicial.value = '';
    selectElement.appendChild(optionInicial);

    cursos.forEach(curso => {
        const option = document.createElement('option');
        option.value = curso;
        option.textContent = curso;
        selectElement.appendChild(option);
    });

    console.log('Cursos carregados no dropdown.');
}

function tratarSelecao() {
    const selectElement = document.getElementById('cursos');

    if (selectElement) {
        selectElement.addEventListener('change', () => {
            const cursoSelecionado = selectElement.value;

            if (cursoSelecionado) {
                const confirmar = confirm(`Você realmente deseja abrir a janela com informações sobre o curso ${cursoSelecionado}?`);
                
                if (confirmar) {
                    const infoCurso = infoCursos[cursoSelecionado];

                    const novaJanela = window.open("", "", "width=600,height=300");
                    novaJanela.document.open();
                    novaJanela.document.write(`
                        <html>
                        <head>
                            <title>${cursoSelecionado}</title>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    padding: 20px;
                                }
                                h1 {
                                    color: #333;
                                    text-align: center;
                                }
                                p {
                                    font-size: 16px;
                                    color: #555;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>${cursoSelecionado}</h1>
                            <p>${infoCurso}</p>
                        </body>
                        </html>
                    `);
                    novaJanela.document.close(); 
                }
            }
        });
    } else {
        console.error('Elemento select com ID "cursos" não encontrado.');
    }
}

window.onload = function() {
    carregarCursos();
    tratarSelecao();
};