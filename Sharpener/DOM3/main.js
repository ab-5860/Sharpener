// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {

//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');

    

// });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '')
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout( () => msg.remove(), 3000)

    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);

        // Retrieve existing user data from local storage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // create an object to store data
        let formData = {
        name: nameInput.value,
        email: emailInput.value,
        };

        users.push(formData);
        
        // Clear fields 
        nameInput.value = '';
        emailInput.value = '';

        // store object in local storage 
        localStorage.setItem('users', JSON.stringify(users))
    } 

}
