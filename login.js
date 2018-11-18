
function login() {
    $.get("login.php", {user: $("#user").value})
        .done(function(){
            alert("Success");
        })
        .fail(function(){
            alert("Fail");
        });
}

$(document).ready(function(){
    $("#login-btn").click(login());
})