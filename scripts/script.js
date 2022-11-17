const cars = [

    {
    
    title: "BMW",
    
    price: "40000",
    
    count: "15"
    
    },
    
    {
    
    title: "Toyota",
    
    price: "20000",
    
    count: "13"
    
    },
    
    {
    
    title: "Ford",
    
    price: "30000",
    
    count: "20"
    
    },
    
    {
    
    title: "Chevrolet",
    
    price: "60000",
    
    count: "9"
    
    },
    
    {
    
    title: "Volkswagen",
    
    price: "30000",
    
    count: "13"
    
    },
    
    ];

// Задача 1

const body = document.querySelector('body');

const ol_list = document.createElement('ol');

body.append(ol_list);

let total_price = 0;
let total_count = 0;

for (const iterator of cars) {
    let {title, price, count} = iterator;
    const li_elem = document.createElement('li');
    li_elem.innerText = `Осталось ${count} машин ${title} по цене ${price}`;
    ol_list.append(li_elem);
    total_price += Number.parseInt(price, 10) * Number.parseInt(count, 10);
    total_count += Number.parseInt(count, 10);
}

// Задача 2

const all_price_par = document.createElement('p');
const all_count_par = document.createElement('p');
all_price_par.innerText = `Общая сумма товаров: ${total_price}`;
all_count_par.innerText = `Общее количество товаров: ${total_count}`;
body.append(all_price_par, all_count_par);

// Задача 3

const table = document.createElement('table');

const tr_head = document.createElement('tr');
const th_num = document.createElement('th');
th_num.innerText = '№';
th_num.classList.add('th');
const th_name = document.createElement('th');
th_name.innerText = 'Full Name';
th_name.classList.add('th');
const th_position = document.createElement('th');
th_position.innerText = 'Position';
th_position.classList.add('th');
const th_salary = document.createElement('th');
th_salary.innerText = 'Salary';
th_salary.classList.add('th');

tr_head.append(th_num, th_name, th_position, th_salary);

const tr_1 = document.createElement('tr');
const td_num1 = document.createElement('td');
td_num1.innerText = '1';
td_num1.classList.add('td');
const td_name1 = document.createElement('td');
td_name1.innerText = 'Bill Gates';
td_name1.classList.add('td');
const td_position1 = document.createElement('td');
td_position1.innerText = 'Founder Microsoft';
td_position1.classList.add('td');
const td_salary1 = document.createElement('td');
td_salary1.innerText = '$1000';
td_salary1.classList.add('td');

tr_1.append(td_num1, td_name1, td_position1, td_salary1);

const tr_2 = document.createElement('tr');
const td_num2 = document.createElement('td');
td_num2.innerText = '2';
td_num2.classList.add('td');
const td_name2 = document.createElement('td');
td_name2.innerText = 'Steve Jobs';
td_name2.classList.add('td');
const td_position2 = document.createElement('td');
td_position2.innerText = 'Founder Apple';
td_position2.classList.add('td');
const td_salary2 = document.createElement('td');
td_salary2.innerText = '$1200';
td_salary2.classList.add('td');

tr_2.append(td_num2, td_name2, td_position2, td_salary2);

const tr_3 = document.createElement('tr');
const td_num3 = document.createElement('td');
td_num3.innerText = '3';
td_num3.classList.add('td');
const td_name3 = document.createElement('td');
td_name3.innerText = 'Larry Page';
td_name3.classList.add('td');
const td_position3 = document.createElement('td');
td_position3.innerText = 'Founder Google';
td_position3.classList.add('td');
const td_salary3 = document.createElement('td');
td_salary3.innerText = '$1100';
td_salary3.classList.add('td');

tr_3.append(td_num3, td_name3, td_position3, td_salary3);

const tr_4 = document.createElement('tr');
const td_num4 = document.createElement('td');
td_num4.innerText = '4';
td_num4.classList.add('td');
const td_name4 = document.createElement('td');
td_name4.innerText = 'Mark Zuckeberg';
td_name4.classList.add('td');
const td_position4 = document.createElement('td');
td_position4.innerText = 'Founder Facebook';
td_position4.classList.add('td');
const td_salary4 = document.createElement('td');
td_salary4.innerText = '$1300';
td_salary4.classList.add('td');

tr_4.append(td_num4, td_name4, td_position4, td_salary4);

table.append(tr_head, tr_1, tr_2, tr_3, tr_4);
body.append(table);



