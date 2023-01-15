export class Grade {
    
    public id?: number;
    public value?: number;
    public subjectId?: number;
    public teacherId?: number;
    public studentId?: number;

    constructor(values: Grade) {
      Object.assign(this, values);
    }

}