let str = document.getElementById("name").value

let output = document.getElementById("output")

let getGender = async () =>{
    try{
        let response = await fetch(`https://api.genderize.io/?name=${str}`)
        let data = await response.json()
        if(data.gender === null){
            output.innerHTML = "<h2>Please enter correct name</h2>"
            output.style.color = "red"
        }
        else{
            output.innerHTML = `<h2>${data.gender}</h2>`
            output.style.color = "red"
        }

    }catch(error){
        console.log(`${error}`)
    }
}

function fn1(){
    return getGender();
}