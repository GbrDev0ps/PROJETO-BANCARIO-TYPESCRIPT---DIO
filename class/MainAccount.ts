export abstract class MainAccount {
    private name: string
    readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name 
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Name changed successfully')
    }

    getBalance = (): number  => {
        return this.balance
    }
    
    getName = (): string => {
        return this.name
    }

    deposit = (depValue: number): void => {
        if(this.validateStatus()) {
            this.balance += depValue
        console.log(`You deposited R$${this.balance}. The new balance is R$${this.balance}`)
        } else {
            console.log('You can´t make a deposit in a inative account')
        }
        
        
    }

    withdraw = (withdraw: number): void => {
        if(this.balance >= withdraw ) {
            this.balance -= withdraw
            console.log(`You withdrew R$${withdraw}. The new balance is R$${this.balance}`)
        } else {
            console.log('Not enough cash!')
        }
    }
        

    validateStatus = (): boolean => {
        if (this.status){
            return this.status
        } 

       throw new Error('The account is invalide')
    }
}