const user = fetch('https://jsonplaceholder.typicode.com/users/5')
    .then(response => response.json())
    .then(data => {
        //document.querySelector('#name').textContent = data.name;
        populateData(data);
    });

function populateData(data){
    document.querySelector('#name').textContent = data.name;
    document.querySelector('#e-mail').textContent = data.email;
    document.querySelector('#phoneNumber').textContent = data.phone;
}


