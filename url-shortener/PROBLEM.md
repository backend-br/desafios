# Encurtador de URLs

O seu desafio será implementar um serviço que permite encurtar URLs longas para torná-las mais compactas e fáceis de
compartilhar.

## Exemplo

O seu serviço recebe uma chamada para encurtar uma URL.

**[POST]** `{{host}}/shorten-url`

```json
{
    "url": "https://backendbrasil.com.br"
}
```

E retorna um JSON com a URL encurtada:

```
HTTP/1.1 200 OK
```

```json
{
    "url": "https://xxx.com/DXB6V"
}
```

## Requisitos

- O encurtador de URLs recebe uma URL longa como parâmetro inicial.
- O encurtamento será composto por um mínimo de 05 e um máximo de 10 caracteres.
- Apenas letras e números são permitidos no encurtamento.
- A URL encurtada será salva no banco de dados com um prazo de validade (você pode escolher a duração desejada).
- Ao receber uma chamada para a URL encurtada `https://xxx.com/DXB6V`, você deve fazer o redirecionamento para a
  URL original salva no banco de dados. Caso a URL não seja encontrada no banco, retorne o código de
  status `HTTP 404 (Not Found)`.

## Soluções

Neste [tópico](SOLUTIONS.md), você encontrará soluções para esse desafio, feitas por outros membros da comunidade.
