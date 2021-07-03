// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB_QQ84zWqK5zhkt79so6SRHdTi5P6zQlQ",
      authDomain: "chatbird-b370f.firebaseapp.com",
      databaseURL: "https://chatbird-b370f-default-rtdb.firebaseio.com",
      projectId: "chatbird-b370f",
      storageBucket: "chatbird-b370f.appspot.com",
      messagingSenderId: "308853762739",
      appId: "1:308853762739:web:5feae7be22e064fec75ec6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name")
document.getElementById("welcome").innerHTML = "Welcome " + username + "!";

function addPage() {
      roomName = document.getElementById("RoomTextBox").value;
      firebase.database().ref("/").child(roomName).update({
            purpose: "addingRoom"
      });
      localStorage.setItem("Roomname", roomName);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML+=row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("Roomname");
window.location="index.html";
}