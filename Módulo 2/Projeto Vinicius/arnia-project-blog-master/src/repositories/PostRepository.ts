import { IPost, IPostDTO } from "../entities/Post";
import { mongoose } from "../database";
import { UserRepository } from "./UserRepository";
import { User } from "../models/UserModel";

const userRepository = new UserRepository(User);

export class PostRepository {
  postModel: mongoose.Model<IPost>;
  constructor(postModel: mongoose.Model<IPost>) {
    this.postModel = postModel;
  }

  async createPost({ author, content }: IPostDTO): Promise<IPost> {
    const newPost = await this.postModel.create({ author, content });

    return newPost;
  }

  async getAllPosts(): Promise<IPost[]> {
    return this.postModel.find({}).populate("author").exec();
  }

  async getPostsByAuthorId(
    authorId: mongoose.Types.ObjectId
  ): Promise<IPost[]> {
    return this.postModel.find({ author: authorId }).exec();
  }

  async giveLikePostById(_id: string): Promise<IPost | null> {
    return this.postModel
      .findOneAndUpdate(
        {
          _id,
        },
        {
          $inc: { likes: +1 },
        },
        {
          returnDocument: "after",
        }
      )
      .exec();
  }

  async deletePost(postId: mongoose.Types.ObjectId) {
    const postToDelete = await this.postModel.findByIdAndDelete(postId).exec();

    if (!postToDelete) {
      throw new Error(`Post with id ${postId.toString()} not found`);
    }

    return true;
  }
}
