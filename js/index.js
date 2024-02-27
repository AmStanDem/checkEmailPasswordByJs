/**EMAIL:
controllare che il campo non sia vuoto
controllare che la parte locale ovvero quella prima di @ contenga almeno 1 carattere e quella dopo il simbolo @ ovvero la parte di dominio contenga almeno 1 carattere prima del . e almeno 2 caratteri dopo
PASSWORD:
controllare che il campo non sia vuoto
controllare che la password sia lunga almeno 6 caratteri
controllare che la password includa almeno un numero, un carattere speciale, una lettera maiuscola
 **/

const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const btnValidate = document.getElementById('btnValidate');

btnValidate.addEventListener('click', () =>
{

    /* SOLUZIONE REGEX
    let strMailError = '';
    /**
     * @type string

    let strEmail = userEmail.value;

    let strPswError = '';
    let strPsw = userPassword.value;

    if (strEmail.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
    {
        alert('correct e-mail');
    }
    else
    {
        alert('invalid e-mail');
    }
    if(strPsw.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$"))
    {
        alert('password valid');
    }
    else
    {
        alert('password invalid');
    }
    */
    // SOLUZIONE NORMALE

    let strMailError = '';
    /**
     * @type string
     *
    **/
     let strEmail = userEmail.value;
     let strPsw = userPassword.value;
     if(validateEmail(strEmail))
     {
         alert('email valid');
     }
     else
     {
         alert('email invalid');
     }
     if(validatePassword(strPsw))
     {
         alert('password valid');
     }
     else
     {
         alert('password invalid');
     }
});

/**
 * @param {string} strEmail
 * @type boolean
 * Returns true if the email is valid.
 */
function validateEmail(strEmail)
{
    if (strEmail === '')
    {
        return false;
    }
    let atPos = strEmail.indexOf("@");
    let dotPos = strEmail.lastIndexOf(".");

    return !(atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= strEmail.length);
}

/**
 * @param{string} strPsw
 * @type boolean
 * Returns true if the password respects the format.
 */
function validatePassword(strPsw)
{
    if (strPsw === '' || strPsw.length < 6)
    {
        return false;
    }
    let containsNumber = false;
    let containsUppercaseLetter = false;
    let containsSpecialCharacter = false;

    for(let i = 0; i < strPsw.length; i++)
    {
        if(strPsw.charAt(i) >= '0' && strPsw.charAt(i) <= '9')
        {
            containsNumber=true;
        }
    }
    if(containsNumber===true)
        return true;
}
