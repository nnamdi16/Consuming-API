console.log('Hello World');
function searchById(){
	let id = document.getElementById('searchById').value;
	console.log(id);
	fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
	.then(response => response.json())
	.then(json => console.log(json))
}


// searchById(7);



function searchByText(){
	
	let text = document.getElementById('searchText').value;
	fetch(`https://jsonplaceholder.typicode.com/todos/`)
	.then(response => response.json())
	.then(json => {
		let output =[];
		for(let index = 0; index < json.length; index++){
			console.log(json[index]);
			if(json[index].indexOf(text) !== -1){
				output.push(json[index]);
			}
		}
		return output;
	})
}

// console.log(searchByText(dol)
