// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDG9mo7c70EBRL529L2SGnQV2vDmGf15R4",
      authDomain: "c93-first-project.firebaseapp.com",
      projectId: "c93-first-project",
      storageBucket: "c93-first-project.appspot.com",
      messagingSenderId: "547882427775",
      appId: "1:547882427775:web:5aefd27f36c16d6d99e64a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
     function addRoom() { room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
       localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
      }

//ADD YOUR FIREBASE LINKS HERE

function getData()
 {firebase.database().ref("/").on('value', function(snapshot) 
 {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot)
  {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;

      //Start code

      //End code
      });});}
getData();
function redirectToRoomName(name) { console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
       }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
 
}
