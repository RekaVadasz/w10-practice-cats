const googleSearchButton = document.querySelector("#google-search");

googleSearchButton.addEventListener("click", function (event) {
    event.preventDefault(); //letiltjuk a default működését
    console.log(event)

    const form = document.querySelector("#form-google-search");

    const searchTerm = form.querySelector('[name="q"]').value; // input mező értékét kiválasztom. idézőjelekre figyelni! 

    if (searchTerm === "") { //ha nincsen semmi beírva, alertet küld
        alert("írj be valamit")
    } else {
        form.submit(); // ha van valami beírva, submitolja a formot

    }


});