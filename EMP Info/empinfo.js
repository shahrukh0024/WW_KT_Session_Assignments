document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userSubmit').addEventListener('click', addUser);
});
let globalUserCounter = 0;
const addUser = (ev) => {
    ev.preventDefault();
    if(globalUserCounter==0)
    {
        let users = [];
    }
    
    let status;
    status = validateForm();
    console.log(status);

    if (status == true) {
        userGender = document.querySelector('input[name="gender"]:checked').value;
        let user = {
            id: Date.now(),
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            DOB: document.getElementById('DOB').value,
            gender: userGender,
            education: document.getElementById('userEdu').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phoneNumber').value
        }
        console.log(users);
        users.push(user);
        globalUserCounter++;
        clearAll();
        loadUsers(users);
        document.forms[0].reset();
    }



}

function validateForm() {
    let flag = true;
    clearAll();
    //-------First Name Validation---------
    let name = document.forms['userForm']["firstname"].value;
    if (name == "") {
        setError("fnameError", "&#x2716; Please enter your name");
        flag = false;
    }
    else if (/^[A-Za-z]+$/.test(name) == false) {
        setError("fnameError", "&#x2716; Please enter Correct name");
        flag = false;
    }
    else if (name.length < 2) {
        setError("fnameError", "&#x2716; length is too short");
        flag = false;
    }
    else {
        setConfirmation("fnameMsg", "&#x2714;");
    }

    //-------Last Name Validation---------
    let lastName = document.forms['userForm']["Lastname"].value;
    if (lastName == "") {
        setError("lnameError", "&#x2716; Please enter your last name");
        flag = false;
    }
    else if (/^[A-Za-z]+$/.test(lastName) == false) {
        setError("lnameError", "&#x2716; Please enter correct last name");
        flag = false;
    }
    else if (lastName.length < 2) {
        setError("lnameError", "&#x2716; length is too short");
        flag = false;
    }
    else {
        setConfirmation("lnameMsg", "&#x2714;");
    }

    //-------DOB Validation---------
    let dob = document.forms['userForm']["birthDate"].value;
    if (dob == "") {
        setError("DOBError", "&#x2716; Please enter your date of birth");
        flag = false;
    }
    else {

        setConfirmation("DOBMsg", "&#x2714;");
    }

    //-------Education Validation---------
    let edu = document.getElementById("userEdu").value;
    if (edu == "-1") {
        setError("eduError", "&#x2716; Please select your education qualification");
        flag = false;
    }
    else {
        setConfirmation("eduMsg", "&#x2714;");
    }


    //-------Gender Validation---------
    let male = document.getElementById("mGender").checked;
    let female = document.getElementById("fGender").checked;
    if (male != true && female != true) {
        setError("genderError", "&#x2716; Please select your gender");
        flag = false;
    }
    else {
        setConfirmation("genderMsg", "&#x2714;");
    }

    //-------Email Validation---------
    let email = document.forms['userForm']["mail"].value
    if (email == "") {
        setError("emailError", "&#x2716; Please enter your email");
        flag = false;
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {

        //This test method returns either true or false
        setError("emailError", "&#x2716; Please enter correct email");
        flag = false;
    }
    else {
        setConfirmation("emailMsg", "&#x2714;");
    }

    //-------Phone Number Validation---------
    let phoneNumber = document.forms['userForm']["phone"].value;
    if (phoneNumber == "") {
        setError("pNumberError", "&#x2716; Please enter your phone number");
        flag = false;
    }
    else if (/^[6-9]\d{9}$/.test(phoneNumber) == false) {
        //This test method returns either true or false
        setError("pNumberError", "&#x2716; Please enter correct phone number");
        flag = false;
    }
    else {
        setConfirmation("pNumberMsg", "&#x2714;");
    }

    return flag;
}

function clearAll() {
    errors = document.getElementsByClassName("formerror");
    msgs = document.getElementsByClassName("formMsg");
    for (let error of errors) {
        error.innerHTML = "";
    }
    for (let msg of msgs) {
        msg.innerHTML = "";
    }
}

function resetForm() {
    clearAll();
    document.getElementById("userSubmit").disabled = true;
}

function setError(id, errorMsg) {
    document.getElementById(id).innerHTML = errorMsg;
}

function setConfirmation(id, msg) {
    document.getElementById(id).innerHTML = msg;
}


function enabledSubmit(termsCheckBox) {
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
                                <td>${user.education}</td>
                                <td>${user.email}</td>
                                <td>${user.phone}</td>
                                <td>
                                    <button class="btn" onclick="removeUser()"><i class="fa fa-trash"></i></button>
                                    <button class="btn" onclick="editUser()"><i class="fa fa-edit"></i></button>
                                </td>
                            </tr>`;
    }
    tableBody.innerHTML = dataHtml;
    console.log(dataHtml);
}

function removeUser() {
    var index, table = document.getElementById('table');
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[6].onclick = function () {
            var c = confirm("do you want to delete this row");
            if (c === true) {
                index = this.parentElement.rowIndex;
                table.deleteRow(index);
            }

            //console.log(index);
        };

    }
    resetForm();
}

function editUser() {
    clearAll();
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            SelectedFullNametoInput(this.cells[0].innerHTML);

            document.getElementById('DOB').value = this.cells[1].innerHTML;
            if (this.cells[2].innerHTML == "male") {
                document.getElementById('mGender').checked = true;
            }
            else {
                document.getElementById('fGender').checked = true;
            }
            SelectedEQtoInput(this.cells[3].innerHTML);
            document.getElementById('email').value = this.cells[4].innerHTML;
            document.getElementById('phoneNumber').value = this.cells[5].innerHTML;

        };
    }
}

function SelectedFullNametoInput(SelectedFullName) {
    console.log(SelectedFullName.length);
    for (var loop = 0; loop < SelectedFullName.length; loop++) {
        if (SelectedFullName[loop] == " ") {
            break;
        }
    }
    var fname = "";
    for (var i = 0; i < loop; i++) {
        fname += SelectedFullName[i];
    }

    var lname = "";
    for (i = loop + 1; i < SelectedFullName.length; i++) {
        lname += SelectedFullName[i];
    }
    document.getElementById('fname').value = fname;
    document.getElementById('lname').value = lname;


}
function SelectedEQtoInput(SelectedEQ) {
    if (document.getElementById('ssc').value == SelectedEQ) {
        document.getElementById('userEdu').selectedIndex = "1";
    }
    else if (document.getElementById('hsc').value == SelectedEQ) {
        document.getElementById('userEdu').selectedIndex = "2";
    }
    else if (document.getElementById('ug').value == SelectedEQ) {
        document.getElementById('userEdu').selectedIndex = "3";
    }
    else if (document.getElementById('pg').value == SelectedEQ) {
        document.getElementById('userEdu').selectedIndex = "4";
    }
    else {
        return;
    }
}
// function enabledSubmit(txt){
//     var bt = document.getElementById('userSubmit');
//         var ele = document.getElementsByTagName('input');

//         // Loop through each element.
//         for (i = 0; i < ele.length; i++) {

//             // Check the element type
//             console.log(i);
//             if ((ele[i].type == 'text' || ele[i].type == 'checkbox') && ele[i].value == '') {
//                 bt.disabled = true;    // Disable the button.
//                 return false;
//             }
//             else {
//                 bt.disabled = false;   // Enable the button.
//             }
//         }
// }
