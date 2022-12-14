{
    // JavaScript ๐ฉ
    function jsAdd(num1, num2){
        return num1+num2
    }

    // TypeScript โจ
    function add(num1: number, num2: number): number{
        return num1+num2
    }

    // JavaScript ๐ฉ
    function jsFetchNumb(id){
        //code ....
        //code ....
        return new Promise((resolve, reject)=>{
            resolve(100)
        })
    }

    // TypeScript โจ
    function tsFetchNumb(id: string): Promise<number>{
        return new Promise((resolve, reject)=>{
            resolve(100)
        })
    }

    //JavaScript โจ => TypeScript
    //๋ ๋ค ์ฌ์ฉ ๊ฐ๋ฅํ์ง๋ง, Ts์์ ๋ ๊ธฐ๋ฅ์ด ๊ฐํ๋ ๊ธฐ๋ฅ๋ค
    //Optional parameter: ์ ๋ฌํด๋ ๋๊ณ , ์ ๋ฌํ์ง ์์๋ ๋๋ ์ธ์๋ฅผ ์ ์ธํ  ๋ ์ฌ์ฉ
    //Optional์ธ ๊ฒฝ์ฐ undefined๋ฅผ ์ ๋ฌํ์ง ์์๋ ๋๋ค
    function printName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName);
    }
    printName('kim', 'kina')
    printName('kim')
    printName('kim', undefined)

    //Default parameter
    function printMessage(message: string = 'default message'){
        console.log(message)
    }
    printMessage()

    //Rest parameter
    function addNumbers(...numbers: number[]): number{
        return numbers.reduce((a,b)=>a+b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1,2,3,4));
    console.log(addNumbers(1,2,3,4,5,0));
}