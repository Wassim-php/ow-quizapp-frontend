import { api } from "./api-service";

class QuestionService {

    
    async createQuestion(questionData){
      try{
        const response = await api.post("/api/question/add", questionData);

        return response.data.payload;
      }catch(error){
        console.error("Failed to create a question: "+ error);
      }
    }

    async editQuestion(questionData){
      try{
        const response = await api.post("api/question/edit", questionData);

        return response.data.payload;
      }catch(error){
        console.error("Failed to edit question: "+ error);
      }
    }

    async getAllQuestions(){
      try{
        const response = await api.post("api/question/list");

        return response.data.payload;
      }catch(error){
        console.error("Failed to fetch all questions: "+ error);
      }
    }

    async getQuestionById(questionId){
      try{
        const response = await api.post(`/api/question/get/${questionId}`);

        return response.data.payload;
      }catch(error){
        console.error("Failed to fetch question by id: "+ error);
      }
    }

    async submitAnswer(questionId, answerId){
      try{
        const response = await api.post(`/api/question/${questionId}/submit`, answerId);

        return response.data.payload;
      }catch(error){
        console.error("Failed to submit answer : "+ error);
      }
    }

    async deleteQuestion(questionId){
      try{
        const response = await api.post(`api/question/delete/${questionId}`);

        return response.data.payload;
      }catch(error){
        console.error("Failed to delete question: "+ error);
      }
    }

    async getQuestionsByCategory(categoryId){
      try{
        const response = await api.post(`/api/question/category/${categoryId}`);

        return response.data.payload;
      }catch(error){
        console.error("Failed to fetch questions by category: "+ error);
      }
    }

}
export default new QuestionService;