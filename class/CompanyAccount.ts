import { MainAccount } from "./MainAccount"

export class CompanyAccount extends MainAccount {


    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (loanValue: number): void => {
        if (this.validateStatus()) {
            let currentBalance = this.getBalance()
            currentBalance += loanValue;
            console.log(`You took out a loan, your new balance is ${loanValue}`)
        } else {
            console.log('You´re unable do get a loan, there´s no active account')
        }
        
    }

    deposit = (): void => {
        console.log('The company deposited the money')
    }
}