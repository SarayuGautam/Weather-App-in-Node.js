 const weatherForm= document.querySelector('form');
 const msgOne =document.querySelector('#msg-one');
 const msgTwo =document.querySelector('#msg-two');

 msgOne.textContent="";
 msgTwo.textContent="";

  weatherForm.addEventListener('submit',(e)=>{
      e.preventDefault();
      const address = document.querySelector('#address').value;
      msgOne.textContent="Loading...";
      msgTwo.textContent="";
      fetch(`http://localhost:3000/weather?address=${address}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.error) {
          return msgOne.textContent=data.error;
        }
         msgOne.textContent=data.location;
         msgTwo.textContent=data.forecast;
      })
      .catch(err => msgTwo.textContent=err);
      });

