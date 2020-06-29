//Verify email form valid
const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(",+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regEx)) return true;
    else return false;
}

//Verify a field to not be empty
const isEmpty = (string) => {
    if(string.trim() === '') return true;
    else return false;
} 

exports.validateSignupData = (data) => {
    let errors = {};
    //Checking field and form email
    if (isEmpty(data.email)) {
        errors.email = 'must not be empty'
    } else if(!isEmail(data.email)){
        errors.email = 'Must be a valid email adress'
    }
    //Checking field and password matches
    if(isEmpty(data.password)) errors.password = 'must not be empty'
    if(data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords must be the same';
    if(isEmpty(data.handle)) errors.handle = 'must not be empty'

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
};

exports.validateLoginData = (data) => {
    let errors = {};
    //Verify fields
    if(isEmpty(data.email)) errors.email = 'Must not be empty';
    if(isEmpty(data.password)) errors.password = 'Must not be empty';

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
};

exports.reduceUserDetails = (data) => {
    let userDetails = {};

    if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
    if (!isEmpty(data.website.trim())) {
        if (data.website.trim().substring(0, 4) !== 'http') {
            userDetails.website = `http://${data.website.trim()}`;
        } else userDetails.website = data.website;
    }
    if (!isEmpty(data.location.trim())) userDetails.location = data.location;

    return userDetails;
};