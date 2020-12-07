const btn = document.getElementByTagName ('input[type="submit"]');

btn.addEventListener('click', e => {
    e.preventDefault();

    const emailValue = document.getElementById('email').nodeValue;

    if( emailValue && emailValue != '') {
        fetch('dbConnect.js')
        .then(
            function(response) {
              if (response.status !== 200) {
                console.log('Ok' + response.status);
                return;
              }
    
              response.json().then(function(data) {
                console.log(data);
              });
            }
          )
          .catch(function(err) {
            console.log(err);
          });
    }
})