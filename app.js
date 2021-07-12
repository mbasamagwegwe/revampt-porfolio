
 var firebaseConfig = {
    apiKey: "AIzaSyB4akzkeiIOVGjglkZmFrgrrs2Zk6GXtKE",
    authDomain: "cloudform-ac138.firebaseapp.com",
    projectId: "cloudform-ac138",
    storageBucket: "cloudform-ac138.appspot.com",
    messagingSenderId: "214135291702",
    appId: "1:214135291702:web:350397e89892dec8a53d97"
  };


  firebase.initializeApp(firebaseConfig);
  var firestore=firebase.firestore()

  const db =firestore.collection("formData")

  let submitButton=document.getElementById('submit')
  submitButton.addEventListener("click",(e)=>{
  e.preventDefault()


let firstName=document.getElementById('fname').value
let email=document.getElementById('mail').value
let subject=document.getElementById('subject').value


db.doc().set({
  fname:firstName,
  mail :email,
  subject:subject 
}).then(()=>{
    document.write("Data saved")
}).catch((error)=>{
document.write("error")
})


  })