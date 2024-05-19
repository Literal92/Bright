import { Comment } from '../models/comment.model';

export const COMMENTS: Comment[] = [
  {
    id: 1,
    authorId: 2,
    user: 'John Doe',
    title: 'Great article!',
    createdOn: new Date('2022-05-01'),
  },
  {
    id: 2,
    authorId: 1,
    user: 'Alice Smith',
    title: 'I learned a lot from this!',
    createdOn: new Date('2022-05-05'),
  },
  {
    id: 3,
    authorId: 3,
    user: 'Bob Johnson',
    title: 'Thanks for sharing!',
    createdOn: new Date('2022-05-10'),
  },
  {
    id: 4,
    authorId: 3,
    user: 'User4',
    title: 'Comment 4',
    createdOn: new Date('2024-05-01')
  },
  {
    id: 5,
    authorId: 3,
    user: 'User5',
    title: 'Comment 5',
    createdOn: new Date('2024-05-02')
  },
  {
    id: 6,
    authorId: 3,
    user: 'User6',
    title: 'Comment 6',
    createdOn: new Date('2024-05-03')
  },
  {
    id: 7,
    authorId: 3,
    user: 'User7',
    title: 'Comment 7',
    createdOn: new Date('2024-05-04')
  },
  {
    id: 8,
    authorId: 3,
    user: 'User8',
    title: 'Comment 8',
    createdOn: new Date('2024-05-05')
  },
  {
    id: 9,
    authorId: 3,
    user: 'User9',
    title: 'Comment 9',
    createdOn: new Date('2024-05-06')
  },
  {
    id: 10,
    authorId: 3,
    user: 'User10',
    title: 'Comment 10',
    createdOn: new Date('2024-05-07')
  },
  {
    id: 11,
    authorId: 3,
    user: 'User11',
    title: 'Comment 11',
    createdOn: new Date('2024-05-08')
  },
  {
    id: 12,
    authorId: 3,
    user: 'User12',
    title: 'Comment 12',
    createdOn: new Date('2024-05-09')
  },
  {
    id: 13,
    authorId: 3,
    user: 'User13',
    title: 'Comment 13',
    createdOn: new Date('2024-05-10')
  }
];
