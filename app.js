const validateName = () => {
    const name = document.getElementById('Name');
    
    const re = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

    re.test(name.value) ? name.classList.remove('is-invalid') : name.classList.add('is-invalid');
}

const validateEmail = () => {
    const email = document.getElementById('Email');
    
    const re = /^(\w+)@(\w+)\.([a-zA-z]){2,5}$/;
    re.test(email.value) ? email.classList.remove('is-invalid') : email.classList.add('is-invalid');
}

const validatePhone = () => {
    const phone = document.getElementById('Phone');
        
    // Valid phone number regex(Tanzania)
    // +255 125 364 789
    // 0754547896
    // +255123478962
    // +255 123456789
    const re = /^(?:(0){1}([0-9]){9}|\+255(\s?-?)([0-9]){9})|\+255(\s?)([0-9]{3})(\s?)([0-9]{3})(\s?)([0-9]{3})$/;

    re.test(phone.value) ? phone.classList.remove('is-invalid') : phone.classList.add('is-invalid');
}
const validateZip= () => {
    const zip = document.getElementById('ZipCode');
    
    const re = /^\d{5}$/;

    re.test(zip.value) ? zip.classList.remove('is-invalid') : zip.classList.add('is-invalid');
}


document.getElementById('Name').addEventListener('blur',validateName);
document.getElementById('Phone').addEventListener('blur',validatePhone);
document.getElementById('Email').addEventListener('blur',validateEmail);
document.getElementById('ZipCode').addEventListener('blur',validateZip);