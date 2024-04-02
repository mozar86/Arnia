import { mongoose } from "../database";
import { IUser, IUserDTO, IUserWithPosts } from "../entities/User";
import { Post } from "../models/PostModel";
import { PostRepository } from "./PostRepository";

export class UserRepository {
  userModel: mongoose.Model<IUser>;
  constructor(userModel: mongoose.Model<IUser>) {
    this.userModel = userModel;
  }

  async createUser(userData: IUserDTO): Promise<IUser> {
    return this.userModel.create(userData);
  }

  async getAllUsers(): Promise<IUserWithPosts[]> {
    const postRepository = new PostRepository(Post);
    const usersWithoutPosts = await this.userModel.find({}).exec();

    const userWithPosts = await Promise.all(
      usersWithoutPosts.map(async (user) => {
        const postsFromAuthor = await postRepository.getPostsByAuthorId(
          user._id
        );
        return Object.assign(user, { posts: postsFromAuthor });
      })
    );

    return userWithPosts;
  }
}
