# Aula 2: Introdução ao HTML com JavaScript

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



## Exercício

Criar 4 algoritmos em JavaScript, de preferência em pasta distintas 

Criar dois algoritmos com entrada e saída

- Um com if, else if, else

- Outro com switch case

Criar dois algoritmos com entrada apenas

- Um com um for
- Outro com while ou do while



Enviar compactado (.zip) ou o link do repositório pela tarefa no classroom até dia 21/04/2025;



