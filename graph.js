var nodesSet = new vis.DataSet([
    {level: 1, id: 'CEA001', label: 'GAAL', title: 'CEA001 GEOMETRIA ANALITICA E ALGEBRA LINEAR'},
    {level: 1, id: 'CEA031', label: 'Química', title: 'CEA031 QUIMICA GERAL'},
    {level: 1, id: 'CEA160', label: 'Cálculo I', title: 'CEA160 CALCULO DIFERENCIAL E INTEGRAL I'},
    {level: 1, id: 'CEA201', label: 'Introdução à EC', title: 'CEA201 INTRODUCAO A ENGENHARIA DE COMPUTACAO'},
    {level: 1, id: 'CEA427', label: 'Metodologia de pesquisa', title: 'CEA427 METODOLOGIA DE PESQUISA APLICADA A COMPUTACAO'},
    {level: 1, id: 'EAD707', label: 'Comunicação e expressão', title: 'EAD707 COMUNICACAO E EXPRESSAO'},
    {level: 1, id: 'CEA030', label: 'Prog I', title: 'CEA030 PROGRAMACAO DE COMPUTADORES I'},

    {level: 2, id: 'CEA003', label: 'Física I', title: 'CEA003 FISICA I'},
    {level: 2, id: 'CEA032', label: 'Prog II', title: 'CEA032 PROGRAMACAO DE COMPUTADORES II'},
    {level: 2, id: 'CEA301', label: 'Cálculo II', title: 'CEA301 CALCULO DIFERENCIAL E INTEGRAL II'},
    {level: 2, id: 'CEA307', label: 'Estatística', title: 'CEA307 ESTATISTICA E PROBABILIDADE'},
    {level: 2, id: 'CEA443', label: 'Matemática discreta', title: 'CEA443 MATEMATICA DISCRETA'},

    {level: 3, id: 'CEA006', label: 'Cálculo II', title: 'CEA006 CALCULO DIFERENCIAL E INTEGRAL III'},
    {level: 3, id: 'CEA007', label: 'Física II', title: 'CEA007 FISICA II'},
    {level: 3, id: 'CEA302', label: 'IEDO', title: 'INTRODUCAO AS EQUACOES DIFERENCIAIS ORDINARIAS'},
    {level: 3, id: 'CEA341', label: 'Eletrônica digital', title: 'CEA341 PRINCIPIOS DE ELETRONICA DIGITAL'},
    {level: 3, id: 'CEA488', label: 'AEDS I', title: 'CEA488 ALGORITMOS E ESTRUTURA DE DADOS I'},

    {level: 4, id: 'CEA013', label: 'Física III', title: 'CEA013 FISICA III'},
    {level: 4, id: 'CEA429', label: 'AEDS II', title: 'CEA429 ALGORITMOS E ESTRUTURA DE DADOS II'},
    {level: 4, id: 'CEA466', label: 'Grafos', title: 'CEA466 TEORIA DOS GRAFOS'},
    {level: 4, id: 'CEA552', label: 'Circuitos I', title: 'CEA552 CIRCUITOS ELETRICOS I'},
    {level: 4, id: 'CEA562', label: 'Sinais e sistemas', title: 'CEA562 SINAIS E SISTEMAS'},

    {level: 5, id: 'CEA034', label: 'Física IV', title: 'CEA034 FISICA IV'},
    {level: 5, id: 'CEA148', label: 'Análise numérica', title: 'CEA148 ANALISE NUMERICA'},
    {level: 5, id: 'CEA203', label: 'OAC', title: 'CEA203 ORGANIZACAO E ARQUITETURA DE COMPUTADORES I'},
    {level: 5, id: 'CEA485', label: 'Engenharia de software I', title: 'CEA485 ENGENHARIA DE SOFTWARE I'},
    {level: 5, id: 'CEA502', label: 'Eletromagnetismo', title: 'CEA502 ELETROMAGNETISMO'},

    {level: 6, id: 'CEA440', label: 'BD I', title: 'CEA440 BANCO DE DADOS I'},
    {level: 6, id: 'CEA509', label: 'OAC II', title: 'CEA509 ORGANIZACAO E ARQUITETURA DE COMPUTADORES II'},
    {level: 6, id: 'CEA546', label: 'PAA', title: 'CEA546 PROJETO E ANALISE DE ALGORITMO'},
    {level: 6, id: 'CEA561', label: 'Eletrônica', title: 'CEA561 ELETRONICA I'},
    {level: 6, id: 'CEA582', label: 'Comunicações', title: 'CEA582 FUNDAMENTOS DE COMUNICACOES'},

    {level: 7, id: 'CEA437', label: 'SO', title: 'CEA437 SISTEMAS OPERACIONAIS'},
    {level: 7, id: 'CEA476', label: 'FTC', title: 'CEA476 FUNDAMENTOS TEORICOS DA COMPUTACAO'},
    {level: 7, id: 'CEA508', label: 'Computação gráfica', title: 'CEA508 COMPUTACAO GRAFICA'},
    {level: 7, id: 'CEA551', label: 'Modelagem e análise de sistemas lineares', title: 'CEA551 MODELAGEM E ANALISE DE SISTEMAS LINEARES'},
    {level: 7, id: 'CEA580', label: 'Microprocessadores', title: 'CEA580 MICROPROCESSADORES E MICROCONTROLADORES'},

    {level: 8, id: 'CEA419', label: 'Linguagens', title: 'CEA419 LINGUAGENS DE PROGRAMACAO'},
    {level: 8, id: 'CEA450', label: 'IHC', title: 'CEA450 INTERACAO HUMANO-COMPUTADOR'},
    {level: 8, id: 'EAD701', label: 'Economia', title: 'EAD701 ECONOMIA'},
    {level: 8, id: 'CEA457', label: 'IA', title: 'CEA457 INTELIGENCIA ARTIFICIAL'},
    {level: 8, id: 'CEA548', label: 'Redes I', title: 'CEA548 REDES DE COMPUTADORES I'},

    {level: 9, id: 'CEA433', label: 'Sistemas distribuídos', title: 'CEA433 SISTEMAS DISTRIBUIDOS'},
    {level: 9, id: 'CEA495', label: 'TCC I', title: 'CEA495 TRABALHO DE CONCLUSAO DE CURSO I'},
    {level: 9, id: 'CEA506', label: 'Compiladores I', title: 'CEA506 COMPILADORES I'},
    {level: 9, id: 'EAD702', label: 'Direito e legislação', title: 'EAD702 DIREITO E LEGISLACAO'},
    {level: 9, id: 'CEA510', label: 'Redes II', title: 'CEA510 REDES DE COMPUTADORES II'},

    {level: 10, id: 'CEA496', label: 'TCC II', title: 'CEA496 TRABALHO DE CONCLUSAO DE CURSO II'},
    {level: 10, id: 'CEA592', label: 'Fundamentos de ciência do ambiente', title: 'CEA592 FUNDAMENTOS DE CIENCIA DO AMBIENTE'},
    {level: 10, id: 'CEA491', label: 'Informática e sociedade', title: 'CEA491 INFORMATICA E SOCIEDADE'},
    {level: 10, id: 'EAD703', label: 'Administração', title: 'EAD703 ADMINISTRACAO'},
    {level: 10, id: 'CEA693', label: 'Avaliação de desempenho de sistemas', title: 'CEA693 AVALIACAO DE DESEMPENHO DE SISTEMAS'},
]);

