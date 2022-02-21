function setBgcolor()
{
    var i 
    list = document.cookie.split(';')
    for(i=0;i<list.length;i++)
    {
        if(list[i].split('=')[0] == 'color')
        {
            document.body.style.backgroundColor = list[i].split('=')[1]
            document.getElementById("page_color").value = list[i].split('=')[1]
        }
    }
}

function addCookie()
{
    var name = document.getElementById("student_name").value
    var email = document.getElementById("student_email").value
    if ((name.trim() !="") && (loc.trim() !=""))
    {
        document.cookie = "name=" + name + ";expires=Sun, 06 Feb 2022 00:00:00 UTC;"
        document.cookie = "email=" + email + ";expires=Sun, 06 Feb 2022 00:00:00 UTC;"
        localStorage.setItem('name', name)
        localStorage.setItem('email',email)
        sessionStorage.setItem('name', name)
        sessionStorage.setItem('email',email)
        alert("Cookie Added")
        window.email.reload()
    }
    else
    {
        alert("Form Incomplete")
    }
}

function readCookie()
{
    var i
    var message = ""
    var list = documnet.cookie.split(';')
    for(i = 0; i < list.length;i++)
    {
        message += list[i].split('=')[0] + ":" + list[i].split('=')[1] + "\n"
    }
    alert(message)
}

function removeCookie()
{
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('color')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('color')
    document.cookie = "name=;expires=Sun, 06 Feb 2022 00:00:00 UTC;"
    document.cookie = "email=;expires=Sun, 06 Feb 2022 00:00:00 UTC;"
    document.cookie = "color=;expires=Sun, 06 Feb 2022 00:00:00 UTC;"
    alert("cookies cleared")
    window.location.reload()
}

function changeColor()
{
    var color = document.getElementById("page_color").value
    document.cookie = "color=" + color + ";expires=Sun, 06 Feb 2022 00:00:00 UTC;"
    localStorage.setItem('color',color)
    sessionStorage.setItem('color',color)
    document.body.style.backgroundColor = color
}

