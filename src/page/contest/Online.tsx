import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const data = [
 {
    title : "test",
    value : "test",
    data : {
      title : "test for fun",
      description : "lorem ipisum",
      img : "",
    }
  },
  {title : "test2",
    value : "test2",
    data : {
      title : "test for fun 2",
      description : "lorem ipisum",
      img : "",
    }
  }
]


const Online = () =>{ 
   return(
    <>  
    <Tabs defaultValue="account" className="w-[400px] flex">
      <TabsList className="flex flex-col h-full space-y-1 w-[120px] mr-4">
          {data.map((item,index) => <TabsTrigger value={item.value} key={index}>{item.title}</TabsTrigger>)}
      </TabsList>
        {data.map((item,index) => <TabsContent value={item.value} key={index}>
          <h1>{item.data.title}</h1>
          <img src={item.data.img} />
          <p>{item.data.description}</p>
        </TabsContent> )}
    </Tabs>
   </>
  )
}

export default Online
