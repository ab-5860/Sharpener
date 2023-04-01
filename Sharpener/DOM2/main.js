var form  = document.getElementById('addForm');
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// Delete event 
itemList.addEventListener('click',removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

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


    // description addition
    const description = document.getElementById('description').value;

    const descriptionNode = document.createTextNode(" "+description);

  // Add input value and buttons to li
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(descriptionNode);
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


// Filter Items

function filterItems(e)
{
    // convert text to lowercase 
    var text = e.target.value.toLowerCase();

    // Get li's
  var items = itemList.getElementsByTagName('li');

  // convert HTML collection into an array
  Array.from(items).forEach(function(item)
  {
        var itemName = item.firstChild.textContent;
        var descName = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || descName.toLowerCase().indexOf(text) != -1)
        {
          item.style.display = 'block';
        }else{
          item.style.display = 'none';
        }
  });

}