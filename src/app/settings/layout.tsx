export default function layout({children}:{children:React.ReactNode}){
  return (
      <div>
        <h1 className='text-2xl font-bold'> Layout Wrapper </h1>
        <div className="border border-red-500 border-dashed">{children}</div>
      </div>
  );
}