import Image from 'next/image';
import data from '../../public/data.json';
import { Comment } from "~/components/Comment";
import { NewComment } from '~/components/NewComment';

export default function Home() {
  const comments = data.comments;
  const currentUser = data.currentUser;


  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-2'>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} currentUser={currentUser} />
      ))}
      <NewComment profilePicture={currentUser.image.png} type='send'/>
    </div>
  );
}