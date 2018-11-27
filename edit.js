$(document).ready(function(){    
    // Variables
    let model, //data model: user, fileName, fileContent
        changed = false, //file has been changed
        conn = new WebSocket('ws://localhost:8080');
        fileName = $('#file-name'),
        fileContent = $('#file-content'),
        pingButton = $('#ping'),
        user = $('#user');


    // load file from server and refresh form content
    function loadFile() {
        $.get('loadFile.php')
        .done(function(data){
            model = $.parseJSON(data);
            user.val(model.user);
            fileName.val(model.fileName);
            fileContent.val(model.fileContent);
        })
        .fail(function(){
            alert("Uanble to load file.");
        })
    }

    // save file to server with new content
    function saveFile(){
        if(changed){
            changed = false;
            model.fileContent = fileContent.val();
            $.post('saveFile.php', model)
            .done(function(data){
                console.log("File updated!");
                conn.send(model.user);
            })
            .fail(function(){
                alert("Unable to save file.");
            })
        }
    }        

    // WebSocket functions
    conn.onopen = function(e) {
        console.log("Connection established!");
    };

    conn.onmessage = function(e) {
        e.preventDefault();
        console.log(e.data);
        loadFile();
    };
    
    // Event Listeners
    pingButton.on('click',function(){
        conn.send('Ping from ' + model.user);
    });
    
    fileContent.on('input', function(){
        changed = true; 
    });

    //load file when page ready
    loadFile();

    // automatically save file every 10s
    setInterval(function(){
        saveFile();
    }, 10000);
})