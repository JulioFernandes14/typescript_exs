const imagens = ['http://foundtheworld.com/wp-content/uploads/2014/06/Cancun.jpg','https://media.holidaycheck.com/images/2ed73051-c798-3111-ad24-ac889b4b3485','https://conocedores.com/wp-content/uploads/2020/11/isla-san-andres-05112020.jpg'];

export function gerarImagens(element:HTMLElement) {

    imagens.forEach((image:string) => {

        element.innerHTML += `<img src="${image}" style="width:200px; height:200px; margin:10px;">`

    })

}