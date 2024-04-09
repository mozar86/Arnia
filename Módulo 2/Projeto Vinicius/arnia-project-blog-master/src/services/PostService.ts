import { mongoose } from "../database";
import { IPost, IPostDTO } from "../entities/Post";
import { PostRepository } from "../repositories/PostRepository";

export class PostService {
  private postRepository: PostRepository;
  constructor(repository: PostRepository) {
    this.postRepository = repository;
  }

  async createPost(postData: IPostDTO): Promise<IPost> {
    return await this.postRepository.createPost(postData);
  }

  async updatePost(postId: mongoose.Types.ObjectId, content: string): Promise<IPost> { //5- Criou o service
    const updateResult = await this.postRepository.updatePostById(postId, content); //7- Criou tratamento do retorno do update

    if (!updateResult) {
      throw new Error("Não foi encontrado um post com o id enviado!");
    }
    return updateResult;
  }

  async getAllPosts(): Promise<IPost[]> {
    return this.postRepository.getAllPosts();
  }

  async getPostsByAuthorId(authorId: mongoose.Types.ObjectId) {
    return this.postRepository.getPostsByAuthorId(authorId);
  }

  async giveLikePostById(id: string) {
    const giveLikeResult = await this.postRepository.giveLikePostById(id);

    if (!giveLikeResult) {
      throw new Error("Não foi encontrado um post com o id enviado!");
    }
    return giveLikeResult;
  }

  async deletePost(postId: mongoose.Types.ObjectId): Promise<boolean> {
    return await this.postRepository.deletePost(postId);
  }
}
