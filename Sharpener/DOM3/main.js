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
const phone = document.querySelector("#phoneNo");
const userList = document.querySelector('#users');


// Delete event 
userList.addEventListener('click',removeItem);


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
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${phone.value}`));
        
        userList.appendChild(li);

        // Retrieve existing user data from local storage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // create an object to store data
        let formData = {
        name: nameInput.value,
        email: emailInput.value,
        phoneNo: phone.value
        };

        users.push(formData);
        
        // Clear fields 
        nameInput.value = '';
        emailInput.value = '';
        phone.value = '';

        // store object in local storage 
        localStorage.setItem('users', JSON.stringify(users))

        // create del button element
        var deleteBtn  = document.createElement('button');

        // Add classes to del button 
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete '

        // Append text node
        deleteBtn.appendChild(document.createTextNode('Delete'));

        li.appendChild(deleteBtn);

        // create del button element
        var editBtn  = document.createElement('button');

        // Add classes to del button 
        editBtn.className = 'btn btn-danger btn-sm float-right edit ml-1'

        // Append text node
        editBtn.appendChild(document.createTextNode('Edit'));

        li.appendChild(editBtn);

        // Append li to list
        userList.appendChild(li);

    } 

}

function removeItem(e)
{

    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?'))
        {
            var li = e.target.parentElement;
            userList.removeChild(li);
            
            console.log(li);

            // Get the user data from the li element's text
            const [userName, userEmail, userPhone] = li.textContent.split(" : ");

            // Remove the user from localStorage using their data as the filter
            let users = JSON.parse(localStorage.getItem("users")) || [];

            console.log(users);
            users = users.filter(user => {
                return user.name != userName &&
                        user.email != userEmail &&
                        user.phone != userPhone
            });

            console.log(users);

            localStorage.setItem("users", JSON.stringify(users));

        }
    }

    if(e.target.classList.contains('edit'))
    {
            var li = e.target.parentElement;
            userList.removeChild(li);
            
            console.log(li);

            // Get the user data from the li element's text
            const [userName, userEmail, userPhone] = li.textContent.split(" : ");

            // Remove the user from localStorage using their data as the filter
            let users = JSON.parse(localStorage.getItem("users")) || [];

            console.log(users);
            users = users.filter(user => {
                return user.name != userName &&
                user.email != userEmail &&
                user.phone != userPhone
            });

            console.log(users);

            localStorage.setItem("users", JSON.stringify(users));
      
    }

}
