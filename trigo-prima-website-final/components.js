document.addEventListener("DOMContentLoaded", function () {

    fetch("./header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Header tidak ditemukan");
            }

            return response.text();
        })
        .then(data => {
            document.getElementById("site-header").innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });


    fetch("./footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Footer tidak ditemukan");
            }

            return response.text();
        })
        .then(data => {
            document.getElementById("site-footer").innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });

});