# Senha segura

O seu desafio será implementar um serviço que valide se uma senha é considerada segura com base em critérios
pré-definidos.

## Exemplo

O seu serviço recebe uma chamada para validar uma senha.

**[POST]** `{{host}}/validate-password`

```json
{
    "password": "vYQIYxO&p$yfI^r"
}
```

Se a senha atender a todos os critérios de segurança, então, seu serviço deve retornar uma resposta de sucesso.

```
HTTP/1.1 204 NoContent
```

Caso contrário, retorne uma mensagem informando quais critérios não foram atendidos. Você pode escolher como será sua
estrutura para as mensagens de erro.

```
HTTP/1.1 400 Bad Request
```

```json
{
    ...
}
```

## Requisitos

- Verificar se a senha possui pelo menos 08 caracteres.
- Verificar se a senha contém pelo menos uma letra maiúscula.
- Verificar se a senha contém pelo menos uma letra minúscula.
- Verificar se a senha contém pelo menos um dígito numérico.
- Verificar se a senha contém pelo menos um character especial (e.g, !@#$%).

## Soluções

Neste [tópico](SOLUTIONS.md), você encontrará soluções para esse desafio, feitas por outros membros da comunidade.
