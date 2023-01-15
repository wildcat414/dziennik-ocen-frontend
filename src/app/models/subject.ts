export class Subject {
    
    public id?: number;
    public name?: string;
    public created?: number;
    public modified?: number;
    public authorId?: number;

    constructor(values: Subject) {
      Object.assign(this, values);
    }

}