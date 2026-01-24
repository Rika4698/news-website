

import img1 from "../../public/assets/left1.jpg";
import img2 from "../../public/assets/left2.jpg";
import img3 from "../../public/assets/left3.jpg";
import img4 from "../../public/assets/left4.jpg";
import img5 from "../../public/assets/left 5.jpg";
import Image from "next/image";

export default function LatestNews() {
  const latestArticles = [
    {
      id: 1,
      title: "Unconventional Workouts That Torch Fat And Sculpt Muscle",
      image:img1,
      
    },
    {
      id: 2,
      title: "Millions of Indigenous People May Lose Voting Rights: Alliance",
       image:img2,
     
    },
    {
      id: 3,
      title: "Crismonita Dwi Putri, RI`s Track Cycling Athlete for Asian Games",
       image:img3,
      
    },
    {
      id: 4,
      title: "President Joko “Jokowi” Widodo Refuses to Sign MD3 Law",
       image:img4,
     
    },
    {
      id: 5,
      title: "Garuda operates larger planes for Jakarta-Palembang route",
       image:img5,
   
    }
  ];
  

  return (
    <div className="bg-white px-4 py-6 shadow">
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-2 font-roboto text-[14px]">The Latest</h3>
        <div className="flex w-full h-[2px] mb-4">
          <div className="w-9 bg-black"></div>
          <div className="flex-1 bg-gray-200"></div>
        </div>
      </div>
      
      <div className="space-y-6">
        {latestArticles.map((article) => (
          <div key={article.id} className="flex gap-3 group cursor-pointer">
            <div className="w-28 h-[68px] lg:w-16 xl:w-28 lg:h-[58px] xl:h-[68px] flex-shrink-0 relative overflow-hidden bg-gray-200">
              <Image 
                src={article.image}
                alt={article.title}
                width={200} 
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="article-title-medium font-condensed text-[14px] transition-colors mb-1 font-bold text-[#000] w-[180px] lg:w-[120px] xl:w-[140px] -mt-1">
                {article.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


