// Add your code here

function submitData(name, email){

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name, 
      email
    })
  })
  .then(res => res.json())
  .then(res => {
    document.body.innerHTML = `<p>${res.id}</p>`
  })
  .catch(function (error) {
    document.body.innerHTML = `<p>Unauthorized Access</P>`
  })
}