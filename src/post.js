class Post {
  constructor(title, author, content, isNew = false) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.isNew = isNew;
  }
}

export default Post;
