export const repeatEmailValidation = (email: string, repeatEmail: string) => {
    if (repeatEmail !== email){
        return {
            isValid: false,
            errorMessage: 'Emails do not match'
        }
    }

    return{
        isValid: true,
        errorMessage: ''
    }
}