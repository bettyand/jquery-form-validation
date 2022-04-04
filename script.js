$(document).ready(function() {
    $("#submit").click(function(event) {
        let name = $("#name");
        let email = $("#email");
        let phone = $("#phone");
        let messageArea = $("#message-area");
        let required = [name, email, phone];

        for (let i = 0; i < required.length; i++) {
            if (required[i].val() === "") {
                $("#message").html("Please Fill Out Required Fields").addClass("warning");
                required[i].prev().addClass("warning");
            } else {
                required[i].prev().removeClass("warning");
                $("#message").removeClass("warning");
            }
        }

        if (!$("label").hasClass("warning")) {
            $("#form").remove();
            $("h2").html("<em>Thanks for your feedback!</em>");
        }
    })
})
