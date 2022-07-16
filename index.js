

function fn1(){
    var str = document.getElementById("name").value
    let fetches = fetch(`https://api.genderize.io/?name=${str}`)
    // let data = response.json()
    let output = document.getElementById("output")

    fetches.then( res =>
        res.json()).then(d=>{
            // console.log(d.gender)
            if(d.gender ===null ){
                // console.log("Invalid name")
                output.innerHTML = "<h2>Enter valid name</h2>"
                output.style.color = "red"
            }
            else{
                // console.log("name shi hai")
                output.innerHTML = `<h2>${d.gender}</h2>`
                output.style.color = "red"
            }
        })
}