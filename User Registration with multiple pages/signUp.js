document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('submit').addEventListener('click',addUser)
    // console.log(users);

    // parsed = JSON.parse(users);
    // console.log('parsed');
    // console.log(parsed);

    // JSONusersArr = JSON.stringify(users);
    // console.log('JSONusersArr');
    // console.log(JSONusersArr);

    // j = JSON.parse(JSONusersArr);
    // console.log('parsed');
    // console.log(j);

    // localStorage.setItem("usersList", JSONusersArr);
});
users = [
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

function validateUser() {   
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
    let validZipTest = /^(\d+-?)+\d+$/;
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
    console.log(status);

    if (status) {
        document.getElementById('submit').disabled = false;
        changeClassNameById('submit', 'button enb');
    }
    else {
        // console.log(document.getElementById('submit').disabled);
        document.getElementById('submit').disabled = true;
    }

}

function addUser()
{
    let userId = document.getElementById('userId').value;
    if (userId == -1) {
        addNewUser(username.value,
            firstname.value,
            lastname.value,
            email.value,
            street.value,
            suite.value,
            city.value,
            zipcode.value
        );
    }
    else {
        console.log('userExist');
        updateUsers(userId,
            username.value,
            firstname.value,
            lastname.value,
            email.value,
            street.value,
            suite.value,
            city.value,
            zipcode.value
        );

    }

}

function updateUsers(userid,
    username,
    firstname,
    lastname,
    email,
    street,
    suite,
    city,
    zipcode,
) {
    
    let tobeEditUser = localStorage.getItem("myObject");
    parsedUser =JSON.parse(tobeEditUser);
    console.log(parsedUser);
    let index = 0;
    for (u of users) {
        if (u.id == userid) {
            break;
        }
        index++;
    }
    let fullName = firstname + " " + lastname;
    users[index].name = fullName;
    users[index].username = username;
    users[index].email = email;
    users[index].address.street = street;
    users[index].address.suite = suite;
    users[index].address.city = city;
    users[index].address.zipcode = zipcode;
    
    // console.log(Users[index].address.city, city);
    // let fullName = firstname + " " + lastname;
    // let user = {
    //     "id": userid,
    //     "name": fullName,
    //     "username": username,
    //     "email": email,
    //     "address": {
    //         "street": street,
    //         "suite": suite,
    //         "city": city,
    //         "zipcode": zipcode,
    //     }
    // }
    // Users.splice(index,1,user);
    // console.log(Users);
    // clearAllField();
    // loadUser();
}

function changeClassNameById(id, newClassName) {
    document.getElementById(id).className = newClassName;
}

function setError(element, error) {
    let elementParent = element.parentElement;

    usernameIcon = document.getElementById('usernameIcon').id;
    firstnameIcon = document.getElementById('firstnameIcon').id;
    lastnameIcon = document.getElementById('lastnameIcon').id;
    emailIcon = document.getElementById('emailIcon').id;
    streetIcon = document.getElementById('streetIcon').id;
    suiteIcon = document.getElementById('suiteIcon').id;
    cityIcon = document.getElementById('cityIcon').id;
    zipcodeIcon = document.getElementById('zipcodeIcon').id;

    if (element.id == 'username') {
        elementParent.className = "input-field error";
        changeClassNameById(usernameIcon, "fa fa-exclamation-circle");
        document.getElementById('usernameMsg').innerHTML = error;
    }
    else if (element.id == 'firstname') {
        elementParent.className = "input-field error";
        changeClassNameById(firstnameIcon, "fa fa-exclamation-circle");
        document.getElementById('firstnameMsg').innerHTML = error;
    }
    else if (element.id == 'lastname') {
        elementParent.className = "input-field error";
        changeClassNameById(lastnameIcon, "fa fa-exclamation-circle");
        document.getElementById('lastnameMsg').innerHTML = error;
    }
    else if (element.id == 'email') {
        elementParent.className = "input-field error";
        changeClassNameById(emailIcon, "fa fa-exclamation-circle");
        document.getElementById('emailMsg').innerHTML = error;
    }
    else if (element.id == 'street') {
        elementParent.className = "input-field error";
        changeClassNameById(streetIcon, "fa fa-exclamation-circle");
        document.getElementById('streetMsg').innerHTML = error;
    }
    else if (element.id == 'suite') {
        elementParent.className = "input-field error";
        changeClassNameById(suiteIcon, "fa fa-exclamation-circle");
        document.getElementById('suiteMsg').innerHTML = error;
    }
    else if (element.id == 'city') {
        elementParent.className = "input-field error";
        changeClassNameById(cityIcon, "fa fa-exclamation-circle");
        document.getElementById('cityMsg').innerHTML = error;
    }
    else if (element.id == 'zipcode') {
        elementParent.className = "input-field error";
        changeClassNameById(zipcodeIcon, "fa fa-exclamation-circle");
        document.getElementById('zipcodeMsg').innerHTML = error;
    }
    else {
        return;
    }
}

// function setError(element, error) {
//     let elementParent = element.parentElement;
//     elementParent.className = "input-field error"; // Setting Class
//     // document.getElementById('usernameIcon').parentElement.className = "fa fa-exclamation-circle";
//     elementParent.querySelector("i").className = "fa fa-exclamation-circle"; // icon
//     elementParent.querySelector("span").innerHTML = error; // msg

// }

function setSuccess(element) {
    let elementParent = element.parentElement;

    usernameIcon = document.getElementById('usernameIcon').id;
    firstnameIcon = document.getElementById('firstnameIcon').id;
    lastnameIcon = document.getElementById('lastnameIcon').id;
    emailIcon = document.getElementById('emailIcon').id;
    streetIcon = document.getElementById('streetIcon').id;
    suiteIcon = document.getElementById('suiteIcon').id;
    cityIcon = document.getElementById('cityIcon').id;
    zipcodeIcon = document.getElementById('zipcodeIcon').id;

    if (element.id == 'username') {
        elementParent.className = "input-field success";
        changeClassNameById(usernameIcon, "fa fa-check-circle");
    }
    else if (element.id == 'firstname') {
        elementParent.className = "input-field success";
        changeClassNameById(firstnameIcon, "fa fa-check-circle");
    }
    else if (element.id == 'lastname') {
        elementParent.className = "input-field success";
        changeClassNameById(lastnameIcon, "fa fa-check-circle");
    }
    else if (element.id == 'email') {
        elementParent.className = "input-field success";
        changeClassNameById(emailIcon, "fa fa-check-circle");
    }
    else if (element.id == 'street') {
        elementParent.className = "input-field success";
        changeClassNameById(streetIcon, "fa fa-check-circle");
    }
    else if (element.id == 'suite') {
        elementParent.className = "input-field success";
        changeClassNameById(suiteIcon, "fa fa-check-circle");
    }
    else if (element.id == 'city') {
        elementParent.className = "input-field success";
        changeClassNameById(cityIcon, "fa fa-check-circle");
    }
    else if (element.id == 'zipcode') {
        elementParent.className = "input-field success";
        changeClassNameById(zipcodeIcon, "fa fa-check-circle");
    }
    else {
        return;
    }
}

// function setSuccess(username) {
//     let usernameParent = username.parentElement;
//     usernameParent.className = "input-field success"; // Setting Class
//     // usernameParent.querySelector("i").className ="fa fa-check-circle"; // icon
//     usernameParent.querySelector(".fa").className = "fa fa-check-circle";
// }

function addNewUser(username,
    firstname,
    lastname,
    email,
    street,
    suite,
    city,
    zipcode) {

    // console.log(username, firstname, lastname, email, street, suite, city, zipcode, users);
    let fullName = firstname + " " + lastname;
    let user = {
        "id": Date.now(),
        "name": fullName,
        "username": username,
        "email": email,
        "address": {
            "street": street,
            "suite": suite,
            "city": city,
            "zipcode": zipcode,
        }


    }
    users.unshift(user);
    // console.log(users);

    // parsed = JSON.parse(users);
    // console.log('parsed');
    // console.log(parsed);

    JSONusersArr = JSON.stringify(users);
    console.log('JSONusersArr');
    console.log(JSONusersArr);

    // j = JSON.parse(JSONusersArr);
    // console.log('parsed');
    // console.log(j);

    localStorage.setItem("usersList",JSONusersArr);
    // clearAllField();
    // loadUser();
}
