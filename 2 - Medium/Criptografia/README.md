Criptografia
===========================

Seu desafio será implementar a criptografia de um sistema de maneira transparente para a API e para as camadas de serviço de sua aplicação. Ou seja, seus objetos de entidades não devem transparecer se existe algum campo sensível ou não. A criptografia deve ser feita em uma conversão em tempo de execução da entidade para a coluna em seu banco de dados, e vice-versa

#### Exemplo de tabela

Considere `userDocument` e `creditCardToken` como campos sensíveis e que devem ser encriptados:

| id | userDocument | creditCardToken | value |
|------|--------------|-----------------|-------|
| 1 | MzYxNDA3ODE4MzM= | YWJjMTIz | 5999 |
| 2 | MzI5NDU0MTA1ODM= | eHl6NDU2 | 1000 |
| 3 | NzYwNzc0NTIzODY= | Nzg5eHB0bw== | 1500 |

onde, na sua entidade:

| Campo | Tipo |
|-----------------|--------|
| id | Long |
| userDocument | String |
| creditCardToken | String |
| value | Long |

1. Faça um CRUD simples, considerando como sensíveis os campos citados acima

2. Use o algoritmo de sua preferência para criptografia. Sugestão: [SHA-512](https://en.wikipedia.org/wiki/SHA-2) ou [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2)

3. Caso tenha alguma dúvida na implementação do conversor, procure por `Attribute Converter` na sua linguagem