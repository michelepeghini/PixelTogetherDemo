$(document).ready(function(){
    
    let model,
        changed = false,
        fileName = $('#file-name'),
        fileContent = $('#file-content'),
        users = $('#users');

        function loadFile() {
        $.get('loadFile.php')
        .done(function(data){
            model = $.parseJSON(data);
            fileName.val(model.fileName);
            fileContent.val(model.fileContent);
        })
        .fail(function(){
            alert("Uanble to load file.");
        })
    }
    
    function saveFile(){
        if(changed){
            changed = false;
            model.fileContent = fileContent.val();
            $.post('saveFile.php', model)
            .done(function(data){
                model = $.parseJSON(data);
                fileContent.val(model.fileContent);
            })
            .fail(function(){
                alert("Unable to save file.");
            })
        }
    }

    loadFile();

    fileContent.on('input', function(){
        changed = true; 
    });
    
    setInterval(function(){
        saveFile();
    }, 10000);
})