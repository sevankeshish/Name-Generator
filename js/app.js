document.querySelector("#generate-names").addEventListener("submit", loadNames)

function loadNames (e){
    e.preventDefault()

    const country =  document.querySelector("#country").value
    const genre = document.querySelector("#genre").value

    let url = "https://namefake.com/"

    if(country !== ""){
        url += (country + "/")
    } else {
        url += "random/"
    }

    if(genre !== ""){
        url += (genre + "/")
    } else {
        url += "random/"
    }
    // console.log(country);
    // console.log(genre);
    // console.log(url);

    const xhr = new XMLHttpRequest()

    xhr.open("GET" , url , true)

    xhr.unload = function (){
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
        }
    }

    xhr.send()

}

