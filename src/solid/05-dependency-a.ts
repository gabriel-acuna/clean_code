import { PostService } from "./05-dependency-b";
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiService,
} from "./05-dependency-c";

// Main
(async () => {
  const PostProvider = new WebApiService();
  const postService = new PostService(PostProvider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
