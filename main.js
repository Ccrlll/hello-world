const intro = document.getElementById('wru');
const input = document.getElementById('name');
const form = document.getElementById('myForm');
let clicked = false;

input.title = "Must be atleast 2 Character & Only letters";
input.pattern = "^(?! )([a-zA-Z ]){2,}$";
input.placeholder = "Enter your name";
input.required = true;
input.autocomplete = "off";

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!clicked) {
  const name = input.value;
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  const hello = document.createElement('span');
  hello.innerHTML = '&#128075'; 

  const h1 = document.createElement('h1');
  h1.textContent = 'Hello ' + capitalizedName;
  h1.style.color = 'var(--secondary-color)';
  h1.appendChild(hello);

  const message = document.createElement('p');
  message.textContent = 'I hope you are doing well!';
  message.style.fontSize = '11px'
  message.style.color = 'var(--secondary-color)';

  const formContainer = document.querySelector('.form-container');
  formContainer.appendChild(h1);
  formContainer.appendChild(message);

    clicked = true;
        if (clicked == true) {
              intro.remove();
              form.remove();

              const countdownElement = document.createElement('p');
              countdownElement.style.fontSize = '11px';
              countdownElement.style.position = 'absolute';
              countdownElement.style.bottom = '9px';
              countdownElement.style.color = 'var(--primary-color)';

              formContainer.appendChild(countdownElement);

              let secondsRemaining = 5;
              setInterval(() => {
                countdownElement.textContent = `Page will reload in ${secondsRemaining} seconds.`;
                if (secondsRemaining === 0) { location.reload(); }
                secondsRemaining--;
              }, 1000);
        }
  }
}); 
