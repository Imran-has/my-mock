// "use client";
// import { error } from "console";
// import React, { useEffect, useState } from "react";

// interface User {
//     id:number;
//     price:string;
//     description:string;
//     image:string;
   
  
    
   
  
//   };

// const Datafetch = () => {
//     const [data, setData] = useState<User[]>([]);
//     useEffect(() => {
//         const fetchData=async()=>{
//        try{ 
//           const response = await fetch(
//             "https://6781e45ec51d092c3dcd9955.mockapi.io/api/v1/test"
//           );
//           const data: User[] = await response.json();
//           console.log("data ", data);
//           setData(data);
//         }
//         catch (error){
//             console.log(error)
//         }
//         }
//         fetchData();
//       }, []);
//   return (
//     <div className="grid grid-cols gird-cols-1  sm:grid-cols-2 md:grid-clos-3 lg: grid-clos-4 gap-6 p-10">
//         {data.map((fetch, index) => (
//         <div key={index} className="flex flex-col gap-5 border border-black ">
//          <p>Id: {fetch.id}</p>
          
//           <p>price: {fetch.price}</p>
//           <p>description: {`${fetch.description}`}</p>
          
//           <div><strong>image:</strong>
//           <img src ={fetch.image } alt={fetch.price } className="w-full h-48 object-contain mt-3"></img>
//           </div>
          
//     </div>
//         ))}
//         </div>
    
//   )
// }

// export default Datafetch
