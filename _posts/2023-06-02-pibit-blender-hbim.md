---
title: "Manual de boas práticas em Open HBIM com o programa Blender"
date: 2023-06-02
excerpt: "Plano de trabalho de iniciação tecnológica 2023–2024"
author_profile: false
header:
  overlay_image: "/assets/media/blenderbim-mus-deco.jpg"
  overlay_filter: 0.5
category: "Pibit"
tags: ["HBIM", "Blender", "patrimônio cultural", "fotogrametria", "visualização"]
---

## Objetivos, problema e justificativa ##

<!--5000 caracteres-->

A temática deste plano de trabalho é a documentação digital de
edificações históricas tradicionais segundo o paradigma do *Historic
Building Information Modeling* (HBIM, modelagem de informações em
edifícios históricos) e seguindo uma política de dados abertos em
plataforma de software livre. O objetivo geral do plano é compilar e
avaliar as melhores práticas consagradas na literatura metodológica
sobre o HBIM aplicáveis ao uso do programa livre multiplataformas de
modelagem tridimensional Blender 3, com o auxílio do *plugin*
BlenderBIM. Para tanto, o plano de trabalho prevê quatro objetivos
específicos:

1. Identificar as boas práticas descritas na literatura científica sobre
   HBIM referentes à conversão de levantamentos fotogramétricos em
   modelagens arquitetônicas e à descrição de elementos construtivos
   históricos, sintetizando as convergências entre diferentes métodos;
2. Identificar as boas práticas descritas na literatura científica sobre
   a representação virtual de reconstituições de edifícios e conjuntos
   históricos, especialmente quanto ao nível de evidência
   histórico-arqueológica;
3. Selecionar um estudo de caso real, oriundo de levantamento
   fotogramétrico ou convencional de uma edificação histórica
   tradicional, para experimentação no Blender + BlenderBIM;
4. Compilar o manual de boas práticas com base na experiência adquirida
   com a revisão de literatura e a experimentação.

A transição da documentação e especificação arquitetônicas para os
sistemas BIM (modelagem de informação da construção) vem se
intensificando em anos recentes. No entanto, as formas de descrição
geométrica e não geométrica dos elementos construtivos, tal como
implementadas na maioria dos programas de modelagem que dominam o
mercado comercial, favorecem a representação de novas construções e de
materiais industrializados, com dimensões regulares e especificações
técnicas padronizadas. Para harmonizar a especificação construtiva
exigida por contratantes públicos e privados com as particularidades das
intervenções em imóveis históricos, pesquisadores universitários e
arquitetos restauradores têm se debruçado sobre métodos para aprimorar a
representação e descrição informativa a partir de levantamentos
geométricos e de prospecções arqueológicas. Essas iniciativas,
denominadas HBIM, já se desenvolvem há vários anos na Europa e mais
recentemente vêm ganhando tração no Brasil, impulsionadas aqui pela
aquisição de tecnologias estrangeiras e pela evolução do marco
regulatório das contratações públicas.

Por causa do interesse primordial em conciliar o HBIM com a prática
projetual de mercado, a literatura científica sobre o tema se concentra
na adequação de programas comerciais de modelagem arquitetônica, com
tecnologia e formato de arquivo fechados. No entanto, o espírito de
promoção de dados abertos vem ganhando força no mundo acadêmico e
promove, entre outros, a publicação em acesso livre. A esse ímpeto, cabe
agregar a contradição ética em se fazer pesquisa sobre patrimônio
cultural na universidade pública, porém empregando e produzindo material
digital em suportes que não sejam publicamente acessíveis e auditáveis.
Ao fazer isso, a universidade acaba inculcando na própria formação
acadêmica a preferência por programas comerciais dominantes no mercado.

No espírito dessas questões, o problema levantado por este plano de
trabalho é o de converter os métodos e processos descritos na literatura
para uma plataforma de software livre constituída pelo programa de
modelagem tridimensional Blender com o *plugin* BlenderBIM.

