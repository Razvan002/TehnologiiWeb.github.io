document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    
    alert("Numele tau a fost salvat!");
  });