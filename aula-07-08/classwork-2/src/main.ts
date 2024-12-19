import './style.css'

let btnIniciar = document.querySelector<HTMLElement>('button');
let bodyPage = document.querySelector<HTMLElement>('body');

btnIniciar?.addEventListener('click', function () {

    let inputNumber = document.querySelector<HTMLInputElement>('input');

    let contador = document.querySelector<HTMLElement>('.num-cont');

    if (inputNumber) {

        let valor = parseInt(inputNumber.value)

        let meuIntervalo = setInterval(function () {

            if (contador) {
                contador.textContent = `${valor}`;
                valor--;

                if (valor == -1) {
                    clearInterval(meuIntervalo);
                    if (bodyPage) {
                        bodyPage.innerHTML = `
                        
                            <div class='exp'>

                                <span> BOOM! </span>

                            </div>
                        
                        `;
                    }
                }

            }

        }, 1000);

    }

});

