Encurtador de URLs
===========================

Seu serviço irá receber inicialmente como parâmetro uma URL que deverá ser encurtada seguindo as seguintes regras:

1. Mínimo de 5 e máximo de 10 caracteres.

2. Apenas letras e números. 

A url retornada deverá ser salva no banco de dados e possui prazo de validade (você poderá escolher quanto tempo) e ao receber uma url encurtada, deverá fazer o redirecionamento para a url salva no banco.

#### Exemplo ao encurtar
- Seu sitema recebe uma chamada para encurtar a url `backendbrasil.com.br` e retorna o seguinte json

``` 
{ 
  newUrl: "http://localhost:8081/abc123ab";
} 
```

#### Exemplo ao redirecionar
- Ao receber uma chamada para `http://localhost:8081/abc123ab` você irá retorna um redirecionamento para a url salva no banco (`backendbrasil.com.br`), caso não seja encontrada, retornar HTTP 404
