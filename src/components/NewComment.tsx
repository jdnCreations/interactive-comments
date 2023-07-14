import Image from "next/image"

export const NewComment = (props: { profilePicture: string, type: string, size?: string }) => {
  const size = props.size === "small";
  console.log(size);
  const classes = `flex bg-neutralWhite h-32 p-6 rounded-md mt-2 gap-4 items-start w-[45rem] max-w-[${size? '40rem' : 'full'}] ${size? 'ml-auto' : ''}`;

    return (
      <div className={classes}>
        <Image 
          src={props.profilePicture.slice(1)}
          alt='Profile Picture'
          width={42}
          height={42}
        />
        <textarea placeholder='Add a comment...' className='w-[100%] border-primaryLightBlue border rounded-md h-[100%] px-4 py-2 self-start resize-none outline-none'/>
        <button className='uppercase font-regular bg-primaryBlue text-neutralWhite rounded-md px-8 h-12'>{props.type}</button>
      </div>
    )
  }