interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee{
    pay() {
        console.log('full time')
    }

    workFullTime() {

    }
}

class PartTimeEmployee implements Employee{
    pay() {
        console.log('part time')
    }

    workPartTime() {

    }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수 💩
function payBad(employee: Employee): Employee{
    employee.pay();
    return employee
} 

function payGood<T extends Employee>(employee: T) : T {
    employee.pay()
    return employee
}

const kina = new FullTimeEmployee();
const bob = new PartTimeEmployee();

// 클래스의 정보를 잃어버린다.
// 왜? payBad는 class가 아니라 type을 리턴하기 때문이다.
const kinaAfterPay = payBad(kina); 
const bobAfterPay = payBad(bob);

const obj = {
    name: 'ellie',
    age:20,
}

const obj2 = {
    animal: 'hi'
}

function getValue<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key]
}

console.log(getValue(obj, 'name'))
console.log(getValue(obj, 'age'))
console.log(getValue(obj2, 'animal'))