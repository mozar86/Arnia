import { IPost, IPostDTO} from '../entities/Post'
import { PostRepository } from '../repositories/PostRepository'

export class PostService {
    postRepository: PostRepository
    constructor(repository: PostRepository){
        this.postRepository = repository
    }

    async createPostService({author, content}: IPostDTO): Promise<IPost>{
        return this.postRepository.createPost({author,content})
    }
}