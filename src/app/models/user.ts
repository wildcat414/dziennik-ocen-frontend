export class User {
    
    public id?: string;
    public login?: string;
    public firstName?: number;
    public lastName?: number;

    constructor(values: User) {
      Object.assign(this, values);
    }

}