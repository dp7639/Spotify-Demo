import {getProviders,signIn} from "next-auth/react";
// import Head from "next/head";


function login({providers}) {
  return (
    <div className="flex flex-col items-center bg-black
    min-h-screen w-full justify-center">
       {/* <Head>
        <title>Welcome to spotify</title>
      </Head> */}
     <img className='w-52 mb-5' src="https://links.papareact.com/9xl" alt="logo"/>
     {Object.values(providers).map((provider, index)=>(
     <div key={index}>
      <button className='bg-[#18D860] text-white
      p-5 rounded-full'
      onClick={()=>signIn(provider.id,{callbackUrl:'/'})}>Login with {provider.name}</button>
     </div>
     ))}
    </div>
  )
}

export default login;

export async function getServerSideProps() {
  const providers=await getProviders();
  return {
    props:{
      providers,
    },
  };
}