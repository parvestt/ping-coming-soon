const form = document.querySelector('.hero__form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const { email } = this;

    if (validateEmail(email.value)) {
        email.classList.remove('error');
        form.reset();
        alert("Subscription successful");
    } else {
        email.classList.add('error');
    };
});

const validateEmail = email => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(mailformat))
        return true;
    else
        return false;
};