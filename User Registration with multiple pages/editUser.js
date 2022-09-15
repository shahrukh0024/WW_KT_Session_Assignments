// import {loadUsers} from './viewusers';

document.addEventListener('DOMContentLoaded', () => {
    
    dataToInputFields();
    document.getElementById('submit').addEventListener('click',updateUsers)
});

let Users = JSON.parse(localStorage.getItem("usersList"));

function dataToInputFields(){
    let userStr = localStorage.getItem("myUser");
    console.log('userStr');
    console.log(userStr);
    let parsedUser = JSON.parse(userStr);
    console.log('parsedUser');
    console.log(parsedUser);
    User = parsedUser;
    console.log('User');
    console.log(User);

    let fullname = User.name;
    fullnameArray = fullname.split(" ");
    let userFirstName = fullnameArray[0];
    let userLastName = fullnameArray[1];

    document.getElementById('userId').value = User.id;
    document.getElementById('username').value = User.username;
    document.getElementById('firstname').value =  userFirstName;
    document.getElementById('lastname').value = userLastName;
    document.getElementById('email').value =  User.email;
    document.getElementById('street').value =  User.address.street;
    document.getElementById('suite').value =   User.address.suite;
    document.getElementById('city').value =   User.address.city;
    document.getElementById('zipcode').value =  User.address.zipcode;
}

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

function changeClassNameById(id, newClassName) {
    document.getElementById(id).className = newClassName;
}

function clearAllField() {
    document.getElementById('userId').value = -1;
    document.getElementById('username').value = "";
    document.getElementById('firstname').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('street').value = "";
    document.getElementById('suite').value = "";
    document.getElementById('city').value = "";
    document.getElementById('zipcode').value = "";

    // document.getElementById('username').parentElement.className ="input-field";
    // document.getElementById('username').parentElement.querySelector("i").className="fa";
}

function updateUsers() {
    let index = 0;
    let userid = document.getElementById('userId').value;
    let username = document.getElementById('username').value;
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let street = document.getElementById('street').value;
    let suite = document.getElementById('suite').value;
    let city = document.getElementById('city').value;
    let zipcode = document.getElementById('zipcode').value;
    for (u of Users) {
        if (u.id == userid) {
            break;
        }
        index++;
    }
    // let fullName = firstname + " " + lastname;
    // Users[index].name = fullName;
    // Users[index].username = username;
    // Users[index].email = email;
    // Users[index].address.street = street;
    // Users[index].address.suite = suite;
    // Users[index].address.city = city;
    // Users[index].address.zipcode = zipcode;

    // console.log(Users[index].address.city, city);
    
   
    
    let fullName = firstname + " " + lastname;
    let updatedUser = {
        "id": userid,
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
    console.log(Users);
    Users.splice(index,1,updatedUser);
    console.log(updatedUser);
    console.log(userid);
    clearAllField();

    axios.put(`https://jsonplaceholder.typicode.com/users/${userid}`,Users)
    .then(response =>{
        console.log(response);
        document.getElementsByClassName('user-info').innerHTML = "Updated";
    })
    .catch((err)=>{
        console.log(err);
    })

    loadUsers();

    
   
}