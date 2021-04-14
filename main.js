function addUser() {
    username_ = document.getElementById('username').value;
    localStorage.setItem("username", username_);
    window.location = "room.html";
}

function username() {
username_2 = localStorage.getItem("username");
    document.getElementById('username_logged_in').innerHTML = username_2;
}


function addRoom() {
        localStorage.setItem("room_name", document.getElementById("roomname").value);
        firebase.database().ref("/").child(roomname).update({
            roomname: document.getElementById("roomname").value
      });
      window.location = "page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
    row = "<li class='list-group-item' onclick='redirect(this.id)' id='" + document.getElementById("roomname").value + "'> # " + document.getElementById("roomname").value + "</li>";
    document.getElementById("roomListNames").innerHTML + row;
 //End code
 });});}
getData();

function redirect(name) {
    console.log(name);
    localStorage.setItem("roomname_", name);
    window.location = page.html;
}