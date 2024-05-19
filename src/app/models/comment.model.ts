export class Comment {
  id: number;

  user: string;

  title: string;

  createdOn: Date;

  authorId: number;

  constructor(props?: Partial<Comment>) {
    Object.assign(this, props);
  }
}
