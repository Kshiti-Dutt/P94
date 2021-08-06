
var firebaseConfig = {
      apiKey: "AIzaSyBCglVCKAO9_jtGnU-VCiTu_JtMzBFFaoM",
      authDomain: "kwitter-fdfab.firebaseapp.com",
      databaseURL: "https://kwitter-fdfab-default-rtdb.firebaseio.com",
      projectId: "kwitter-fdfab",
      storageBucket: "kwitter-fdfab.appspot.com",
      messagingSenderId: "952355011717",
      appId: "1:952355011717:web:419e0f80ecba8685887dec",
      measurementId: "G-HPK9KE5DP1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout()
{
localStorage.removeItem("user");
localStorage.removeItem("room_name");
window.location = "index.html";
}