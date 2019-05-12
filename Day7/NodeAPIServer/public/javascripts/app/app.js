function Authenticate() {
    $.post("api/authenticate", { username: "manish", password: "manish" },
        function (res) {
            sessionStorage.setItem("tk", res.token);
            Refresh();
        }, "json");
};


function Refresh() {
    $.ajax({
        url: "api/users",
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            for (let item of response.users) {
                var li = "<li class='list-group-item'>" + item.username + "</li>";
                $("#users").append(li);
            }
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("x-access-token", sessionStorage.getItem('tk'));
        }
    });
};

$(document).ready(function () {
    Authenticate();
    // Refresh();
});