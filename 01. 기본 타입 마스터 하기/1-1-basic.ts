{
    /**
     * JavaScript
     * Primitive: number, strong, boolean, bigint, symbol, null, undefined
     * Object: function, array...
     */

    //number
    const num:number = 1;

    //string
    const str:string = 'hello';

    //boolean
    const bool:boolean = true;

    //undefined
    let age: number | undefined
    age = undefined;
    age = 1;
    function find(): number | undefined{
        return undefined
    }

    //null: λ¨λ μ¬μ©x π©
    let person: null; // π©
    let person2: string | null; // o

    //unknown: κ°λ₯νλ©΄ μ°μ§ μκΈ° π©
    //νμμ€ν¬λ¦½νΈμμ νμμ΄ μλ μλ°μ€ν¬λ¦½νΈ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ©ν  λ μ¬μ©ν  μ μμ
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    //any: κ°λ₯νλ©΄ μ°μ§ μκΈ° π©
    let anything: any = 0;
    anything = 'hello';

    //void: μλ¬΄κ²λ λ¦¬ν΄νμ§ μμ λ
    function print(): void{
        console.log('hello');
    }
    let unusable: void = undefined; //μ¬μ©νμ§ μμ π©

    //never: λ¦¬ν΄νμ§ μμΌλ €κ³  ν  λ
    function throwError(message:string): never{
        //message => serrver (log)
        throw new Error(message);
        while(true){}
    }
    let neverEnding: never; //μ¬μ©νμ§ μμ π©

    //object: κ°λ₯νλ©΄ μ΄λ€ νμμΈμ§ μ μΈν΄μ μ¬μ©ν΄μΌ ν¨ π©
    let obj: object;
    function acceptSomeObject(obj: object){}
    acceptSomeObject({name:'kina'});
    acceptSomeObject({animal:'dog'});
}