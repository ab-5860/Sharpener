var form  = document.getElementById('addForm');

var itemList = document.getElementById('items');

// form submit event

form.addEventListener('submit', addItem);



// Delete event 
itemList.addEventListener('click',removeItem);


// Add item

function addItem(e)
{
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;
    
    // create new li element
    var li  = document.createElement('li');

    // Add class
    li.className = 'list-group-item';


    var buttonContainer = document.createElement('div');
    buttonContainer.style.float = 'right';

    // create del button element
    var deleteBtn  = document.createElement('button');

    // Add classes to del button 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete '

    // Append text node
    deleteBtn.appendChild(document.createTextNode('x'));


    // create edit button element
    var editBtn = document.createElement('button');

    // Add classes to edit button
    editBtn.className = 'btn btn-danger btn-sm float-right edit ml-1'

    // Append text node
    editBtn.appendChild(document.createTextNode('edit'));


  // Add input value and buttons to li
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

    // Append li to list
    itemList.appendChild(li);
}


function removeItem(e)
{

    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}