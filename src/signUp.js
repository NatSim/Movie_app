export const signUp = () => {
    const signUpdiv = document.querySelector('#sign-up');

    const form = document.createElement('form')
    signUpdiv.appendChild(form)

    const signUpHeader = document.createElement('h1');
    signUpHeader.textContent = 'Sign Up';

    const signUpPara = document.createElement('p');
    signUpPara.textContent = 'Please fill in this form to create an account.';

    const email = document.createElement('label');
    email.htmlFor = 'Email';
    email.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.placeholder = 'Enter email';
    emailInput.name = 'email';
    email.appendChild(emailInput)

    const password = document.createElement('label');
    password.htmlFor = 'password';
    password.textContent = 'Password';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Enter Password';
    passwordInput.name = 'password'
    password.appendChild(passwordInput)

    const repeatPassword = document.createElement('label');
    repeatPassword.htmlFor = 'password';
    repeatPassword.textContent = 'Repeat your password'
    const repeatPasswordInput = document.createElement('input');
    repeatPasswordInput.type = 'password';
    repeatPasswordInput.placeholder = 'Repeat Password';
    repeatPassword.appendChild(repeatPasswordInput)

    const checkBox = document.createElement('label');
    checkBox.htmlFor = 'check-box'
    checkBox.textContent = 'Remember me'
    const checkBoxInput = document.createElement('input');
    checkBoxInput.type = 'check box';
    checkBoxInput.id = 'id';
    checkBoxInput.name = 'check-box'

    
    checkBox.appendChild(checkBoxInput)
    
    const signupTags = [signUpHeader, signUpPara, email, password, repeatPassword, checkBox]
    signupTags.forEach(items => form.appendChild(items))
}
signUp()