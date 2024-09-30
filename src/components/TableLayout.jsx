import React from 'react';

export default function TableLayout({ headers, rows }) {
  return (
    <table className="border border-[#ccc] border-collapse w-full table-fixed overflow-hidden">
      {/* Table Head */}
      <thead className="hidden sm:table-header-group">
        <tr className="border border-[#ddd]">
          {headers.map((header, index) => (
            <th
              key={index}
              scope={header.scope || 'col'}
              className="px-2 py-[0.625em] text-center uppercase text-[0.85em] tracking-wider"
            >
              {header.label}
            </th>
          ))}
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="w-full">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="border border-[#ddd] block sm:table-row mb-[0.625em] sm:mb-0">
            {headers.map((header, colIndex) => (
              <td
                key={colIndex}
                data-label={header.label}
                className="block sm:table-cell px-2 py-[0.625em] text-right sm:text-center border-b last:border-b-0 sm:border-0 before:content-[attr(data-label)] before:font-bold before:uppercase before:float-left before:sm:hidden"
              >
                {row[header.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}


// {/* Implemented Responsive Table layout for TailorSection for TailorRecommendations Page*/}
//       {/* <table className="container max-w-full  table-auto w-full border-collapse border border-gray-400 text-center"> */} 
//       <table className="border-collapse table-fixed border-[#ccc] border-1 w-full"> 
//       {/* <thead className="bg-[#f8434f] text-white container min-w-full"> */}
//         {/* <tr className="container max-w-full justify-between flex items-center"> */}
//         <thead>
//           <tr>
//           {/* <th className="border border-gray-400 px-4 py-2">S/No</th>
//           <th className="border border-gray-400 px-4 py-2">Tailor name</th>
//           <th className="border border-gray-400 px-4 py-2">Ratings</th>
//           <th className="border border-gray-400 px-4 py-2">Address of tailor</th>
//           <th className="border border-gray-400 px-4 py-2">Pincode</th>
//           <th className="border border-gray-400 px-4 py-2">Phone Number</th> */}
//             <th scope="col">S/No</th>
//             <th scope="col">Tailor name</th>
//             <th scope="col">Ratings</th>
//             <th scope="col">Address of tailor</th>
//             <th scope="col">Pincode</th>
//             <th scope="col">Phone Number</th>
//         </tr>
//       </thead>
//       <tbody>
//            {/* Mapped Data from backend */}
//         {/* {tailors && tailors.map((tailor, index) => ( */}
//           <tr >
//           {/* // className="odd:bg-gray-100 even:bg-white"> */}
//             <td data-label="S/No" className="border border-gray-400 px-4 py-2">S/No</td>
//             <td data-label="Tailor name" className="border border-gray-400 px-4 py-2">Tailor</td>
//             <td data-label="Ratings" className="border border-gray-400 px-4 py-2">Ratings</td>
//             <td data-label="Address of tailor" className="border border-gray-400 px-4 py-2">Address</td>
//             <td data-label="Pincode" className="border border-gray-400 px-4 py-2">Pincode</td>
//             <td data-label="Phone Number" className="border border-gray-400 px-4 py-2">Phone</td>
//           </tr>
//         {/* ))} */}
//       </tbody>
//     </table>