//Task1

const user={
    name:'John',
    surname:'Smith'

};
user.name='Pete';

delete user.name; 

//task2  Обьект можно изменить,потому что const относится к переменной
// user, а не к ее содержимому

//task3

let salaries={
    John:100,
    Ann:160,
    Pete:130
    };
    let sum=0;
    for(let i in salaries){
        sum+=salaries[i]
    }
    alert(sum);