# Criptografia

Seu desafio será implementar a criptografia em um sistema de forma transparente para a API e para as camadas de
serviço de sua aplicação. O objetivo é garantir que os campos sensíveis dos objetos de entidade não sejam visíveis
diretamente, realizando a criptografia em tempo de execução durante a conversão da entidade para a coluna correspondente
no banco de dados, e vice-versa.

## Exemplo

Considere os campos `userDocument` e `creditCardToken` como campos sensíveis que devem ser criptografados. A tabela de
exemplo seria a seguinte:

| id | userDocument     | creditCardToken | value |
|:---|:-----------------|:----------------|:------|
| 1  | MzYxNDA3ODE4MzM= | YWJjMTIz        | 5999  |
| 2  | MzI5NDU0MTA1ODM= | eHl6NDU2        | 1000  |
| 3  | NzYwNzc0NTIzODY= | Nzg5eHB0bw==    | 1500  |

A estrutura da entidade correspondente seria a seguinte:

| Campo           | Tipo   |
|:----------------|:-------|
| id              | Long   |
| userDocument    | String |
| creditCardToken | String |
| value           | Long   |

## Regras

- Implemente um CRUD simples considerando os campos mencionados acima como sensíveis.
- Utilize o algoritmo de criptografia de sua preferência. Sugestões: [SHA-512](https://en.wikipedia.org/wiki/SHA-2) ou
  [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2).

## Soluções

Neste [tópico](SOLUTIONS.md), você encontrará soluções para esse desafio, feitas por outros membros da comunidade.
