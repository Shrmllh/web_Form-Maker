const insert = () => {

    let type = document.querySelector('#type').value;
    let label = document.querySelector('#label').value;

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'textfield': appendTextField(label)
            break
    }

}

const clearForm = () => {
    document.querySelector('#display').innerHTML = ''
}


const appendText = (label = "Default") => {
    

    let elem = document.createElement('div')
    elem.setAttribute('class', 'd-flex flex-row align-items-center')

    
    let input = document.createElement('input')
    input.setAttribute('placeholder', label)
    input.setAttribute('class', 'form-control mt-2')
    elem.append(input)

    let deleteButton = createDeleteButton(elem)
    elem.append(deleteButton)

    document.querySelector('#display').append(elem)

}

const appendButton = (label = "Default") => {

    let elem = document.createElement('div')
    elem.setAttribute('class', 'd-flex flex-row align-items-center')

    let button = document.createElement('button')
    button.setAttribute('class', 'btn btn-primary form-control mt-2')
    button.textContent = label
    elem.append(button)

    let deleteButton = createDeleteButton(elem)
    elem.append(deleteButton)

    document.querySelector('#display').append(elem)

}

const appendTextField = (label = "Default") => {

    let elem = document.createElement('div')
    elem.setAttribute('class', 'd-flex flex-row align-items-center')

    let textField = document.createElement('input')
    textField.setAttribute('class', 'form-control mt-2')
    textField.setAttribute('placeholder', label)
    elem.append(textField)

    let deleteButton = createDeleteButton(elem)
    elem.append(deleteButton)

    document.querySelector('#display').append(elem)

}

const createDeleteButton = (elem) => {
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'btn btn-danger ms-2')
    deleteButton.textContent = 'X'
    deleteButton.onclick = () => {
        elem.remove()
    }
    return deleteButton
}