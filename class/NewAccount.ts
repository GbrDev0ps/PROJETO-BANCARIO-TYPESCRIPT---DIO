import { MainAccount } from "./MainAccount";

export class NewAccount extends MainAccount {
    constructor (name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (depValue: number): void => {
        let currentBalance = this.getBalance()
        currentBalance += (depValue + 10)
        console.log(`You received a bonus of $10 dollars, your new balance is $${currentBalance}`)
    }






}