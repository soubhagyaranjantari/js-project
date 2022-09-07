showData();
function showData() {
    let user_record = new Array();
    user_record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    tableBody = document.getElementById("tableBody");
    let str = "";
    if (user_record[0]) {
        for (let i = 0; i < user_record.length; i++) {
            str +=
                `
            <tr>
            <th scope="row">${i + 1}</th>
            <td>${user_record[i].name}</td>
            <td>${user_record[i].email}</td>
            <td>${user_record[i].age}</td>
            <td>${user_record[i].mobile}</td>
            <td>${user_record[i].aadhar}</td>
            <td>${user_record[i].address}</td>
            <td>${user_record[i].date}</td>
        </tr> `;
        }
        tableBody.innerHTML = str;
    } else {
        return tableBody.innerHTML = `<tr>
       <td colspan="8"> <h4 class='text-primary text-center' >No data present</h4></td>
   </tr> `;
    }
}