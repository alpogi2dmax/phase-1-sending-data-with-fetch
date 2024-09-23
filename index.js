// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data:", data);
            const newId = data.id;
            const body = document.body;
            const p = document.createElement('p');
            p.textContent = newId;
            body.appendChild(p);
        })
    .catch(error => {
        const body = document.body;
        const p = document.createElement('p');
        p.innerHTML = error.message;
        body.appendChild(p);
    })
}


