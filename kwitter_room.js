


var firebaseConfig = {
      apiKey: "AIzaSyDmGnkrfVSIN-C4DquBU6iuTb3bUrcKtUI",
      authDomain: "kwitter-3adbc.firebaseapp.com",
      databaseURL: "https://kwitter-3adbc-default-rtdb.firebaseio.com",
      projectId: "kwitter-3adbc",
      storageBucket: "kwitter-3adbc.appspot.com",
      messagingSenderId: "712930282756",
      appId: "1:712930282756:web:384554a533f787eb229451",
      measurementId: "G-1S4TC0JNGW"
    };
    
    firebase.initializeApp(firebaseConfig);
   

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name1").innerHTML="Welcome! "+user_name;


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      

      
      });});}
getData();

function logout() {
      window.location="index.html";
}