let Users = [];
const rootURL = 'https://jsonplaceholder.typicode.com/users';

document.addEventListener('DOMContentLoaded', () => {

    // let usersStr = localStorage.getItem("usersList");
    // console.log('usersStr');
    // console.log(usersStr);
    // let parsedUsers = JSON.parse(usersStr);
    // console.log('parsedUsers');
    // console.log(parsedUsers);
    // Users = parsedUsers;
    // console.log('Users');
    // console.log(Users);
    // loadUsers();

    getUsers();
    localStorage.setItem("usersList", JSON.stringify(Users));
    setTimeout(() => {
        loadUsers();
    }, 2500);


});
// document.getElementById("users").addEventListener("load", loadUsers);

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
    // console.log('hiiiiii');
    // console.log(parsedUsers);
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
    // window.location.href = "file:///D:/Shahrukh%20Pathan/WW-KT/User%20Registration%20with%20multiple%20pages/editUser.html";
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

