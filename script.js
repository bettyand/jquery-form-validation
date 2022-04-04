$(document).ready(function() {
    $("#submit").click(function(event) {
        let name = $("#name").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        let messageArea = $("#message-area");
        let required = [name, email, phone];

        for (let i = 0; i < required.length; i++) {
            if (required[i] === "") {
                $("#message").html("Please Fill Out Required Fields").addClass("warning");
                $(`#${required[i]}`).prev().addClass("warning");
            } else {
                $(`#${required[i]}`).prev().removeClass("warning");
            }
        }

        if ($("label").class() !== "warning") {
            $("#form").remove();
            $("h2").html("<em>Thanks for your feedback!</em>");
        }
    })
})
