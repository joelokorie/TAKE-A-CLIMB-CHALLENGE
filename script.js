        window.onload = function () {
            //Build an array containing Customer records.
            var customers = new Array();
            customers.push(["Joel", "Okorie"]);
            customers.push(["Anita", "Joel"]);
            

            //Add the data rows.
            for (var i = 0; i < customers.length; i++) {
                AddRow(customers[i][0], customers[i][1]);
            }
        };

        function Add() {
            var firstname = document.getElementById("firstname");
            var surname = document.getElementById("surname");
            AddRow(firstname.value, surname.value);
            firstname.value = "";
            surname.value = "";
                        
        };

        function Remove(button) {
            //Determine the reference of the Row using the Button.
            var row = button.parentNode.parentNode;
            var name = row.getElementsByTagName("TD")[0].innerHTML;
            if (confirm("Do you want to delete: " + name)) {

                //Get the reference of the Table.
                var table = document.getElementById("tblCustomers");

                //Delete the Table row using it's Index.
                table.deleteRow(row.rowIndex);
            }
        };

       
        function AddRow(name, country) {
            //Get the reference of the Table's TBODY element.
            var tBody = document.getElementById("tblCustomers").getElementsByTagName("TBODY")[0];

            //Add Row.
            row = tBody.insertRow(-1);

            //Add Firstname cell.
            var cell = row.insertCell(-1);
            var link = document.createElement('a');       
            link.href = 'http://www.facebook.com';
            link.target = 'blank';
            link.appendChild(document.createTextNode(name));
            cell.appendChild(link);

            //Add Surname cell.
            cell = row.insertCell(-1);
            var link = document.createElement('a');       
            link.href = 'http://www.facebook.com';
            link.target = 'blank';
            link.appendChild(document.createTextNode(country));
            cell.appendChild(link);

            //Add Button cell.
            cell = row.insertCell(-1);
            var btnRemove = document.createElement("INPUT");
            btnRemove.type = "button";
            btnRemove.value = "Remove Contact";
            btnRemove.setAttribute("onclick", "Remove(this);");
            cell.appendChild(btnRemove);

            
        }

       