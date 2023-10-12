import Image from "next/image";

const Loading = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-slate-50 z-auto'>
      <Image
        src='/images/loader.svg'
        width={100}
        height={100}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;



