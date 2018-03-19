 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyABsY4ifRwja3QpldsGpgIepZvqJ7dnCJM",
    authDomain: "logdb-a8d54.firebaseapp.com",
    databaseURL: "https://logdb-a8d54.firebaseio.com",
    projectId: "logdb-a8d54",
    storageBucket: "logdb-a8d54.appspot.com",
    messagingSenderId: "61077377038"
  };
  firebase.initializeApp(config);

//refrence message collection
var messageRef = firebase.database().ref('messages');
//listen alpha form submit
document.getElmentById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    
    var name = getInputVal('name');
    var name2 = getInputVal('name2');
    var email = getInputVal('email');
    var email2 = getInputVal('email2');
    var phone = getInputVal('phone');
    var pass = getInputVal('pass');
    var pass = getInputVal('pass2');
    
saveMessage(name,name2,email,email2,phone,pass,pass2);
    
      // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}
    
    
}
function getInputVal(id){
    return document.getElementById(id).value;
    
}
function saveMessage(name,name2,email,email2,phone,pass,pass2){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        name2: name2,
        email: email,
        email2:email2,
        phone:phone,
        pass:pass,
        pass2:pass2,
    });
    
}