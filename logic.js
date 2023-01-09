Data = [{
    "Invoice_id": 1,
    "Client_name": "Verile Peschke",
    "Client_type": "Out-State",
    "Date": "10/03/2019",
    "Due_Date": "06/07/2019",
    "Total": "$6.13",
    "Balance": "$6.95",
    "Status": "Draft"
  }, {
    "Invoice_id": 2,
    "Client_name": "Jaquelyn Trowbridge",
    "Client_type": "Out-State",
    "Date": "09/10/2019",
    "Due_Date": "10/05/2019",
    "Total": "$3.04",
    "Balance": "$5.13",
    "Status": "Partial payment"
  }, {
    "Invoice_id": 3,
    "Client_name": "Claire Lyddy",
    "Client_type": "Out-State",
    "Date": "25/10/2019",
    "Due_Date": "21/06/2019",
    "Total": "$0.75",
    "Balance": "$6.86",
    "Status": "Draft"
  }, {
    "Invoice_id": 4,
    "Client_name": "Robbert Kenneway",
    "Client_type": "Out-State",
    "Date": "07/10/2019",
    "Due_Date": "15/08/2019",
    "Total": "$5.05",
    "Balance": "$2.64",
    "Status": "Partial payment"
  }, {
    "Invoice_id": 5,
    "Client_name": "Tessa Fahey",
    "Client_type": "Out-State",
    "Date": "12/06/2019",
    "Due_Date": "17/10/2019",
    "Total": "$6.68",
    "Balance": "$0.29",
    "Status": "Draft"
  }, {
    "Invoice_id": 6,
    "Client_name": "Eustace Liddard",
    "Client_type": "In-State",
    "Date": "15/05/2019",
    "Due_Date": "11/11/2019",
    "Total": "$5.71",
    "Balance": "$4.12",
    "Status": "Partial payment"
  }, {
    "Invoice_id": 7,
    "Client_name": "Shelden Popworth",
    "Client_type": "In-State",
    "Date": "14/01/2019",
    "Due_Date": "14/09/2019",
    "Total": "$8.16",
    "Balance": "$9.37",
    "Status": "Draft"
  }, {
    "Invoice_id": 8,
    "Client_name": "Erin Tillman",
    "Client_type": "In-State",
    "Date": "10/12/2019",
    "Due_Date": "19/05/2019",
    "Total": "$0.40",
    "Balance": "$2.70",
    "Status": "Partial payment"
  }, {
    "Invoice_id": 9,
    "Client_name": "Jase Anselm",
    "Client_type": "Out-State",
    "Date": "21/10/2019",
    "Due_Date": "23/10/2019",
    "Total": "$0.89",
    "Balance": "$3.98",
    "Status": "Paid"
  }, {
    "Invoice_id": 10,
    "Client_name": "Bev Sebrens",
    "Client_type": "In-State",
    "Date": "07/03/2019",
    "Due_Date": "20/01/2019",
    "Total": "$5.39",
    "Balance": "$5.49",
    "Status": "Draft"
  }, {
    "Invoice_id": 11,
    "Client_name": "Ealasaid Rispen",
    "Client_type": "In-State",
    "Date": "20/03/2019",
    "Due_Date": "15/03/2019",
    "Total": "$1.64",
    "Balance": "$5.80",
    "Status": "Partial payment"
  }, {
    "Invoice_id": 12,
    "Client_name": "Gerhardine Duiguid",
    "Client_type": "In-State",
    "Date": "18/08/2019",
    "Due_Date": "13/10/2019",
    "Total": "$6.19",
    "Balance": "$0.15",
    "Status": "Draft"
  }, {
    "Invoice_id": 13,
    "Client_name": "Davy Briereton",
    "Client_type": "In-State",
    "Date": "29/12/2019",
    "Due_Date": "21/03/2019",
    "Total": "$2.05",
    "Balance": "$9.82",
    "Status": "Paid"
  }, {
    "Invoice_id": 14,
    "Client_name": "Nero Le Fevre",
    "Client_type": "Out-State",
    "Date": "27/04/2019",
    "Due_Date": "11/01/2019",
    "Total": "$5.73",
    "Balance": "$4.43",
    "Status": "Draft"
  }, {
    "Invoice_id": 15,
    "Client_name": "Corbett Cartwight",
    "Client_type": "In-State",
    "Date": "21/03/2019",
    "Due_Date": "05/07/2019",
    "Total": "$7.79",
    "Balance": "$7.64",
    "Status": "Paid"
  }];

  function bodyload() {
    for (var item of Data){
        var tr = document.createElement("tr");

        var tdinvoice = document.createElement("td");
        var tdCN = document.createElement("td");
        var tdDate = document.createElement("td")
        var tdDD = document.createElement("td")
        var tdtotal = document.createElement("td")
        var tdBalance = document.createElement("td")
        var tdStatus = document.createElement("td")

        tdinvoice.innerHTML = item.Invoice_id
        tdCN.innerHTML = item.Client_name
        tdDate.innerHTML = item.Date;
        tdDD.innerHTML = item.Due_Date;
        tdtotal.innerHTML = item.Total;
        tdBalance.innerHTML = item.Balance;
        tdStatus.innerHTML = item.Status;

        tr.appendChild(tdinvoice)
        tr.appendChild(tdCN)
        tr.appendChild(tdDate)
        tr.appendChild(tdDD)
        tr.appendChild(tdtotal)
        tr.appendChild(tdBalance)
        tr.appendChild(tdStatus)
        
        document.querySelector("tbody").appendChild(tr)

        if(tdStatus.innerHTML=="Draft"){
            tdStatus.className ="draft bg-danger"
        }else if(tdStatus.innerHTML=="Partial payment"){
            tdStatus.className = "bg-primary partial"
        }else{
            tdStatus.className = "bg-info paid"
        }
    }
  }

var Arr = [];

function changelist(){    
    var e = document.getElementById("status");
	var result = e.options[e.selectedIndex].text;

    for (let i = 0; i < Data.length; i++) {
        if (result==Data[i].Status) {
            Arr.push(Data[i])
        }
    }
    function DeleteRows() {
        var rowCount = tbl.rows.length;
        for (var i = rowCount - 1; i > 0; i--) {
            tbl.deleteRow(i);
        }
    }
    DeleteRows();
    Data=Arr;
    bodyload();
}
var client=[];
function changeClient(){    
    var e = document.getElementById("client");
	var result = e.options[e.selectedIndex].text;

    for (let i = 0; i < Data.length; i++) {
        if (result==Data[i].Client_type) {
            client.push(Data[i])
        }
    }
    function DeleteRows() {
        var rowCount = tbl.rows.length;
        for (var i = rowCount - 1; i > 0; i--) {
            tbl.deleteRow(i);
        }}
    DeleteRows();
    Data=client;
    bodyload();
}

function datefilter(){
    startDate = document.getElementById("start").value;
    endDate = document.getElementById("end").value;

    var tempArray=   data.filter(function (d, i) {
        return d >= startDate && d <= endDate;
    })
}