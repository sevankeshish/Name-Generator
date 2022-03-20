//access to the form values
document.querySelector("#generate-names").addEventListener("submit", loadNames);

//read the values and generate URL
function loadNames(e) {
  e.preventDefault();

  const country = document.querySelector("#country").value;
  const gender = document.querySelector("#gender").value;
  // console.log(country);
  // console.log(gender);

  //generate the URL
  let url = "https://api.namefake.com/";

  //check the country value
  if (country !== "") {
    url += country + "/";
  } else {
    url += "random/";
  }

  //check the gender value
  if (gender !== "") {
    url += gender + "/";
  } else {
    url += "random/";
  }
  // console.log(country);
  // console.log(gender);
  // console.log(url);

  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
      const response = JSON.parse(thes.responseText);
      console.log(response);
      let output = "";
      response.forEach((perople) => {
        output += `
                <ul>
                 <li>ID: ${person.id}</li>
                 <li>Name: ${person.name}</li>
                 <li>Job: ${person.job}</li>
                </ul>
                `;
        console.log(output);
      });
      document.querySelector("#result").innerHTML = output;
    }
  };

  xhr.send();
}
