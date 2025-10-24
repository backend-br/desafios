# Autenticação

O seu desafio será implementar um serviço que valide um token de acesso recebido no header da requisição HTTP.

## Exemplo

O seu serviço recebe uma chamada no endpoint abaixo.

**[GET]** `{{host}}/foo-bar`

| Parâmetro |  Tipo  | Chave         | Valor                            |
|:---------:|:------:|---------------|:---------------------------------|
| `header`  | string | Authorization | Seu token. e.g (`vYQIYxOpyfr==`) |

Se o token enviado no header `Authorization` for válido, então, uma resposta de sucesso deve ser retornada.

```
HTTP/1.1 204 NoContent
```

Se o token for inválido, o seu serviço deve retornar uma mensagem de erro, indicando que o token é inválido. A
estrutura da mensagem de erro pode ser definida por você, mas deve conter informações claras sobre o problema.

```
HTTP/1.1 401 Unauthorized
```

```json
{
    ...
}
```

## Requisitos

- Deve ser criado um serviço para a validação do token. Implementar uma lógica concreta de validação é opcional,
  podendo ser utilizado um mock para este fim.
- Deve ser implementada uma forma de interceptar a requisição e validar o token antes que ela chegue ao seu controlador.
- A implementação deve ser feita de maneira que continue a funcionar corretamente após a adição de novos endpoints.

## Soluções

Neste [tópico](SOLUTIONS.md), você encontrará soluções para esse desafio, feitas por outros membros da comunidade.
