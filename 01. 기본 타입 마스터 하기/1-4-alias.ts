{
    /**
     * Type Aliases
     * 타입을 변수처럼 선언하는 방법
     */
    type Text = string;
    const name: Text = 'ellie';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    } 
    const student: Student = {
        name: 'ellie',
        age:12,
    }

    /**
     * String Literal Types
     */
    type Name = 'name';
    let kinaName: Name;
    kinaName = 'name';
    type JSON = 'json';
    const json: JSON = 'json'

    type Boal = true;
    const isCat: Boal = true
}
