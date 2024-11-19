import Card from "@/components/Cards/Card"
import cardData from "@/components/Cards/cardData.js"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-evenly flex-wrap  lg:px-32 p-4S ">
        {cardData?.map((data)=>(
          <Card key={data?.id} {...data}/>
        ))}
    </div>
  )
}

export default Home