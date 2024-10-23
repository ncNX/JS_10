                  
// const testDiv = document.getElementById('test')

// console.log(testDiv)

// testDiv.classList.add('testClass')



// const testDiv = document.getElementsByClassName('queryClass')

// console.log(testDiv)

// testDiv[0].classList.add('testClass')



// const testDiv = document.getElementsByTagName('div')

// console.log(testDiv)

// testDiv[0].classList.add('testClass')



// const testDiv = document.getElementsByTagName('#test')

// console.log(testDiv)

// testDiv.classList.add('testClass')



//================================

const toDoList = []

const addToDoInput = document.getElementById('addToDoInput')
const addToDoBtn = document.getElementById('addToDoBtn')
const toDoListWrapper = document.getElementById('toDoList')
const completeToDo = document.getElementById('completeToDo')

const renderList = () => {
	toDoListWrapper.innerHTML = ''
	completeToDo.innerHTML = ''

	toDoList.forEach((item) => {
		const itemParent = document.createElement('div')
		itemParent.classList.add('listItem')
		const p = document.createElement('p')
		const checkBox = document.createElement('input')
		checkBox.type = 'checkBox'
		checkBox.checked = item.done
		p.innerText = item.title

		itemParent.appendChild(checkBox)
		itemParent.appendChild(p)

		const parent = item.done ? completeToDo : toDoListWrapper
		parent.appendChild(itemParent)
	})

}

const addToDo = () => {
	if(toDoList.includes(addToDoInput.value)) return alert ('to do name already exist')
	
	toDoList.push({title: addToDoInput.value, done: true})
	addToDoInput.value = ''
	renderList()

}

addToDoBtn.addEventListener('click', addToDo)

