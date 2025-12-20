import { api } from "./api-service";

class QuizService {

    
    async createQuiz(quizData){
      try{
        const response = await api.post("/api/quiz/create", quizData);

        return response.data.payload;
      }catch(error){
        console.error("Failed to create a question: "+ error);
      }
    }

    

    async getAllQuizes(){
      try{
        const response = await api.post("api/quiz/list");

        return response.data.payload;
      }catch(error){
        console.error("Failed to fetch all questions: "+ error);
      }
    }

    async getQuizById(quizId){
      try{
        const response = await api.post(`/api/quiz/get/${quizId}`);

        return response.data.payload;
      }catch(error){
        console.error("Failed to fetch question by id: "+ error);
      }
    }

    

    async deleteQuiz(quizId){
      try{
        const response = await api.post(`api/question/delete/${quizId}`);

        return response.data.payload;
      }catch(error){
        console.error("Failed to delete question: "+ error);
      }
    }

    async getQuizesByCategory(categoryId){
      try{
        const response = await api.post(`/api/quiz/category/${categoryId}`);

        return response.data.payload;
      }catch(error){
        console.error("Failed to fetch questions by category: "+ error);
      }
    }

}
export default new QuizService;