Além do benefício ético na promoção de software livre, os formatos de
arquivo abertos podem na melhor das hipóteses ser manipulados por
editores de texto simples, e na pior das hipóteses serem reconstituídos
graças à descrição pública de suas especificações, aumentando assim a
legibilidade e a durabilidade das informações codificadas nesses
arquivos. Mais ainda, o Blender + BlenderBIM oferece, devido às
características intrínsecas do programa, uma plataforma com maior
flexibilidade de representação geométrica --- característica importante
para dar conta da irregularidade dos imóveis históricos --- e,
inclusive, com mais completa aderência ao padrão de descrição de
informações (IFC) utilizado no sistema BIM do que oferecem os programas
comerciais.

Quanto ao propósito material deste plano de trabalho, a publicação de um
manual de boas práticas é um instrumento para a padronização de
pesquisas futuras em digitalização do patrimônio cultural. Ao mesmo
tempo que o manual oferece um caminho padronizado para a solução de
problemas na documentação e interpretação de edifícios tradicionais, ele
funciona como um projeto piloto que demonstra o grau de viabilidade em
se adotar uma abordagem de dados abertos num campo de trabalho
convencionalmente dominado por tecnologias fechadas e programas
comerciais de alto custo.

## Viabilidade, recursos e metodologia ##

<!--4000 caracteres-->

Este plano de trabalho se desenvolve por meio das seguintes etapas:

1. Aproximação (ou aprofundamento) no programa Blender com o *plugin*
   BlenderBIM, por meio de estudo dirigido, material educativo
   disponível online, e interação com usuários mais experientes;
2. Levantamento e revisão da bibliografia científica sobre o objeto do
   trabalho, correspondendo aos objetivos específicos 1 e 2 deste plano;
3. Identificação e aquisição de um levantamento arquitetônico
   fotogramétrico ou convencional de um edifício tradicional histórico;
4. Modelar a edificação empregando as boas práticas em HBIM e em
   visualização histórico-arqueológica extraídas da revisão
   bibliográfica, observando as soluções mais adequadas à transposição
   para o Blender;
5. Compilar as boas práticas obtidas na etapa anterior em forma de
   manual a ser divulgado publicamente, paralelamente à redação de um
   artigo descrevendo a experiência.

A carga de trabalho para a execução das atividades de todas as etapas
está estimada em 10 horas semanais durante a vigência do plano de
trabalho.

Embora o Blender não seja parte da formação curricular habitual dos
cursos de graduação em Arquitetura e Urbanismo no Brasil, ele tem uma
interfaz suficientemente similar ao de outros programas comerciais de
modelagem, além de fartos recursos online para o seu aprendizado. Isso
permite que mesmo estudantes sem experiência prévia com o programa sejam
capazes de dominá-lo em tempo hábil para executar os objetivos deste
plano de trabalho.

O edifício a ser reconstituído como estudo de caso deste plano de
trabalho será escolhido dentre a arquitetura tradicional brasileira,
considerando a viabilidade de obtenção dos dados sem custo junto a
outros pesquisadores ou profissionais, bem como a disponibilidade de
bibliografia interpretativa sobre a obra.

As etapas de execução deste plano de trabalho demandam conhecimentos
correntes do curso de Arquitetura e Urbanismo, tais como: descrição e
representação de sistemas construtivos, reprodução e refinamento de
perfis geométricos, extração de desenhos técnicos a partir do modelo
tridimensional, e diagramação de um manual ilustrado.

Os insumos necessários para o desenvolvimento deste plano, incluindo
documentação bibliográfica e acesso a um levantamento arquitetônico são,
por definição do problema escolhido, livres e públicos. A bibliografia
necessária poderá, eventualmente, incluir artigos publicados sob
assinatura, desde que a Universidade de Brasília assine as bases de
dados correspondentes. Será utilizado também um computador pessoal,
podendo ser equipamento próprio do aluno, do orientador, ou um
computador da UnB que já se encontra disponível para o grupo de pesquisa
no Laboratório de Estudos da Urbe (LabeUrbe) do PPG–FAU.

## Bibliografia ##

<!--2000 caracteres-->

## Cronograma ##

| Mês | Atividade |
|----:|:----------|
|  01 |
|  02 |
|  03 |
|  04 |
|  05 |
|  06 |
|  07 |
|  08 |
|  09 |
|  10 |
|  11 |
|  12 |

## Competências ##

<!--1000 caracteres-->
