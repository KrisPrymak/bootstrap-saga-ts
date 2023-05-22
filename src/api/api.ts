import { instance } from "./axios";

export const postsAPI = {
  async getPosts() {
    return instance.get("/posts");
  },
  async getUserPosts(userId: number) {
    return instance.get(`/posts?userId=${userId}`);
  },
};

export const commentsAPI = {
  async getComments(postId: number) {
    return instance.get(`/comments?postId=${postId}`);
  },
};

export const userAPI = {
    async getUser(userId: number) {
      return instance.get(`/users/${userId}`);
    },
  };