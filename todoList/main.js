var form = document.querySelector('form');
var input = document.querySelector('.form-control');
var errMsg = document.querySelector('#errMsg')
var todoList = document.querySelector('#todoList');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(input.value === ''){
         errMsg.innerHTML = 'Please Enter a Task';
         errMsg.classList.add('err');
    }else{

        // create btn
        var btn = document.createElement('button');
        btn.innerHTML = 'X';
        btn.classList = 'btn btn-danger float-end';
        // create li
        var li = document.createElement('li');
        li.innerHTML = input.value;
        li.classList = 'list-group-item';
        // append button to li;
        li.appendChild(btn);
        // append li to ul
        todoList.appendChild(li);
        // reset errMsg and Input field
        errMsg.innerHTML = '';
        input.value = '';
    }
});

todoList.addEventListener('click', (e)=>{
    //  console.log(e.target);
    if(e.target.classList.contains('list-group-item')){
        e.target.classList.toggle('cancel')
    } else if(e.target.classList.contains('btn')){
        var parentLi = e.target.parentElement;
        parentLi.remove();
    }  
});