const googleSearchButton = document.querySelector("#google-search");

googleSearchButton.addEventListener("click", function (event) {
    event.preventDefault(); //letiltjuk a default működését az eseménynek (itt: kattintásra submiteli a formot)
    console.log(event) //kilogolom a figyelt esemény paraméter adatait

    const form = document.querySelector("#form-google-search");

    const searchTerm = form.querySelector('[name="q"]').value; // q nevű input mező értékét elmentem egy változóba. idézőjelekre figyelni! 

    if (searchTerm === "") { //ha nincsen semmi beírva, alertet küld
        alert("írj be valamit")
    } else {
        form.submit(); // ha van valami beírva, submitolja a formot

    }


});