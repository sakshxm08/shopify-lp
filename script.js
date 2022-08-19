let inputEmail = document.getElementById('email');
function SubForm(){
  
  if (inputEmail.value="" || !(inputEmail.value.includes('@'))){
    alert('Please enter a valid email adress.');
  }
  else{
    $.ajax({
        url:'https://api.apispreadsheets.com/data/do4Q3KBo2p9PHl2Q/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          alert("Email registered successfully.")
        },
        error: function(){
          alert("There was an error :(")
        }
    });

  }  
  inputEmail.value = '';
}