{
    /**
     * Type Assertions π©
     * νμμ μ λ§ μ λ§ νμ νλ κ²½μ°κ° μλλΌλ©΄ μ°μ§ μκΈ°
     */

    function jsStrFunc(): any{
        return 'hello';
    }

    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)) // π±

    function findNumbers(): number[] | undefined{
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2) // π±
}
