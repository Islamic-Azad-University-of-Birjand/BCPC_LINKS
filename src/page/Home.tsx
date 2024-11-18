import Card from "@/components/Cards/Card"
import cardData from "../components/Cards/cardData.js"

const Home = () => {
  return (
    <div className="w-full h-full pt-64 flex justify-evenly flex-wrap  lg:px-32">
        {cardData?.map((data)=>(
          <Card key={data?.id} {...data}/>
        ))}
    </div>
  )
}

export default Home