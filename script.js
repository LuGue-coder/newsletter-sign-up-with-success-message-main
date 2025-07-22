
let email =document.getElementById("Email_address");
let form =  document.getElementById('form');
let signUpContainer = document.querySelector('.signup_container');
let successCard = document.querySelector('.successcard');
let dismissButton = document.getElementById('dismiss_btn');

const setError = () => {
  const errorMessage = document.querySelector('.error_message');

  errorMessage.innerText = 'Valid email required!';
  const inputEmail = document.querySelector('.input_email')
  inputEmail.classList.toggle('error');
}


function validateEmail() {
const emailValue = email.value.trim();
const errorMessage = document.querySelector('.error_message');

  if (!emailValue) {
    return setError();
  }

const isValidEmail =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!isValidEmail.test(emailValue)) {
    return setError();
  }

  else {
    signUpContainer.classList.add('hidden');
    successCard.classList.remove('hidden');
    const emailUserElement = successCard.querySelector("#user_email");
    emailUserElement.innerText= email.value;

    dismissButton.addEventListener('click', ()=> {
       signUpContainer.classList.remove('hidden');
      successCard.classList.add('hidden');
    });
  }
}

  const handleSubmit = (e) => {
  e.preventDefault();
  validateEmail();
};
form.addEventListener("submit", handleSubmit);

//changeImage();

//function changeImage() {

//    if (window.innerWidth < 550) {
 //       imgPart.src = 'assets/images/illustration-sign-up-mobile.svg';
 //       console.log('width 💛', window.innerWidth);

 //   } else {
 //       console.log('width 💜', window.innerWidth);
 //       imgPart.src = 'assets/images/illustration-sign-up-desktop.svg';
    }

}

//window.addEventListener('resize', () => {
 //   console.log('width', window.innerWidth);
 //   changeImage();

});

    