// add.addEventListener('click', () => {
    validation = () => {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let address = document.getElementById('address').value;
        let mobile = document.getElementById('mobile').value;
        let aadhar = document.getElementById('aadhar').value;
        let age = document.getElementById('age').value;
        let userDate = document.getElementById('Date').value;
        let ToDate = new Date();
        let NAME = /^[a-zA-Z,'.\-\s]*$/
        let phone = /^\d{10}$/;
        let AADHAR = /^\d{12}$/;
        let mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (name == '') {
            alert('Please Give Name')
        return false;
    }
    else if (NAME.test(name) == false) {
        alert('name Contains only Character')
        return false;
    }
    else if (email == '') {
        alert('Give Give Email')
        return false;
    }
    else if (mail.test(email) == false) {
        alert('Give Correct Email')
        return false;
    }
    else if (address == '') {
        alert('Please Give Your Address')
        return false;
    }
    else if (mobile == '') {
        alert('Please Give Mobile Number')
        return false;
    }
    else if (phone.test(mobile) == false) {
        alert('Please Give Correct Mobile Number')
        return false;
    }
    else if (aadhar == '') {
        alert('Please Give Adher No.')
        return false;
    }
    else if (AADHAR.test(aadhar) == false) {
        alert(' Please Give Correct Aadhar')
        return false;
    }
    else if (age == '') {
        alert('Please Give Your Age')
        return false;
    }
    else if (isNaN(age) || age < 1 || age > 100) {
        alert("The age must be a number between 1 and 100");
        return false;
    }
    else if (userDate == '') {
        alert('Please Give Date')
        return false;
    }
    else if (new Date(userDate).getMonth() < ToDate.getMonth()) {
        alert("Please Give Correct Date ");
        return false;
    }
    else if (new Date(userDate).getDate() < ToDate.getDate()) {
        alert("Please Give Correct Date ");
        return false;
    }
    else if (new Date(userDate).getFullYear() < ToDate.getFullYear()) {
        alert("Please Give Correct Date ");
        return false;
    }
    else {
        alert('Submit successfully ')
        let user_record=new Array()
        user_record=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem("users")):[]
        console.log('user_record',user_record);
        user_record.push({
            "name":name,
            "email":email,
            "address":address,
            "mobile":parseInt(mobile),
            "aadhar":parseInt(aadhar),
            "age":parseFloat(age),
            "date":userDate
        })
        localStorage.setItem("users",JSON.stringify(user_record))
        return true;
    }
}