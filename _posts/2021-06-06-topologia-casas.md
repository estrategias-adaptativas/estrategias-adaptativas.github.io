---
title: "Representação topológica digital da edilícia de base"
author: Eduarda Toscano
date: 2021-06-06
excerpt: "Plano de trabalho de Iniciação Científica 2021–2022"
---

## Objetivos ##

Este plano de trabalho explora modos de descrever digitalmente a
morfologia espacial em edificações simples. O universo da pesquisa é a
edilícia de base urbana brasileira já inventariada na bibliografia
especializada e datável, aproximadamente, do período 1760--1860. O
objetivo geral consiste em propor uma boa prática de representação
digital em massa para a diversidade de disposições de ambientes nas
casas tradicionais brasileiras. Para tanto, este plano de trabalho se
desdobra nos objetivos específicos seguintes:

1. Coletar plantas de casas brasileiras do período 1760--1860,
   publicadas na bibliografia disciplinar ou disponíveis em arquivos
   online, e representá-las na forma de polígonos georreferenciados
   (SIG) e de grafos justificados (profundidade topológica); 
2. Representar a profundidade topológica das casas numa base de dados
   conectada ao SIG, por meio de ontologias compatíveis com o Modelo
   Conceitual de Referência do Comitê Internacional de Documentação
   (Cidoc-CRM) do Conselho Internacional de Museus (Icom);
3. Processar a representação geométrica das casas usando a ferramenta de
   mapa de visibilidade no programa DepthMapX conectado ao programa de
   georreferenciamento QGIS;
4. Sintetizar padrões de relações de adjacência e visibilidade
   (topologia arquitetônica) do universo de análise em ontologias de
   ordem maior (tipologia arquitetônica), por meio da avaliação visual
   de semelhanças entre exemplares.

A história da arquitetura trabalha tanto com estudos de caso de
edificações singulares ou conjuntos delimitados, quanto com
generalizações interpretativas caracterizando "estilos" arquitetônicos
ou "tipos" edilícios. O salto de escala entre esses dois âmbitos, porém,
é tradicionalmente realizado por meio de associações mentais intuitivas
por parte dos pesquisadores. Esta pesquisa busca, pelo contrário,
sistematizar séries tipológicas a partir do processamento de um universo
relativamente extenso de edificações. Ela se insere no âmbito das
"Humanidades Digitais", trabalhando com bases de dados extensas e a sua
análise no espaço e no tempo.

O trabalho a ser desenvolvido visa, portanto, a tornar séries extensas
de casos particulares comparáveis entre si. Neste primeiro momento, a
comparação será feita por meio da representação e análise das diversas
plantas de casas segundo um mesmo padrão gráfico; isso permitirá uma
avaliação visual preliminar de semelhanças e diferenças aparentes,
agrupando os estudos de caso em "tipos" de casas topologicamente
semelhantes.

Este plano de trabalho faz parte do projeto de pesquisa "Estratégias
adaptativas na construção tradicional". O projeto observa a resiliência
nas formas vernáculas de produzir o ambiente construído diante da
modernização social e tecnológica desde finais do século XVIII. O plano
de iniciação científica contribui com a coleta e interpretação da
arquitetura doméstica no contexto da consolidação de uma tradição
arquitetônica luso-brasileira ainda pouco afetada por tecnologias como a
construção moderna ou a infraestrutura de saneamento.

Os resultados a serem obtidos deste plano de trabalho consistem em modos
de classificar, agrupar e estabelecer séries genealógicas a partir de
uma amostra com aproximadamente cem casas urbanas construídas em
diferentes regiões do Brasil no período 1760--1860. Esses resultados
darão respaldo à discussão de problemas interpretativos vigentes no
estudo da arquitetura brasileira do final do Antigo Regime e período
imperial. Tal respaldo não pretende formular categorias peremptórias nem
classificações conclusivas, mas demonstrar a viabilidade de se usar
séries extensas de dados como base para interpretações históricas.

Por sua vez, o conhecimento do processo tipológico da arquitetura
tradicional brasileira, na sua diversidade regional e transformação
diacrônica, é um insumo que contribui para a discussão sobre os valores
culturais do acervo arquitetônico remanescente do século XIX. Esse
acervo tem sido objeto de estudos de caso arqueológicos e históricos nas
últimas décadas, mas esse novo conhecimento tem tido pouco rebatimento
na reflexão sobre a coerência e a valoração de centros históricos desse
período. A discrepância entre o uso do estilo neoclássico nos principais
centros urbanos do litoral e a persistência da tradição vernácula dita
"colonial" no interior do continente oculta semelhanças mais profundas
na disposição dos ambientes, que esta pesquisa pretende revelar.

O trabalho a ser realizado consiste na coleta de plantas de casas
publicadas na bibliografia do campo disciplinar ou disponíveis para
consulta online em arquivos digitalizados, na sua representação gráfica
e topológica, e na interpretação visual de semelhanças entre objetos. A
sua execução requer um conhecimento elementar da bibliografia sobre a
história da arquitetura brasileira, domínio básico de ferramentas de
desenho técnico por computador (CAD) e georreferenciamento (SIG), e
noções de interpretação da composição de espaços arquitetônicos. Essas
competências e habilidades são correntes entre alunos de graduação em
Arquitetura e Urbanismo.

