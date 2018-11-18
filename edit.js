
function loadFile() {
     
    $.get("loadFile.php")
        .done(function(result){
            console.log(result.user);
            
            $("#file-name").val(result.fileName);
            $("#file-content").val(result.fileContent);
        })
        .fail(function(){
            alert("Uanble to load file.");
        })
}

$(document).ready(function(){
    loadFile();
})