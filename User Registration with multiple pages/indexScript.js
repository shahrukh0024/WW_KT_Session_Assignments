const rootURL = 'https://jsonplaceholder.typicode.com/users';
let Users = [];
document.getElementById('submit').addEventListener('click',addUser)
console.log(document.getElementById('submitt'));

document.addEventListener('DOMContentLoaded', () => {
    getUsers();
    // setTimeout(() => {
    //     loadUsers();
    // }, 2500);  
});

function getUsers() {

    axios.get(rootURL)
        .then(response => {
            // console.log(response.data);
            // console.log(response.data.length);
            Users = [...response.data];
            // console.log(Users);
        });
}

function loadUsers() {
    let dataHTML = "";
    for (user of Users) {
        dataHTML += `<div class="user-info">
                <div class="user-img-container"><img class="user-img" src="../User Registration with div/Assets/user.png" alt="" srcset=""></div>
                <div class="name">${user.name}</div>
                <div class="user-id">${user.id}</div>
                <div class="user-name"><label class="user-label">Username:</label> <span>${user.username}</span></div>
                <div class="user-email"><label class="user-label">Email:</label> <span>${user.email}</span></div>
                <div class="user-address"> <label class="user-label">Address:</label>
                <span>${user.address.street}, ${user.address.suite}, ${user.address.city}
                </span>
                </div>
                <div class="user-zip"><label class="user-label">Zipcode:</label><span>${user.address.zipcode}</span></div>
                <div class="button">
                    <button class="dlt-button" onclick="deleteUser(this)">Delete</button>
                    <button class="edit-button"onclick=" editUser(this);"> Edit </button>
                   
                
                                
                        </div>

                        </div>
                </div>
        </div>`
    }
    document.getElementById('user-container').innerHTML = dataHTML;
}

function deleteUser(element) {
    userId = element.parentElement.parentElement.querySelector(".user-id").innerHTML;
    // console.log(element.parentElement.parentElement.querySelector(".user-id").innerHTML);
    let index = 0;
    for (user of Users) {
        if (user.id == userId) {
            // console.log(index);
            Users.splice(index, 1);
            loadUsers();
        }
        index++;
    }
}

function redirectFun() {
    location.assign("./editUser.html");
}

function editUser(element) {
    userInfo = element.parentElement.parentElement;
    let ID = userInfo.querySelector(".user-id").innerHTML;
    console.log(ID);
    let fullname = userInfo.querySelector(".name").innerHTML;
    let userName = userInfo.querySelector(".user-name").children[1].innerHTML;
    let userEmail = userInfo.querySelector(".user-email").children[1].innerHTML;
    let userAddressStr = userInfo.querySelector(".user-address").children[1].innerHTML;
    let street, suite, city;
    let userZipcode = userInfo.querySelector(".user-zip").children[1].innerHTML;

    fullnameArray = fullname.split(" ");
    let userFirstName = fullnameArray[0];
    let userLastName = fullnameArray[1];

    addressArray = userAddressStr.split(",");
    // console.log(userInfo);
    // console.log(fullname,userName,userEmail);
    // console.log(addressArray);
    for (loop = 0; loop < addressArray.length; loop++) {
        addressArray[loop] = addressArray[loop].trim();
        if (loop == 0) {
            street = addressArray[loop];
        }
        else if (loop == 1) {
            suite = addressArray[loop];
        }
        else if (loop == 2) {
            city = addressArray[loop];
        }
        else {

        }
    }
    // console.log(userAddressStr);
    // console.log(addressArray);
    // console.log(city, userZipcode);

    // ------Values into the Input Field----

    let user = {
        "id": ID,
        "name": fullname,
        "username": userName,
        "email": userEmail,
        "address": {
            "street": street,
            "suite": suite,
            "city": city,
            "zipcode": userZipcode,
        }
    }
    console.log(user);

    // ----------Local Storage--------
    userStr = JSON.stringify(user);
    console.log(userStr);
    localStorage.setItem("myUser", JSON.stringify(user));
    redirectFun();
    // document.getElementById('userId').value = ID;
    // document.getElementById('username').value = userName;
    // document.getElementById('firstname').value = userFirstName;
    // document.getElementById('lastname').value = userLastName;
    // document.getElementById('email').value = userEmail;
    // document.getElementById('street').value = street;
    // document.getElementById('suite').value = suite;
    // document.getElementById('city').value = city;
    // document.getElementById('zipcode').value = userZipcode;

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
    let newUser = {
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
    // users.unshift(user);
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

    // localStorage.setItem("usersList",JSONusersArr);
    // clearAllField();
    // loadUser();
    // document.getElementById('confirm').innerHTML = `${fullName}`
    // Users.unshift(newUser);
    console.log(Users);
    clearAllField();

    sendUsers(newUser);
    setTimeout(() => {
        document.getElementById('confirmation-msg').innerHTML="New-User Successfully Added";
    }, 300);
    setTimeout(() => {
        document.getElementById('confirmation-msg').innerHTML="";
    }, 2000);

}
