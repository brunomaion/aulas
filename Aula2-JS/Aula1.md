# Aula 1: Introdução ao HTML com JavaScript

## Estrutura Básica do HTML referenciando externamente

Os arquivos deve estar na "MinhaPasta", este nome é exemplo! A única regra é quando referenciar o script deve ser o mesmo nome

/MinhaPasta

- index.html
- script.js

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Minha Primeira Página HTML</title>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <p>Esta é uma página HTML simples.</p>
    <button onclick="mostrarMensagem()">Clique aqui</button>

    <script src="script.js"></script>
</body>
</html>
```

## Criando o arquivo JavaScript

Crie um arquivo chamado `script.js` na mesma pasta e adicione o seguinte código:

```javascript
function mostrarMensagem() {
    alert('Você clicou no botão!');
}
```

## Como funciona?

- O botão chama a função `mostrarMensagem()` quando clicado.
- O arquivo JavaScript está separado e incluído com `<script src="script.js"></script>`.
