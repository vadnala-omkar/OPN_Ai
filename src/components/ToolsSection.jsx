// // import React from "react";
// // import { Image as ImageIcon, MessageSquareText, FileText, Languages, FileScan } from "lucide-react";

// // const tools = [
// //   { name: "OPN Ai Image Generator", icon: <ImageIcon size={40} /> },
// //   { name: "OPN Ai ChatBot", icon: <MessageSquareText size={40} /> },
// //   { name: "OPN Ai Translator", icon: <Languages size={40} /> },
// //   { name: "OPN Ai File Converter", icon: <FileScan size={40} /> },
// // ];

// // const ToolsSection = () => {
// //   return (
// //     <section id="GetStarted" className="min-h-screen w-full bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
// //       {/* Background Blurs */}
// //       <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
// //       <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
// //       <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-blue-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>

// //       <h1 className="text-4xl font-bold text-purple-400 mb-10 z-10">OPN Ai Tools</h1>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
// //         {tools.map((tool, index) => (
// //           <div
// //             key={index}
// //             className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/70 hover:bg-purple-800/30 backdrop-blur-sm"
// //           >
// //             <div className="text-purple-300 hover:text-white transition-colors duration-300">
// //               {tool.icon}
// //             </div>
// //             <p className="mt-3 text-lg font-semibold text-center text-white drop-shadow-sm">{tool.name}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default ToolsSection;
// import React from "react";
// import { Image as ImageIcon, MessageSquareText, FileText, Languages, FileScan } from "lucide-react";

// const tools = [
//   { name: "OPN Ai Image Generator", icon: <ImageIcon size={40} />, link: "/ImageGenerator" },
//   { name: "OPN Ai ChatBot", icon: <MessageSquareText size={40} />, link: "/AIChatbot" },
//   { name: "OPN Ai Translator", icon: <Languages size={40} />, link: "/Translator" },
//   { name: "OPN Ai File Converter", icon: <FileScan size={40} />, link: "/FileConverter" },
// ];

// const ToolsSection = () => {
//   return (
//     <section id="GetStarted" className="min-h-screen w-full bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
//       {/* Background Blurs */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
//       <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-blue-500 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>

//       <h1 className="text-4xl font-bold text-purple-400 mb-10 z-10">OPN Ai Tools</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
//         {tools.map((tool, index) => (
//           <div
//             key={index}
//             onClick={() => window.open(tool.link, "_blank")}
//             className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/70 hover:bg-purple-800/30 backdrop-blur-sm cursor-pointer"
//           >
//             <div className="text-purple-300 hover:text-white transition-colors duration-300">
//               {tool.icon}
//             </div>
//             <p className="mt-3 text-lg font-semibold text-center text-white drop-shadow-sm">{tool.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ToolsSection;

import React from "react";
import { Image as ImageIcon, MessageSquareText, Languages, FileScan } from "lucide-react";

const tools = [
  { name: "OPN Ai Image Generator", 
    icon: <ImageIcon size={40} />, 
    link: "/ImageGenerator" 
  },


  { name: "OPN Ai ChatBot", icon: <MessageSquareText size={40} />, link: "/AIChatbot" },
  { name: "OPN Ai Translator", icon: <Languages size={40} />, link: "/Translator" },
  { name: "OPN Ai File Converter", icon: <FileScan size={40} />, link: "/FileConverter" },
];

const ToolsSection = () => {
  return (
    <section
      id="GetStarted"
      className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white flex flex-col items-center justify-center px-6 py-20 relative"
    >
      <h1 className="text-4xl font-bold text-indigo-400 drop-shadow-md mb-12 z-10">OPN Ai Tools</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10">
        {tools.map((tool, index) => (
          <div
            key={index}
            onClick={() => window.open(tool.link, "_blank")}
            className="cursor-pointer flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <div className="text-indigo-300 hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(129,140,248,0.7)]">
              {tool.icon}
            </div>
            <p className="mt-4 text-lg font-semibold text-center">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
