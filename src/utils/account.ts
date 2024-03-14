export default class Account {
  private type:string|null = '';
  private numberOfBankStatements = 0;
  private numberOfTransfers = 0;
  private numberOfWithdraws = 0;
  private balance = 0;
  private name = '';
  private email = '';
  private password = '';
  private cpf = '';
  private role = 'ROLE_USER';
  constructor(name:string, email:string,password:string,cpf:string,type:string|null){
    this.name = name;
    this.email = email;
    this.password = password;
    this.cpf = cpf;
    this.type = type
  }
}