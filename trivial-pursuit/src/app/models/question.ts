export class Question{
    public category:string;
    public type:string;
    public difficulte:string;
    public question:string;
    public correct_answer:string;
    public incorrect_answers:string [];

    public constructor(category:string, type:string, difficulte:string, question:string, correct_answer:string,incorrect_answers:[]){
        this.category=category;
        this.type=type;
        this.difficulte=difficulte;
        this.question=question;
        this.correct_answer=correct_answer;
        this.incorrect_answers = incorrect_answers;
    }

}
