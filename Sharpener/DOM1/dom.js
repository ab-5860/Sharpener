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

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);

// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.background = 'yellow';
// // items.style.background = '#f4f4f4';

// for(var i =0; i<items.length;i++)
// {
//     items[i].style.background = '#f4f4f4';
// }

// items[2].style.background = 'green';
// for(var i = 0;i<items.length;i++)
// {
//     items[i].style.fontWeight = 'bold';
// }

// GET ELEMENT BY TAG NAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);

// li[1].textContent =   'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.background = 'yellow';

// for(var i=0; i <li.length;i++)
// {
//     li[i].style.background = '#f4f4f4';
// }


// QUERY SELECTOR - you can use any css selector like any JQuery

// var header = document.querySelector('#main-header')  // # -> Id
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World ';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";


// var item = document.querySelector('.list-group-item');  // . -> class
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

// QUERY SELECTOR ALL

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var items = document.querySelectorAll('.list-group-item');
// console.log(items);
// items[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.background = 'green';
// }


// // TRAVERSING THE DOM

// var itemList = document.querySelector("#items");

// // parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.background = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// // parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.background = '#f4f4f4';
// console.log(itemList.parentElement.parentNode);

// // childeNode [no use]
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[2]);

// itemList.children[2].style.background = 'yellow';


// // FirstChild [ NO USE]
// console.log(itemList.firstChild);

// // first element child

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";


// // LastChild [ NO USE]
// console.log(itemList.lastChild);

// // last element child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

// // nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);


// // previousSibling

// console.log(itemList.previousSibling);

// // previousElementSibling

// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color = 'green'

// // create element

// // create a div
// var newDiv = document.createElement('div');

// // Add a class
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1'

// // Add attribute
// newDiv.setAttribute('title', 'Hello Div')

// // create text node

// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');


console.log(newDiv);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);


// Adding "Hello World" before Item Lister

var ItemLister = document.querySelector("#header-title")

var helloItem = document.createElement('h2');

helloItem.textContent = 'HEllo';

ItemLister.parentNode.insertBefore(helloItem,ItemLister);

//add HEllo word before Item 1
var firstItem = document.querySelector("#items")
console.log(firstItem)

var helloItem1 = document.createElement('li');
helloItem1.innerHTML = '<li>HEllo</li>'

firstItem.insertBefore(helloItem1, firstItem);