var edgesSet = new vis.DataSet([
    {to: 'CEA433', from: 'CEA548'},
    {to: 'CEA495', from: 'CEA427'},
    {to: 'CEA495', from: 'CEA437'},
    {to: 'CEA495', from: 'CEA440'},
    {to: 'CEA495', from: 'CEA485'},
    {to: 'CEA495', from: 'CEA546'},
    {to: 'CEA495', from: 'CEA561'},
    {to: 'CEA495', from: 'CEA580'},
    {to: 'CEA506', from: 'CEA476'},
    {to: 'CEA510', from: 'CEA548'},

    {to: 'CEA003', from: 'CEA001'},
    {to: 'CEA003', from: 'CEA160'},
    {to: 'CEA032', from: 'CEA030'},
    {to: 'CEA301', from: 'CEA160'},
    {to: 'CEA307', from: 'CEA160'},

    {to: 'CEA006', from: 'CEA301'},
    {to: 'CEA007', from: 'CEA003'},
    {to: 'CEA302', from: 'CEA301'},
    {to: 'CEA341', from: 'CEA030'},
    {to: 'CEA488', from: 'CEA030'},

    {to: 'CEA013', from: 'CEA001'},
    {to: 'CEA013', from: 'CEA003'},
    {to: 'CEA429', from: 'CEA032'},
    {to: 'CEA429', from: 'CEA488'},
    {to: 'CEA466', from: 'CEA443'},
    {to: 'CEA466', from: 'CEA488'},
    {to: 'CEA552', from: 'CEA007'},
    {to: 'CEA552', from: 'CEA302'},
    {to: 'CEA562', from: 'CEA301'},
    {to: 'CEA562', from: 'CEA302'},

    {to: 'CEA034', from: 'CEA007'},
    {to: 'CEA034', from: 'CEA013'},
    {to: 'CEA148', from: 'CEA001'},
    {to: 'CEA148', from: 'CEA030'},
    {to: 'CEA148', from: 'CEA302'},
    {to: 'CEA203', from: 'CEA030'},
    {to: 'CEA203', from: 'CEA341'},
    {to: 'CEA485', from: 'CEA032'},
    {to: 'CEA485', from: 'CEA488'},
    {to: 'CEA502', from: 'CEA006'},
    {to: 'CEA502', from: 'CEA007'},

    {to: 'CEA440', from: 'CEA488'},
    {to: 'CEA509', from: 'CEA203'},
    {to: 'CEA546', from: 'CEA466'},
    {to: 'CEA561', from: 'CEA034'},
    {to: 'CEA561', from: 'CEA552'},
    {to: 'CEA582', from: 'CEA562'},

    {to: 'CEA437', from: 'CEA203'},
    {to: 'CEA437', from: 'CEA488'},
    {to: 'CEA476', from: 'CEA466'},
    {to: 'CEA508', from: 'CEA001'},
    {to: 'CEA508', from: 'CEA488'},
    {to: 'CEA551', from: 'CEA013'},
    {to: 'CEA551', from: 'CEA552'},
    {to: 'CEA580', from: 'CEA203'},

    {to: 'CEA419', from: 'CEA476'},
    {to: 'CEA450', from: 'CEA485'},
    {to: 'CEA457', from: 'CEA466'},
    {to: 'CEA548', from: 'CEA488'},

    {to: 'CEA496', from: 'CEA495'},
    {to: 'CEA693', from: 'CEA433'},
]);

