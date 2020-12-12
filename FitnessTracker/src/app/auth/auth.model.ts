export class User{

    public name:string;
    public surname:string;
    public address:string;
    public email:string;
    public phono:string;
    public username:string;
    public password:string;
    public created_on:number;

    constructor(
     name:string,
     surname:string,
     address:string,
     email:string,
     phono:string,
     username:string,
     password:string,
     created_on:number = Date.now()){

        this.name=name;
        this.surname=surname;
        this.address=address;
        this.email=email;
        this.phono=phono;
        this.username=username;
        this.password=password;
        this.created_on = created_on;


     }
    
}