$(document).ready(function(){
    $("#name").blur(function(){
        namevalidator()
    });

    $("#email").blur(function(){
        emailvalidator();
    });

    $("#organisation").blur(function(){
        orgvalidator();
    });

    $("#male").click(function(){
        alert("Hello sir!");
    });

    $("#female").click(function(){
        alert("Hello mam!");
    });

    $("#resume").change(function(){
        var file_count = document.getElementById('resume').files.length;
        for(var count=0;count<file_count-1;count++){
            var appendfilename= appendfilename+ document.getElementById('resume').files[count].name+"   "; 
        }
        var filesname=$("<p class='filesname'></p>").text(appendfilename.split("undefined")[1])
        $("#browse").after(filesname); 
      });
});

function namevalidator(){
    var name = document.getElementById("name").value;
    if (name.length == 0) {
        $("#name-required").show();
        return;
    } else {
        $("#name-required").hide();
    }
}

function emailvalidator(){
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        $("#email-required").show();
        $("#invalid-email").hide();
        return;
    } else {
        $("#email-required").hide();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            $("#invalid-email").hide();
        } else {
            $("#invalid-email").show();
            return;
        }
    }
}

function orgvalidator(){
    var name = document.getElementById("organisation").value;
    if (name.length == 0) {
        $("#org-required").show();
        return;
    } else {
        $("#org-required").hide();
    }
}