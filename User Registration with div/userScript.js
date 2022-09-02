document.addEventListener('DOMContentLoaded', () => {
    loadUser();
    document.getElementById('submit').addEventListener('click', validateData);
});

const validateData = (ev) => {
    ev.preventDefault();
    let status = true;

    let username = document.getElementById('username');
    let firstname = document.getElementById('firstname');
    let lastname = document.getElementById('lastname');
    let email = document.getElementById('email');
    let street = document.getElementById('street');
    let suite = document.getElementById('suite');
    let city = document.getElementById('city');
    let zipcode = document.getElementById('zipcode');

    //-------User Name Validation---------
    if (username.value == "") {
        setError(username, "Username Can't be Blank");
        status = false;
    }
    else {
        setSuccess(username);
    }
    //-------First Name Validation---------
    if (firstname.value == "") {
        setError(firstname, "Firstname Can't be Blank");
        status = false;
    }
    else {
        setSuccess(firstname);
    }
    //-------last Name Validation---------
    if (lastname.value == "") {
        setError(lastname, "Lastname Can't be Blank");
        status = false;
    }
    else {
        setSuccess(lastname);
    }
    //-------Address Validation---------
    //-------Street Validation---------
    if (street.value == "") {
        setError(street, "Street Can't be Blank");
        status = false;
    }
    else {
        setSuccess(street);
    }
    //-------suite Validation---------
    if (suite.value == "") {
        setError(suite, "Suite Can't be Blank");
        status = false;
    }
    else {
        setSuccess(suite);
    }
    //-------email  Validation---------
    regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value == "") {
        setError(email, "Email Can't be Blank");
        status = false;
    }
    else if (regEx.test(email.value) == false) {
        setError(email, "Please Enter Valid Email");
        status = false;
    }
    else {
        setSuccess(email);
    }


    //-------city Name Validation---------
    if (city.value == "") {
        setError(city, "City Can't be Blank");
        status = false;
    }
    else {
        setSuccess(city);
    }

    //-------zipcode Name Validation---------
    let validZipTest = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if (zipcode.value == "") {
        setError(zipcode, "Zipcode Can't be Blank");
        status = false;
    }
    else if (validZipTest.test(zipcode.value) == false) {
        setError(zipcode, "Please Enter Valid Zipcode");
        status = false;
    }
    else {
        setSuccess(zipcode);
    }

    if (status) {
        // addUser();
    }
}

function setError(username, error) {
    let usernameParent = username.parentElement;
    usernameParent.className = "input-field error"; // Setting Class
    usernameParent.querySelector("i").className = "fa fa-exclamation-circle"; // icon
    usernameParent.querySelector("span").innerHTML = error; // msg

}

function setSuccess(username) {
    let usernameParent = username.parentElement;
    usernameParent.className = "input-field success"; // Setting Class
    // usernameParent.querySelector("i").className ="fa fa-check-circle"; // icon
    usernameParent.querySelector(".fa").className = "fa fa-check-circle";
}
function loadUser() {
    Users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
            }

        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",

            }

        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",

            }

        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",

            }

        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",

            }
        }];
        let dataHTML="";
        for(user of Users)
        {
            dataHTML += `<div class="user-info">
                <div class="name">${user.name}</div>
                <label class="user-label">Username:</label><div class="user-text"> ${user.username}</div>
                <div class="user-text">Email: ${user.email}</div>
                <div class="user-text"> Addresse:
                    ${user.address.street} 
                    ${user.address.suite}
                    ${user.address.city}
                </div>
                <div class="user-text">Zipcode:${user.address.zipcode}</div>
                <div class="button">
                    <button class="dlt-button">Delete</button>
                    <button class="edit-button"> Edit </button>
                </div>
        </div>`
        }
        document.getElementById('user-container').innerHTML = dataHTML;
}
