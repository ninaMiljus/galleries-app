import BaseService from "./BaseService";

class CommentsService extends BaseService {
  async addComment(text) {
    const { data } = await this.http.post("/comments", text);
    
    return data;
  }

  async getComments(id) {
    const { data } = await this.http.get(`/galleries/${id}/comments`);
    
    return data;
  }

  async deleteComment(id) {
    const { data } = await this.http.delete(`/comments/${id}`);

    return data;
  }
}

const commentsService = new CommentsService();
export default commentsService;