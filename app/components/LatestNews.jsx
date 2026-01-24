import { GoTriangleRight } from "react-icons/go";
export default function LatestNews() {
  const latestArticles = [
    {
      id: 1,
      title: "Decommissioned Warheads Now Tools For Evil And Scrap",
      category: "National",
    },
    {
      id: 2,
      title: "Millions of Indigenous People May Lose Voting Rights: Alliance",
      category: "Politics",
    },
    {
      id: 3,
      title: "Colombia Taxi Pact, It's a Post Cycling Gold For Asian Games",
      category: "Sports",
    },
    {
      id: 4,
      title: "President Joko 'Jokowi' Widodo, Defense to Sign MOU Law",
      category: "Politics",
    },
    {
      id: 5,
      title: "Indonesian Music Nixes for Jakarta-Strasburg expo",
      category: "Culture",
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
    <div>
    <div className="bg-white ">
      {/* The Latest Section */}
      <div className="border-b-4 border-primary mb-6">
        <h2 className="py-3 article-title-large">
          The Latest
        </h2>
      
      
      <div className="space-y-6">
        {latestArticles.map((article) => (
          <div key={article.id} className="flex gap-4 group cursor-pointer">
            {/* Image */}
            <div className="w-24 h-20 flex-shrink-0 relative overflow-hidden rounded bg-gray-200">
              <img 
                src={`https://via.placeholder.com/96x80/cccccc/666666?text=News+${article.id}`}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Text */}
            <div className="flex-1">
              <h3 className="article-title-medium group-hover:text-primary transition-colors mb-1">
                {article.title}
              </h3>
              <p className="article-meta">{article.category}</p>
            </div>
          </div>
        ))}
      </div>
     </div>

     </div>

      {/* Opinion Section */}

      <div className=" bg-white px-3 py-3 shadow">
     
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