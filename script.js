//your JS code here. If required.

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(resopnse => {
		if(!resopnse.ok){
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return resopnse.json();
	})
	.then(data => {
		console.log('Response:');
        console.log('User ID:', data.userId);
        console.log('ID:', data.id);
        console.log('Title:', data.title);
        console.log('Completed:', data.completed);
	})
	.catch(err => {
		console.error('Error:', error.message);
	})