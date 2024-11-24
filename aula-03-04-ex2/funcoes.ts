function somar(nums:Array<number>):number {

    let sum = 0

    nums.forEach((num:number) => sum += num)

    return sum;

}

function mostrarMaior(nums:Array<number>):number {

    let maior:number = 0;

    for (let i:number = 0; i < nums.length; i++) {

        if (i == 0) {
            maior = nums[i];
        }else{

            if (nums[i] > maior) {
                maior = nums[i];
            }

        }

    }

    return maior;

}

function mostrarMenor(nums:Array<number>):number {

    let menor:number = 0;

    for (let i:number = 0; i < nums.length; i++) {

        if (i == 0) {
            menor = nums[i];
        }else{

            if (nums[i] < menor) {
                menor = nums[i];
            }

        }

    }

    return menor;

}

export {somar,mostrarMenor,mostrarMaior};