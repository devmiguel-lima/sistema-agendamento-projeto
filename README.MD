# Sistema de Agendamento

Pequeno aplicativo front-end para agendar nomes em uma data e hora.

## Descrição

Este projeto é uma interface simples que permite ao usuário inserir um nome, escolher uma data e uma hora, e adicionar o agendamento a uma lista exibida na página.

## Como usar

1. Abra o arquivo `index.html` em um navegador modern (Chrome, Edge, Firefox).
2. Preencha os campos: Nome, Data e Hora.
3. Clique em "Agendar" para adicionar o agendamento à lista abaixo.

## Validações

- Todos os campos são obrigatórios.
- O campo `Nome` aceita apenas letras e espaços (inclui caracteres com acento).
- Após adicionar, os campos são limpos automaticamente.

## Estrutura de arquivos

- `index.html` — marcação da página e elementos do formulário.
- `script.js` — lógica de validação e manipulação do DOM (função `agendar()`).
- `style.css` — estilos e layout responsivo simples.

## Limitações conhecidas

- Os agendamentos são mantidos apenas no DOM; não há persistência (localStorage ou backend).
- Não há verificação de conflitos de horário nem bloqueio de datas passadas.


## Autor

Miguel santos Almeida de Lima / Afim de usar conhecimentos sobre HMTL, CSS E JS