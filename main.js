const firebaseConfig = {
    apiKey: "AIzaSyDUbaFrt8wUwrURzThQ7Sj3Qstu9Mz_-Ro",
    authDomain: "empowerher-bad56.firebaseapp.com",
    databaseURL: "https://empowerher-bad56-default-rtdb.firebaseio.com",
    projectId: "empowerher-bad56",
    storageBucket: "empowerher-bad56.appspot.com",
    messagingSenderId: "188616674524",
    appId: "1:188616674524:web:5b548d7477d7ccceb23819",
    measurementId: "G-7K8HVPLQCH"
  }
  firebase.initializeApp(firebaseConfig);
  const contactFormDB=firebase.database().ref("contactForm");
  document.getElementById('contactForm').addEventListener("submit",submitForm);
  function submitForm(e){
    e.preventDefault();
    var name=getElementVal("name");
    var emailId=getElementVal("emailid");
    var msgContent=getElementVal("msgContent");
    saveMessages(name,emailId,msgContent);
    document.querySelector('.alert').style.display="block";

    setTimeout(()=>{
        document.querySelector(".alert").style.display="none";
    },3000);
    document.getElementById('contactForm').reset();
  }
  const saveMessages=(name,emailId,msgContent)=>{
    var newContactForm=contactFormDB.push();
    newContactForm.set({
        name:name,
        emailId:emailId,
        msgContent:msgContent,
    });
  };
  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  };