## Viabilidade e metodologia ##

Este plano de trabalho requer material bibliográfico e de arquivo
facilmente consultado pela internet, e recursos de conceituação e
processamento com licenças livres. Esses requisitos permitem a execução
do plano sob qualquer condição de trabalho presencial ou remoto em vigor
ao longo do período. O desenvolvimento desta pesquisa é composto por
quatro etapas, em consonância com os objetivos específicos do plano de
trabalho:

1. Consultar os acervos digitais da Biblioteca Nacional, Arquivo
   Nacional, Arquivo Público Mineiro, Arquivo Geral da Cidade do Rio de
   Janeiro, Biblioteca Pública de Nova York, e outros a serem
   eventualmente identificados, assim como obras elencadas na
   bibliografia, de modo a compor um inventário de aproximadamente cem
   plantas de casas para uso nas etapas subsequentes. Desenhar os
   perímetros exterior e interiores do pavimento térreo de cada casa no
   programa de geoprocessamento QGIS.

2. Representar a topologia espacial de cada casa por meio de um grafo
   justificado, onde cada ambiente é um vértice do grafo e os eixos
   representam acessos diretos (portas). Descrever os vértices e eixos
   numa base de dados relacional usando as ontologias do Cidoc-CRM.

3. Processar a representação geométrica das plantas das casas usando o
   programa de análise espacial depthmapX mediante o plugin "Space
   Syntax Toolkit" para o QGIS, de modo a obter gráficos de alcance
   visual. Realizar o mesmo processamento usando o programa
   Isovists.org. Comparar os resultados de alcance visual do
   depthmapX com os do Isovists.org, e ambos com os grafos de
   profundidade espacial, averiguando a correlação entre os resultados.

4. Avaliar visualmente as semelhanças entre os exemplares estudados, por
   meio dos gráficos de alcance visual e dos grafos de profundidade
   espacial. Agrupar exemplos semelhantes em "tipos" e mapear a sua
   distribuição geográfica e ocorrência no tempo.

As tarefas de inclusão e processamento de dados podem ser realizadas num
computador pessoal simples, com capacidade de processamento condizente
com o atual estado do trabalho em desenho assistido por computador
(CAD). Um computador que atenda aos requisitos deste trabalho está à
disposição da equipe no Laboratório de Estudos da Urbe (LabeUrbe) na
Faculdade de Arquitetura e Urbanismo da UnB; no entanto, as atividades
também podem ser desenvolvidas no computador pessoal da aluna e do
orientador enquanto persistir o regime de trabalho remoto. Todos os
programas necessários têm licença livre e gratuita e podem ser
instalados sem restrições; os arquivos podem ser compartilhados pela
plataforma Sharepoint ou ainda no GitHub.

O universo previsto, compreendendo cerca de uma centena de plantas de
casas urbanas, pode ser processado dentro do cronograma previsto sem
grandes dificuldades, uma vez que os desenhos a serem realizados têm
natureza esquemática. Embora o tempo de processamento das análises seja
alto dependendo dos recursos computacionais empenhados, esse
processamento pode ser executado de modo não assistido, e eventualmente
ser realizado num servidor virtual; há recursos remanescentes do edital
DPI/DPG 02/2020 que podem ser alocados nessa tarefa, caso necessário.

## Bibliografia ##

## Competências e habilidades ##

Tendo como base o plano de trabalho de Representação topológica digital
da edilícia de base, penso que conseguiria atingir os objetivos
apresentados por meio da metodologia escolhida.

Me considero uma pessoa prática, objetiva e organizada, lidando bem com
prazos. Já trabalhei com o programa QGIS na matéria de PU1 com as
professoras Vânia e Liza, que deram uma aula explicativa de como
utilizar a ferramenta. Já fui introduzida ao programa DepthMapx, mas
nunca produzi nenhum tipo de trabalho com ele. Não sei utilizar os
programas por completo, mas sou uma pessoa que aprende rápido os
comandos. Além de possuir domínio básico na ferramenta CAD, penso que
adquiri certa habilidade de análise interpretativa da arquitetura
durante o curso, já tendo cursado as matérias de História da Arquitetura
e da Arte 1 e 2 e Arquitetura e Urbanismo no Brasil Colônia e Império,
que julgo como importantes para a pesquisa.

Possuo computador pessoal com a capacidade de processamento necessária
para a produção do trabalho. Me interesso pelo tema do projeto de
pesquisa e estou disposta a aprender.


## Cronograma ##

| Mês | Atividade                                                           |
|----:|---------------------------------------------------------------------|
|   1 | Exploração e levantamento dos arquivos e da bibliografia            |
|   2 | Levantamento e classificação do material de arquivo e bibliográfico |
|   3 | Levantamento e classificação do material de arquivo e bibliográfico |
|   4 | Representação geométrica e topológica dos exemplares                |
|   5 | Representação geométrica e topológica dos exemplares                |
|   6 | Análises de visibilidade e preenchimento da base de dados           |
|   7 | Análises de visibilidade e preenchimento da base de dados           |
|   8 | Análises de visibilidade e preenchimento da base de dados           |
|   9 | Avaliação visual e classificação dos resultados                     |
|  10 | Redação do relatório final                                          |
|  11 | Revisão e formatação do relatório final                             |

