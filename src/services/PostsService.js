import HttpClient from './utils/HttpClient';

class PostsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listPosts() {
    return this.httpClient.get('/posts');
  }

  async getPost(id) {
    return this.httpClient.get(`/posts/${id}`);
  }

  async getPostByAuthor(authorId) {
    return this.httpClient.get(`/posts?author_id=${authorId}`);
  }

  async createPost(newPost) {
    return this.httpClient.post('/posts', newPost);
  }

  async editPost(id, newPost) {
    return this.httpClient.put(`/posts/${id}`, newPost);
  }

  async deletePost(id) {
    return this.httpClient.delete(`/posts/${id}`);
  }
}

export default new PostsService();
