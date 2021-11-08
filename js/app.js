document.querySelector("#generate-names").addEventListener("submit", loadNames)

function loadNames(e) {
    e.preventDefault()

    const country = document.querySelector("#country").value
    const genre = document.querySelector("#genre").value

    let url = "https://namefake.com/"

    if (country !== "") {
        url += (country + "/")
    } else {
        url += "random/"
    }

    if (genre !== "") {
        url += (genre + "/")
    } else {
        url += "random/"
    }
    // console.log(country);
    // console.log(genre);
    // console.log(url);

    const xhr = new XMLHttpRequest()

    xhr.open("GET", url, true)

    xhr.unload = function () {
        if (this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
            const response = JSON.parse(thes.responseText)
            console.log(response);
            let output = ""
            response.forEach(perople => {

                output += `
                <ul>
                 <li>ID: ${person.id}</li>
                 <li>Name: ${person.name}</li>
                 <li>Job: ${person.job}</li>
                </ul>
                `
                console.log(output);
            });
            document.querySelector("#result").innerHTML = output
        }
    }

    xhr.send()

}