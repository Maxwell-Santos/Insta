# Login reimaginado Instagram

- Instagram Reimaginado: <a href="https://instagram-reimagined.vercel.app/">Link do site</a>

![Foto do projeto](./assets/img/print.jpg)
## As cores se adaptam ao tema do seu aparelho !
  
- Eu fiz isso de maneira fácil usando a propriedade <code>@media (prefers-color-scheme: dark/light){}</code> do CSS
- Também as variáveis do CSS ajudaram bastante, ela funciona assim:
<a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/:root">:root</a>

```css
/*definir no root do css*/
:root{
  /*estrutura da variável*/
  --nome-da-variavel: conteúdo;

  /*exemplo*/
  --background-color-form: #f2f2f2f2;
}
.form{
  /*usando a variável*/
  background-color: var(--background-color-form);
}
```
- Sabendo disso, basicamente consigo reutilizar bastante estilos e não ficar repetindo código.

### Linguagens
- HTML
- CSS3
- Javascript
### Processo
 <p>Bom eu desenvolvi inspirado totalmente nas cores da logo do Instagram, as cores do fundo ja deixa isso claro... </p>

 <p>As ondas foi algo que peguei ja pronto de um site de cede backgrounds para projetos <a href="https://animatedbackgrounds.me/">Animated Backgrounds</a></p>

## Tela de Loading

```js
//dispara essa função anônima quando a tela terminar de carregar
window.addEventListener('load', () => {

  //dependendo da velocidade da sua internet, pode ser que carregue muito rápido, daí a tela só pisca a animação de loading
  //portanto, depois de 1s de carregada a página, a tela de loading sumirá
  setTimeout(() => {
    const preloader = document.querySelector('.preload')

    preloader.classList.add('finish'); //essa classe tira a tela de loading 

  }, 1000);

});
```
- micro validação de formulário

```js
const btnSubmit = document.querySelector('#submit');
const inputs = document.querySelectorAll('.form input');

//Essa função vai realizar um loop em cada um dos inputs e verificar se o valor está preenchido
function checkInputs(inputs) {
  var filled = true;

  inputs.forEach(input => {
    //caso algum input esteja vazio, a variável filled, vai ser setada para false e retornada como false
    //daí o botão permanece desabilitado
    if (input.value === "") {
      filled = false;
    }
  });

  return filled;
}

inputs.forEach(function (input) {
  //cada tecla vez que alguma tecla for clicada, vai disparar essa função
  //que chama a função checkInputs, levando a lista de inputs como parâmetro, e verificando se ele é vazio
  input.addEventListener("keyup", () => {
    //usei o operador ternário porque achei mais intuitivo 
    //se a função retornar true, o botão é habilitado, caso contrário, não
    checkInputs(inputs) ? btnSubmit.disabled = false : btnSubmit.disabled = true;
  });
});


//show password
const inputPass = document.querySelector('#pass');
const btnShowPass = document.querySelector('.pass-content button');

function showPass() {
  inputPass.type == 'password' ? 
  inputPass.setAttribute('type', 'text') : inputPass.setAttribute('type', 'password');
}

inputPass.addEventListener('keyup', () => {
  inputPass.value != 0 ?
    btnShowPass.disabled = false : btnShowPass.disabled = true;
})
```
 * O modo escuro foi feito apenas pensando no mobile, por conta das imagens de celular serem brancas, achei que ficou meio destoante *