// import Image from 'next/image';

// const MainArticle = () => {
//   return (
//     <div className="min-h-screen bg-teal-500 flex justify-center items-center p-1">

//       <div className="flex flex-col md:flex-row gap-11 items-center space-x-0 md:space-x-10 p-2">
//         {/* Left Section - Text */}
//         <div className="text-white text-center md:text-left  ">
//           <h1 className="text-5xl font-bold mt-4">
//               Welcome to the
//               <br />
//                Jhunuj Divyang Foundation,
//           </h1>
//           <p className="mt-6 text-lg max-w-lg">
//            a dedicated non-profit 
//           organization making a difference in the lives of the differently-abled since 2014.
//            Established in the vibrant city of Pimpri-Chinchwad, Maharashtra, our foundation has grown significantly over the years,
//             reaching communities across the state. Our primary mission is to empower and uplift
//            differently-abled individuals by advocating for their rights, promoting education, and creating opportunities for sustainable livelihoods.
//           </p>
//           <button className="mt-6 px-6 py-3 bg-white text-teal-500 font-semibold rounded-lg">
//             Get started
//           </button>
//         </div>

//         {/* Right Section - Image */}
//         <div className="mt-10 md:mt-0">
//           <div className="relative">
//             <div className="absolute right-4 top-0 w-8 h-8 bg-white rounded-full"></div>
//             <Image
//               src="/person-donations-box.png" // Replace this with your image path
//               alt="Donations"
//               width={400}
//               height={400}
//               className="rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainArticle;

// components/DonateSection.tsx
import Image from 'next/image';


const MainArticle = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center bg-black text-white">
      <Image
        src="/awards/mainPhoto.jpeg"
        alt="main photo"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="opacity-40"
        priority
      />
      <div className="absolute z-10 max-w-[80rem] text-center">
      <div className="text-white text-center md:text-left flex flex-col justify-center items-center  ">
          <h1 className="text-5xl font-bold mt-4">
              Welcome to the Jhunuj Divyang Foundation,
          </h1>
          <p className="mt-6 text-lg ">
           a dedicated non-profit 
          organization making a difference in the lives of the differently-abled since 2014.
           Established in the vibrant city of Pimpri-Chinchwad, Maharashtra, our foundation has grown significantly over the years,
            reaching communities across the state. Our primary mission is to empower and uplift
           differently-abled individuals by advocating for their rights, promoting education, and creating opportunities for sustainable livelihoods.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-teal-500 font-semibold rounded-lg">
            Get started
          </button>
        </div>

      </div>
    </section>
  );
};

export default MainArticle;

