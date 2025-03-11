var array = [];

function adddata() {
    var data = prompt("Enter data you need:");
    {
        array.push(data);
        showdata();
    }
}

function showdata() {
    var list = document.getElementById("list");
    list.innerHTML = "";  // Clear the current list

    for (var i = 0; i < array.length; i++) {
        var li = document.createElement("li");
        li.textContent = array[i];
        list.appendChild(li);
    }
}