// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// // document.title = 123

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// console.log(document.forms[0]);
// console.log(document.links);

// GETELEMENTBYID //

// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';

// console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h3>Hello</h3>'; 

// header.style.borderBottom = 'solid 3px #000';


// GET ELEMENTS BY CLASS NAME

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);

items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.background = 'yellow';
// items.style.background = '#f4f4f4';

for(var i =0; i<items.length;i++)
{
    items[i].style.background = '#f4f4f4';
}