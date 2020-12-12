import { Injectable } from '@angular/core';

@Injectable()
export class ContactService{
    
    queries:{}[] = [];

    addQuery(msg:{}){
        this.queries.push(msg);
        console.log(this.queries);
        
    }

    getQueries(){
        return this.queries;
    }
}