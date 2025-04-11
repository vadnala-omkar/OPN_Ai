// import React from "react";

// const images = [
//   {
//     src: "blob:http://localhost:5173/dc370ef5-75f1-4084-8fb3-1d9ef86d2ab4",
//     alt: "OPN Ai First Image", 
//   },
//   {
//     src: "blob:http://localhost:5173/f444b081-fffe-4edb-80d0-e70c51da7863",
//     alt: "Iron Man ",
//   },
//   {
//     src: "blob:http://localhost:5173/2ffafbb6-0a35-400d-bb53-a3dc724359b2",
//     alt: "Bear With a man",
//   },
//   {
//     src: "blob:http://localhost:5173/229e2135-e947-4ace-acd7-328c2c37b63e",
//     alt: "Cartoon Dog",
//   },
// ];

// const GallerySection = () => {
//   return (
//     <section id="gallery" className="min-h-screen py-16 bg-gray-900 text-white flex flex-col items-center justify-center">
//       <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-purple-400">
//           OPN Ai Gallery
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center mx-auto max-w-fit">
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className="relative overflow-hidden rounded-2xl border border-purple-700 shadow-md hover:shadow-purple-500/30 transition-all duration-300"
//             >
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-64 h-60 object-cover rounded-2xl transform hover:scale-105 transition duration-300"
//               />
//               <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-sm font-semibold">
//                 {img.alt}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;

import React from "react";

const images = [
  {
    src: "https://i.ytimg.com/vi/Y40lrlaiwiI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB91ypcmHD4V_1eVYU9t0_-dsnsRw",
    alt: "OPN Ai First Image", 
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSbiJ3v6Joffy7Hob5p5eTpjAjNlOnzdhQw&s",
    alt: "Iron Man ",
  },
  {
    src: "https://media.craiyon.com/2025-04-03/x56hmlGrTD2aB4WEvAc5xw.webp",
    alt: "Bear With a man",
  },
  {
    src: "https://img.freepik.com/premium-photo/cute-dog-pet-smiling-cartoon-3d-ai-generated_755721-366.jpg",
    alt: "Cartoon Dog",
  },
];

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white flex flex-col items-center justify-center px-6 py-20 relative"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-indigo-400 drop-shadow-md">
          OPN Ai Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center mx-auto max-w-screen-xl">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-3xl border border-indigo-500/40 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 shadow-xl hover:shadow-indigo-600/30 transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-64 h-60 object-cover rounded-3xl transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center text-indigo-100 text-sm font-semibold p-4">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
