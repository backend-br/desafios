# Encurtador de URLs

Seu desafio será implementar um serviço permite encurtar URLs longas para torná-las mais compactas e fáceis de
compartilhar.

## Exemplo

Seu sistema recebe uma chamada para encurtar a URL `backendbrasil.com.br` e retorna o seguinte JSON:

```json
{
    "newUrl": "http://localhost:8081/abc123ab"
}
```

Ao receber uma chamada para a URL encurtada `http://localhost:8081/abc123ab`, você deve fazer o redirecionamento para a
URL original salva no banco de dados (`backendbrasil.com.br`). Caso a URL encurtada não seja encontrada no banco,
retorne o código de status `HTTP 404 (Not Found)`.

## Requisitos

- O encurtador de URLs recebe uma URL longa como parâmetro inicial.
- O encurtamento será composto por um mínimo de 05 e um máximo de 10 caracteres.
- Apenas letras e números são permitidos no encurtamento.
- A URL encurtada será salva no banco de dados com um prazo de validade (você pode escolher a duração desejada).
- Caso a URL encurtada não seja encontrada no banco, retorne o código de status `HTTP 404 (Not Found)`.

## Soluções

Neste [tópico](SOLUTIONS.md), você encontrará soluções para esse desafio, feitas por outros membros da comunidade.
