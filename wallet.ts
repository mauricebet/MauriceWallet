// This manages all wallets functions

/**
 * Returns the current balance of the user's wallet
 * 
 * @param {string} userName     - Username of the wallet owner
 * 
 * @return {number}             - Balance value
 */
export function checkBalance(username: string): number {

    return 0;
}

/**
 * Sends money to target receiver
 * 
 * @param {string} receiver     - receiver's userName
 * @param {string} sender       - sender's username
 * @param {number} ammount      - Ammount of money to be transferred
 * 
 * @return {boolean}            - True if transaction was successful
 */
export function transfer(receiver: string, sender: string, ammount: number): boolean {
    return false;
}

/**
 * Adds value to balance
 * 
 * @param {string} userName     - Username
 * @param {number} ammount      - Ammount to be topped up
 * 
 * @return {boolean}            - True if successfully topped up
 */
export function topUp(userName: string, ammount: number): boolean {
    return false;
}

