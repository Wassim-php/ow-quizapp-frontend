import { AnswerDTO } from "../Answer/AnswerDTO";

export interface QuestionDTO {
    question: string;
    explanation: string;
    category_id: number;
    answers: AnswerDTO[];


}