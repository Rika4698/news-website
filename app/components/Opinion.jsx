import { GoTriangleRight } from "react-icons/go";
export function Opinion() {

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
    <div className="bg-white px-4 py-5 shadow">
      <div className="w-full">
        <h3 className="text-lg font-semibold mb-2 font-roboto text-[16px]">Opinion</h3>
        <div className="flex w-full h-[2px] mb-4">
          <div className="w-9 bg-black"></div>
          <div className="flex-1 bg-gray-200"></div>
        </div>
      </div>
      
      <div className="space-y-4">
        {opinionArticles.map((title, index) => (
          <div key={index} className="group cursor-pointer pb-4 border-b border-gray-200 last:border-0">
            <div className="flex items-start gap-1 text-[14px]">
              <span className="text-primary font-bold text-sm mt-0.5">
                <GoTriangleRight className="w-4 h-4 font-roboto" strokeWidth={1}/>
              </span>
              <h3 className="article-title-medium font-condensed text-[#000] cursor-pointer transition-colors flex-1">
                {title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
