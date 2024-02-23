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
    let strMailError = '';
    /**
     * @type string
     */
    let strEmail = userEmail.value;

    let strPswError = '';
    let strPsw = userPassword.value;

    if (isEmpty(strEmail))
    {
        strMailError
    }

});

/**
 * @param {string} strEmail
 * @type boolean
 **/
function checkEmail(strEmail)
{
    let strMailError = '';
    if (isEmpty(strEmail))
    {
        strMailError='Email value is empty';
        return false;
    }
    let indexAt = strEmail.indexOf('@');
    let pointIndex = str2.indexOf('.',indexAt);
    if (indexAt === -1)
    {
        strMailError+='@ is absent';
        return false;
    }
    if (pointIndex === -1)
    {
        strMailError+='. is absent';
        return false;
    }
    let str1 = strEmail.substring(0,indexAt);
    let str2 = strEmail.substring(indexAt,pointIndex);
    let str3 = strEmail.substring(pointIndex,strEmail.length-1);
    if (!str1.includes('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'))
    {
        strMailError='Email invalid';
        return false;
    }

}

/**
 * Check if the given string is empty or null.
 * @param {string} str
 * @type boolean
 */
function isEmpty(str)
{
    return !(str === '' || str === null);

}
