console.log('Hello World');
function searchById(){
	let id = document.getElementById('searchById').value;
	fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
	.then(response => response.json())
	.then(json => console.table(json))
	console.log(id);
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
			 console.table(output);
	})
}

function gitHubRepo(){
	let output = []
	let user = document.getElementById('username').value;
	fetch(`https://api.github.com/users/${user}/repos`)
	.then(response => response.json())
	.then(json => {
		for(let index =0; index < json.length; index++){
			output.push(json[index].name)
		}
		console.table(output);
	});

}

// console.log(gitHubRepo());