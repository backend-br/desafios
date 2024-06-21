# Autenticação

O desafio é implementar um serviço que valide o acessToken recebido no header da requisição.

Você pode criar um método mock de validação do acessToken.

Você deve criar uma forma de interceptar a requisição e validar antes que ela chegue de fato no seu controller.

Assim, ao adicionar um novo endpoint, este já será interceptado e validado.

## Exemplo

Seu serviço recebe uma chamada no endpoint abaixo.

**[GET]** `{{host}}/foo-bar`
Header
    "Authorization": "vYQIYxOpyfr=="

Se o acessToken enviado no header Authorization for válido, então, seu serviço deve retornar uma resposta de sucesso.

```
HTTP/1.1 204 NoContent
```

Caso contrário, retorne uma mensagem informando que o acessToken é inválido. Você pode escolher como será sua estrutura para as mensagens de erro.

```
HTTP/1.1 401 Unauthorized
```

```json
{
    ...
}
```

## Soluções

Neste [tópico](SOLUTIONS.md), você encontrará soluções para esse desafio, feitas por outros membros da comunidade.
