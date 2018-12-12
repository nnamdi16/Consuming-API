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
	let output =[];
	let text = document.getElementById('searchText').value;
	fetch(`https://jsonplaceholder.typicode.com/todos/`)
	.then(response => response.json())
	.then(json => {
		
		for(let index = 0; index < json.length; index++){
			if(json[index].title.indexOf(text) !== -1){
				output.push(json[index]);
			}
		}
			 console.log(output);
	})
}

function gitHubRepo(text){
	let text = document.getElementById('username').value;
	fetch(`https://api.github.com/${text}/repos`)
	.then(response => response.json())
	.then(json => console.log(json))

}

console.log(gitHubRepo('nnamdi16'));
// console.log(searchByText(dol)
