// Add your code here
// fetch("http://localhost:3000/dogs", configurationObject);
    // configurationObject = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
//   };

// let configobject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
// body: JSON.stringify(userInfo)
// }




function submitData(name, email) {
    let userInfo = {name: name, email: email}

    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    body: JSON.stringify(userInfo)
    };
    return fetch("http://localhost:3000/users", configObject)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        let bodyEl = document.querySelector("body")
        let p = document.createElement("p")
        p.textContent = object.id
        bodyEl.appendChild(p)
    })
    .catch(function(error){
        alert("Bad things! Failed Post")
        let bodyEl = document.querySelector("body")
        let h3 = document.createElement("h3")
        h3.textContent = error.message
        bodyEl.appendChild(h3)
    })
}