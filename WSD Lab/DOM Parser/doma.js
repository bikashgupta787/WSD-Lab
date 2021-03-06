var xmlDoc
  var xmlFile = "lab4.xml"
    function loadXMLDoc() {
        var xmlReq = new XMLHttpRequest();
        xmlReq.onreadystatechange = function () {
            console.log(xmlReq.readyState)

            // Request finished and response 
            // is ready and Status is "OK"
            if (xmlReq.readyState == 4 && xmlReq.status == 200) {
                console.log(xmlReq.readyState)
                xmlDoc=xmlReq.responseXML
                stuDetails()
            }
        }

        // employee.xml is the external xml file
        xmlhttp.open("GET", xmlFile, true);
        xmlhttp.send();
    }

    function stuDetails() {
        var i;
        var table =
            `<tr><th>Student-id</th><th>Student-name</th>
                <th>Student-age</th><th>Student-class</th>
                <th>Student-sec</th><th>Student-emailid</th>
                <th>Student-phonenum</th>
            </tr>`
            
        var x = xmlDoc.getElementsByTagName("Student");

        for (i = 0; i < x.length; i++) {
            table += "<tr><td>" +
                x[i].getElementsByTagName("Student-id")[0]
                .childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("Student-name")[0]
                .childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("Student-age")[0]
                .childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("Student-class")[0]
                .childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("Student-sec")[0]
                .childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("Student-emailid")[0]
                .childNodes[0].nodeValue + "</td></tr>"+
                x[i].getElementsByTagName("Student-phonenum")[0]
                .childNodes[0].nodeValue + "</td></tr>"+
                "<td><span class ='material-icons' onclick='deleteR("+i+")'>delete</span></td><tr>"
        }

        // Print the xml data in table form
        document.getElementById("table").innerHTML = table;
    }

    function deleteR(i)
    {
        y = xmlDoc.getElementsByTagName("Student")[i]
        var name = y.getElementsByTagName("Student-name")[0].childNodes[0].nodeValue
        var reply = confirm("Do you want to delete this record? \nName: " + name)
        if(reply == true)
        {
            xmlDoc.documentElement.removeChild(y)
            console.log("Record Deleted: " + name)
            stuDetails()
        }
    }
        