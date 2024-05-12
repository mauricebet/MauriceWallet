// This handles the account processes

interface UserData {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age: number;
    wallet: number;
}

/**
 *  Takes in user details then registers that user if all details are valid
 * 
 * @param {string} firstName    - User's first name
 * @param {string} LastName     - User's last name
 * @param {string} userName     - User's chosen username
 * @param {string} email        - User's email address
 * @param {number} age          - User's age
 * @param {string} password     - User's password of choice
 * 
 * @return {boolean}            - True if successfully registered account
 */
export function registerAccount(firstName: string, lastName: string, userName: string, email: string, age: number, password: string): boolean {

    return false;
}

/**
 * Logs in a user if details are valid
 * 
 * @param {string} userId       - Can be the username or email address of user
 * @param {string} password     - User's password
 * 
 * @return {boolean}            - True if successfully logged in
 */
export function loginAccount(userId: string, password: string): boolean {

    return false;
}

/**
 *  Takes in an infoId, then calls another function related to that id
 * 
 * @param {number} infoId       - User's first name
 * 
 * @return {boolean}            - True if successfully registered account
 */
export function updateDetail(infoId: number): boolean {

    return false;
}

/**
 *  Takes in a username, then prints out the details of that user
 * 
 * @param {string} username       - User's first name
 * 
 * @return {void}            
 */
export function displayAccInfo(username: string) {

}