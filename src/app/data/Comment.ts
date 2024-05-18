import { Comment } from '../models/comment.model';

export const COMMENTS: Comment[] = [
  {
    id: 1,
    user: 'John Doe',
    title: 'Great article!',
    createdOn: new Date('2022-05-01'),
  },
  {
    id: 2,
    user: 'Alice Smith',
    title: 'I learned a lot from this!',
    createdOn: new Date('2022-05-05'),
  },
  {
    id: 3,
    user: 'Bob Johnson',
    title: 'Thanks for sharing!',
    createdOn: new Date('2022-05-10'),
  },
  // Add more mock comments as needed
];
