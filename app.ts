import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Gabriel', 10)
console.log(peopleAccount)
peopleAccount.deposit(44)
peopleAccount.withdraw(24)

const companyAccount: CompanyAccount = new CompanyAccount('Gabriel', 80)
console.log(companyAccount)
companyAccount.getLoan(200)

const newAccount: NewAccount = new NewAccount('Jorge', 77)
console.log(newAccount)
newAccount.deposit(10)