---
name: "Chamada de trabalhos"
description: "Checklist de produção de trabalhos em resposta a chamadas"
labels: [ "fluxo:desenvolvimento", "fluxo:submissão" ]
title: "CFP"
body:
  - type: dropdown
    id: cfp_type
    attributes:
      label: "Tipo de chamada"
      options:
        - Evento
        - Periódico
        - Livro
        - Outros
  - type: input
    id: abstract_date
    attributes:
      label: "Data de submissão do resumo"
  - type: input
    id: complete_date
    attributes:
      label: "Data de submissão do texto completo"
  - type: input
    id: reg_date
    attributes:
      label: "Data limite para inscrições no evento, se for o caso"
  - type: textarea
    id: abstract
    attributes:
      label: "Ementa da chamada"
    validation:
      required: true
---

- [ ] Submissão do resumo
- [ ] Submissão do artigo completo
- [ ] Inscrição dos autores
- [ ] Publicação
