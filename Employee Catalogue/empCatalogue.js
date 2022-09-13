


document.addEventListener('DOMContentLoaded', () => {
    // document.getElementById('userSubmit').addEventListener('click', fnamelettersOnlyCheck);
    // document.getElementById('userSubmit').addEventListener('click', lnamelettersOnlyCheck);
    document.getElementById('userSubmit').addEventListener('click', addUser);
});

const addUser = (ev) => {
    ev.preventDefault();
    let users = [];
    let status;
    status = validateForm();
    console.log(status);

    if (status == true) {
        userGender = document.querySelector('input[name="gender"]:checked').value;
        let user = {
            id: Date.now(),
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            DOB: document.getElementById('birthday').value,
            gender: userGender,
            bloodgroup: document.getElementById('userBloodGroup').value,
            email: document.getElementById('useremail').value,
            phoneNumber: document.getElementById('PhoneNumber').value
        }
        console.log(users);
        users.push(user);
        loadUsers(users);
    }

    document.forms[0].reset();
}


function validateForm() {
    let flag = true;
    clearError();

    let name = document.forms['userForm']["firstname"].value;
    if (name.length < 2) {
        setError("fnameError", "length is too short");
        flag = false;
    }

    // ---Gender--
    let genderM = document.getElementById("male");
    let genderF = document.getElementById("female");
    console.log(genderF.checked, genderM);
    if (genderM.checked == false && genderF.checked == false) {
        setError("genderError", "&#x2716; You must select male or female");
        flag = false;
    }
    else {
        setConfirmation("genderError", "&#x2714; Valid");
    }

    // ---Blood Group--
    let bloodGroup = document.getElementById("userBloodGroup").value
    if (bloodGroup == "-1") {
        setError("bgError", "&#x2716; Please select proper blood group");
        flag = false;
    }
    else {
        setConfirmation("bgError", "&#x2714; Valid");
    }

    return flag;
}

function clearError() {
    errors = document.getElementsByClassName("formerror");
    for (let error of errors) {
        error.innerHTML = "";
    }
}

function setError(id, errorMsg) {
    // var element = document.getElementById(id);
    // element.getElementsByClassName("formerror")[0].innerHTML="errorMsg";
    document.getElementById(id).innerHTML = errorMsg;
    // document.getElementsByClassName("formerror")[0].innerHTML = errorMsg;
}

function setConfirmation(id, msg) {
    document.getElementById(id).innerHTML = msg;
}


// const fnamelettersOnlyCheck = () => {
//     let name = document.getElementById('fname');
//     var regEx = /^[A-Za-z]+$/;
//     if (name.value.match(regEx)) {
//         return true;
//     }
//     else {
//         alert("Please Enter Valid First Name.");
//         return false;
//     }
// }

// const lnamelettersOnlyCheck = () => {
//     let name = document.getElementById('lname');
//     var regEx = /^[A-Za-z]+$/;
//     if (name.value.match(regEx)) {
//         return true;
//     }
//     else {
//         alert("Please Enter Valid Last Name.");
//         return false;
//     }
// }






function terms_changed(termsCheckBox) {
    //If the checkbox has been checked
    if (termsCheckBox.checked) {
        //Set the disabled property to FALSE and enable the button.
        document.getElementById("userSubmit").disabled = false;
    } else {
        //Otherwise, disable the submit button.
        document.getElementById("userSubmit").disabled = true;
    }
}
// Displaying the Users in the form of table
function loadUsers(users) {
    const tableBody = document.getElementById('UserData');
    let dataHtml = '';
    let name;

    for (let user of users) {
        name = user.fname + ' ' + user.lname;
        dataHtml += `<tr><td>${name}</td>
                                <td>${user.DOB}</td>
                                <td>${user.gender}</td>
                                <td>${user.bloodgroup}</td>
                                <td>${user.email}</td>
                                <td>${user.phoneNumber}</td></tr>`;
    }
    tableBody.innerHTML = dataHtml;
    console.log(dataHtml);
}

function resetForm() {
    clearError();
}
