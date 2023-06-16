export const passwordValidation = (password: string) => {

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    if(!passwordRegex.test(password)){
        return{
            isValid: false,
            errorMessage: 'Password must be a minimum of 8 characters long and include at least ' +
                'one character, one digit and one allowed special character (@$!%*#?&), '
        }
    }

    return{
        isValid: true,
        errorMessage: ''
    }
}