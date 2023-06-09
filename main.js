const form = document.querySelector('#myform')
const amount = document.querySelector('#amount')
const description = document.querySelector('#description')
const category = document.querySelector('#category')
const userlist = document.querySelector('#users')

form.addEventListener('submit', onsubmit)

function onsubmit(e){
    e.preventDefault();

    let obj = {
        amount : amount.value,
        description : description.value,
        category : category.value,
    } 
    const li = document.createElement('li')
    const btn = document.createElement('button')
    const edit = document.createElement('button')
    let btntxt = document.createTextNode('Delete')
    let edittxt = document.createTextNode('Edit')

    let text = obj.amount + '-' + obj.description + '-' + obj.category

    li.appendChild(document.createTextNode(text))
    btn.appendChild(btntxt)
    edit.appendChild(edittxt)

    btn.onclick = (e) => {
        localStorage.removeItem(obj.amount) 
        userlist.removeChild(e.target.parentElement)
    }
    edit.onclick = (e) => {
        localStorage.removeItem(obj.amount)
        userlist.removeChild(e.target.parentElement)
        document.querySelector('#amount').value = obj.amount
        document.querySelector('#description').value = obj.description
        document.querySelector('#category').value = obj.category
    }
    li.appendChild(btn)
    li.appendChild(edit)
    userlist.append(li);

    let serialized = JSON.stringify(obj)

    localStorage.setItem(amount.value, serialized)
}
