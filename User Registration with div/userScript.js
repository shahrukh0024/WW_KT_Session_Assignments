document.addEventListener('DOMContentLoaded', () => {
    loadUser();
    document.getElementById('submit').addEventListener('click', validateData);
});

// ---------Global---------
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

    console.log(document.getElementById('userId').value);
    let userId = document.getElementById('userId').value;
    // userId = parseInt(userId, 10);
    console.log(typeof(userId));
    console.log(status);
    if (status) {
        if (userId == -1) {
            addUser(username.value,
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
    let index = 0;
    for (u of Users) {
        if (u.id == userid) {
            break;
        }
        index++;
    }
    let fullName = firstname + " " + lastname;
    Users[index].name = fullName;
    Users[index].username = username;
    Users[index].email = email;
    Users[index].address.street = street;
    Users[index].address.suite = suite;
    Users[index].address.city = city;
    Users[index].address.zipcode = zipcode;
    
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
    clearAllField();
    loadUser();
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

function loadUser() {
    // Users = [
    //     {
    //         "id": 1,
    //         "name": "Leanne Graham",
    //         "username": "Bret",
    //         "email": "Sincere@april.biz",
    //         "address": {
    //             "street": "Kulas Light",
    //             "suite": "Apt. 556",
    //             "city": "Gwenborough",
    //             "zipcode": "92998-3874",
    //         }

    //     },
    //     {
    //         "id": 2,
    //         "name": "Ervin Howell",
    //         "username": "Antonette",
    //         "email": "Shanna@melissa.tv",
    //         "address": {
    //             "street": "Victor Plains",
    //             "suite": "Suite 879",
    //             "city": "Wisokyburgh",
    //             "zipcode": "90566-7771",

    //         }

    //     },
    //     {
    //         "id": 3,
    //         "name": "Clementine Bauch",
    //         "username": "Samantha",
    //         "email": "Nathan@yesenia.net",
    //         "address": {
    //             "street": "Douglas Extension",
    //             "suite": "Suite 847",
    //             "city": "McKenziehaven",
    //             "zipcode": "59590-4157",

    //         }

    //     },
    //     {
    //         "id": 4,
    //         "name": "Patricia Lebsack",
    //         "username": "Karianne",
    //         "email": "Julianne.OConner@kory.org",
    //         "address": {
    //             "street": "Hoeger Mall",
    //             "suite": "Apt. 692",
    //             "city": "South Elvis",
    //             "zipcode": "53919-4257",

    //         }

    //     },
    //     {
    //         "id": 5,
    //         "name": "Chelsey Dietrich",
    //         "username": "Kamren",
    //         "email": "Lucio_Hettinger@annie.ca",
    //         "address": {
    //             "street": "Skiles Walks",
    //             "suite": "Suite 351",
    //             "city": "Roscoeview",
    //             "zipcode": "33263",

    //         }
    //     }];
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
                    <button class="edit-button" onclick="editUser(this);" > Edit </button>
                    <button class="myBtn" onclick="viewUserInfo(this)" >View</button>
                    
                         <!-- The Modal -->
                        <div id="myModal" class="modal">

                        <!-- Modal content -->
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <!-- Info -->
                            <div class="user-img-container"><img class="user-img" src="../User Registration with div/Assets/user.png" alt="" srcset=""></div>
                            <div id='user-modal'></div>
                            <div class="name">${user.name}</div>
                                <div class="user-id">${user.id}</div>
                                <div class="user-name"><label class="user-label">Username:</label> <span>${user.username}</span></div>
                                <div class="user-email"><label class="user-label">Email:</label> <span>${user.email}</span></div>
                                <div class="user-address"> <label class="user-label">Address:</label>
                                <span>${user.address.street}, ${user.address.suite}, ${user.address.city}
                                </span>
                                </div>
                                <div class="user-zip"><label class="user-label">Zipcode:</label><span>${user.address.zipcode}</span></div>
                                
                        </div>

                        </div>
                </div>
        </div>`
    }
    document.getElementById('user-container').innerHTML = dataHTML;
}

function addUser(username,
    firstname,
    lastname,
    email,
    street,
    suite,
    city,
    zipcode,
    users) {

    console.log(username, firstname, lastname, email, street, suite, city, zipcode, users);
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
    Users.unshift(user);
    console.log(Users);
    clearAllField();
    loadUser();
}

function deleteUser(element) {
    userId = element.parentElement.parentElement.querySelector(".user-id").innerHTML;
    // console.log(element.parentElement.parentElement.querySelector(".user-id").innerHTML);
    let index = 0;
    for (user of Users) {
        if (user.id == userId) {
            // console.log(index);
            Users.splice(index, 1);
            loadUser();
        }
        index++;
    }
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
    document.getElementById('userId').value = ID;
    document.getElementById('username').value = userName;
    document.getElementById('firstname').value = userFirstName;
    document.getElementById('lastname').value = userLastName;
    document.getElementById('email').value = userEmail;
    document.getElementById('street').value = street;
    document.getElementById('suite').value = suite;
    document.getElementById('city').value = city;
    document.getElementById('zipcode').value = userZipcode;

}

// ----------Modal------
function viewUserInfo(element) {
    console.log(element.parentElement.children[3].children[0].children[2]);
    // <div class="name">${user.name}</div>
    let userDiv = document.getElementById('user-modal').innerHTML = `<div class="name">${element.parentElement.children[3].children[0].children[2]}</div>`





    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

