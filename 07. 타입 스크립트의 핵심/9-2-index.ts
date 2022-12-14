{
    const obj = {
        name: 'kina'
    }

    obj.name; //kina
    obj['name'] //ellie

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    };

    type Name = Animal['name'] // string
    const text : Name = 'hello'

    type Gender = Animal['gender']; //'male' | 'female'

    type Keys = keyof Animal // 'name' | 'age' | 'gender'

    const key: Keys = 'gender'

    type Person = {
        name: string;
        gender: Animal['gender']
    }

    const person: Person = {
        name: 'kina',
        gender: 'male'
    }

    //잔디 심기 테스트
}