import { QuestionDTO } from "../Question/QuestionDTO";

export interface QuizDTO {
    title: string;
    category_id: number;
    questions: QuestionDTO[];
    
}