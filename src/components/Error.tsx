interface IProps {
  text?: string;
}



function Error({ text = "Oooops, some error occured..." }: IProps) {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <h1 className='text-xl font-bold'>{text}</h1>
    </div>
  )
}

export default Error