
import { GoTriangleRight } from "react-icons/go";
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
  

  const opinionArticles = [
    "Tour showcases shared art history of Indonesia and Singapore",
    "Finland Has An Education System The Other Country Should Learn From",
    "Women in Politics: Urgency of Quota System For Women In Regional Election",
    "China’s Peng banned and fined for Wimbledon corruption attempt",
    "Democratic Party politician calls Prabowo ‘cardboard general’",
    "Millions of Indigenous People May Lose Voting Rights: Alliance",
    "President Joko “Jokowi” Widodo Refuses to Sign MD3 Law",
    "Garuda operates larger planes for Jakarta-Palembang route",
    "‘Election was rigged’ says opposition, police confirm three dead",
    "Annual open water swim returns to Western Australia in February"
  ];

  return (
    <div className="mt-14 xl:mt-36 w-full mx-auto ">
    <div className="bg-white px-4 py-6 shadow ">
      {/* The Latest Section */}
    
         <div className="w-full">
  <h3 className="text-lg font-semibold mb-2 font-roboto text-[14px] ">The Latest</h3>
  <div className="flex w-full h-[2px] mb-4">
  <div className="w-9 bg-black"></div>
  <div className="flex-1 bg-gray-200"></div>
</div>
</div>
      
      
      <div className="space-y-6">
        {latestArticles.map((article) => (
          <div key={article.id} className="flex gap-3 group cursor-pointer">
            {/* Image */}
            <div className="w-16 xl:w-28 h-[58px] xl:h-[68px] flex-shrink-0 relative overflow-hidden  bg-gray-200">
              <Image 
                src={article.image}
                alt={article.title}
                width={200} height={200}
                className="w-full h-full  "
              />
            </div>
            {/* Text */}
            <div className="flex-1 ">
              <p className="article-title-medium font-condensed text-[14px] transition-colors mb-1 font-bold text-[#000] w-[120px] xl:w-[140px] -mt-1 ">
                {article.title}
              </p>
           
            </div>
          </div>
        ))}
      </div>
   

     </div>

      {/* Opinion Section */}

      <div className=" bg-white px-4 py-5 shadow lg:mt-8 ">
     
       <div className="w-full">
  <h3 className="text-lg font-semibold mb-2 font-roboto text-[16px] ">Opinion</h3>
  <div className="flex w-full h-[2px] mb-4">
  <div className="w-10 bg-black"></div>
  <div className="flex-1 bg-gray-200"></div>
</div>
</div>
        <div className="space-y-4">
          {opinionArticles.map((title, index) => (
            <div key={index} className="group cursor-pointer pb-4 border-b border-gray-200 last:border-0">
              <div className="flex items-start gap-1 text-[14px]">
                <span className="text-primary font-bold text-sm mt-0.5"><GoTriangleRight className="w-4 h-4 font-roboto" strokeWidth={1}/></span>
                <h3 className="article-title-medium font-condensed  text-[#000] cursor-pointer transition-colors flex-1">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
    


    </div>

    </div>
  );
}