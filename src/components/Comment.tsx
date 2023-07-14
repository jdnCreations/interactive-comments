import Image from 'next/image'
import React, { useState } from 'react'
import { NewComment } from './NewComment'

type Comment = {
  id: number,
  content: string,
  createdAt: string,
  score: number,
  user: {
    image: {
      png: string,
      webp: string,
    },
    username: string,
  },
  replies?: Reply[]
}

type Reply = {
  id: number,
  content: string,
  createdAt: string,
  score: number,
  replyingTo: string,
  user: {
    image: { 
      png: string,
      webp: string,
    },
    username: string
  }
}

type CurrentUser = {
  image: { png: string, webp: string }, username: string
}

const Reply = (props: {reply: Reply, currentUser: CurrentUser}) => {
  const [reply, setReply] = useState(false);

  return (
    <div>
    <div className='rounded-md flex gap-6 max-w-[40rem] p-6 bg-neutralWhite mt-2 ml-auto'>
      <Score score={props.reply.score} />
      <div className='flex flex-col gap-3'>
        <div className="flex gap-4 justify-between">
          <div className='flex gap-4 items-center'>
            <Image
              src={props.reply.user.image.png.slice(1)}
              alt={props.reply.user.username}
              width={30}
              height={30}/>
            <p className='font-bold text-neutralDarkBlue'>{props.reply.user.username}</p>
            {props.currentUser.username === props.reply.user.username && (
              <p className='bg-primaryBlue text-neutralWhite px-2 rounded-sm h-5 flex items-center text-sm'>you</p>
            )}
            <p className='text-neutralGrayBlue'>{props.reply.createdAt}</p>
          </div>

          <div className='flex items-center gap-4'>
            {props.currentUser.username === props.reply.user.username && (
              <div className='flex gap-2'>
                <div className='flex'>
                  <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
                  <button className=' text-primarySoftRed font-medium px-2 rounded-sm h-5 flex items-center text-sm'>Delete</button>
                </div>
                <div className='flex'>
                  <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
                  <button className=' text-primaryBlue font-medium px-2 rounded-sm h-5 flex items-center text-sm'>Edit</button>
                </div>
              </div>
            )}
            {props.currentUser.username !== props.reply.user.username && (
              <div className='flex items-center gap-2'>
                <svg width="15" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
                <button onClick={() => setReply(true)} className='font-medium text-primaryBlue'>Reply</button>
              </div>
            )}
          </div>

            
        </div>
      <p className='text-neutralGrayBlue max-w-[40rem] text-base break-words'><span className='font-medium text-primaryBlue'>{`@${props.reply.replyingTo}`}</span> {props.reply.content}</p>

      </div>
    </div>
      {reply && (
        <NewComment profilePicture={props.currentUser.image.png} type='reply' size='small'/>
      )}
    </div>
  )
}

const Score = (props: {score: number}) => {
  return (
        <div className='font-bold text-primaryLightBlue flex flex-col bg-neutralVeryLightGray min-w-[2.5rem] w-10 h-24 justify-evenly items-center rounded-lg'>
          <span>+</span>
          <span className='text-primaryBlue'>{props.score}</span>
          <span>-</span>
        </div>
  )
}

export const Comment = (props: {comment: Comment, currentUser: CurrentUser}) => {
  const [reply, setReply] = useState(false);

  return (
    <div>
      {/* COMMENT */}
      <div className='rounded-md flex gap-6 max-w-3xl p-6 bg-neutralWhite mb-2'>
        <Score score={props.comment.score} />

        <div className='flex flex-col gap-3'>
          <div className="flex gap-4 justify-between">
            <div className="flex gap-4 items-center">
              <Image
                src={props.comment.user.image.png.slice(1)}
                alt={props.comment.user.username}
                width={30}
                height={30}/>
              <p className='font-bold text-neutralDarkBlue'>{props.comment.user.username}</p>
              {props.currentUser.username === props.comment.user.username && (
                <p className='bg-primaryBlue'>you</p>
              )}
              <p className='text-neutralGrayBlue'>{props.comment.createdAt}</p>
            </div>

            <div className='flex items-center gap-4'>
              {props.currentUser.username === props.comment.user.username && (
                <div className='flex gap-2'>
                  <div className='flex'>
                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
                    <button className=' text-primarySoftRed font-medium px-2 rounded-sm h-5 flex items-center text-sm'>Delete</button>
                  </div>
                  <div className='flex'>
                    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
                    <button className=' text-primaryBlue font-medium px-2 rounded-sm h-5 flex items-center text-sm'>Edit</button>
                  </div>
                </div>
              )}
              {props.currentUser.username !== props.comment.user.username && (
                <div className='flex items-center gap-2'>
                  <svg width="15" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
                  <button onClick={() => setReply(true)} className='font-medium text-primaryBlue'>Reply</button>
                </div>
              )}
            </div>
          </div>
        <p className='text-neutralGrayBlue max-w-[38rem]'>{props.comment.content}</p>

        </div>

      </div>
      {reply && (
        <NewComment profilePicture={props.currentUser.image.png} type='reply' size='large' />
      )}

      {/* REPLIES */}
      {props.comment.replies && (
        <div className="border-l-2 ml-11 border-neutralLightGray flex flex-col gap-2">
          {props.comment.replies && props.comment.replies.map((reply: Reply) => (
            <Reply key={reply.id} reply={reply} currentUser={props.currentUser} />
          ))}
      </div>
    )}
    </div>
  )
}
