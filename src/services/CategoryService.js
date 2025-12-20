import { api } from "./api-service";

class CategoryService {
  async addCategory(categoryData) {
    try {
      const response = await api.post("/api/category/add", categoryData);

      return response.data.payload;
    } catch (error) {
      console.error("Failed to add category: " + error);
    }
  }

  async getCategories(){
    try{
        const response = await api.post("/api/category/list");

        return response.data.payload;
    }catch(error){
        console.error("Failed to get all categories: "+ error)
    }
  }

  async editCategory(categoryId,categoryData){
    try{
        const response = await api.post(`/api/category/edit/${categoryId}`, categoryData);

        return response.data.payload;
    }catch(error){
        console.error("Failed to edit category: "+ error);
    }
  }

  async deleteCategory(categoryId){
    try{
        const response = await api.post(`/api/category/delete/${categoryId}`);

        return response.data.payload;
    }catch(error){
        console.error("Failed to delete category: "+ error);
    }
  }
}
export default new CategoryService();
