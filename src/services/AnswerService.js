import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8088",
  headers: {
    "Content-Type": "application/json",
  },
});

class AnswerService {
  async editAnswer(answerData) {
    try {
      const response = await api.post("/api/answer/edit", answerData);

      return response.data.payload;
    } catch (error) {
      console.error("Error editing answer: " + error);
    }
  }

  async addAnswersToQuestion(questionId, answerData) {
    try {
      const response = await api.post(`/api/answer/${questionId}`, answerData);

      return response.data.payload;
    } catch (error) {
      console.error("Error adding answers to the question: " + error);
    }
  }

  async deleteAnswer(answerId){
    try{
        const response = await api.post(`/delete/${answerId}`);

        return response.data.payload;
    } catch (error) {
        console.error("Error deleting answer", error);
    }
  }
}
export default AnswerService;
