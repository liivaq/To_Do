export const emailValidation = (email: string) => {
    if (!email){
        return {
            isValid: false,
            errorMessage: 'Email is required'
        }
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(!emailRegex.test(email)){
        return {
            isValid: false,
            errorMessage: 'Enter a valid email'
        }
    }

    return{
        isValid: true,
        errorMessage: ''
    }
}