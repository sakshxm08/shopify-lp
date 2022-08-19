function SubForm (){
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
    const inputEmail = document.getElementById('email');
    inputEmail.value = '';

}