import * as React from "react"
import {
  Carousel,
  CarouselContent,
  Card, CardContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/"
import Img1 from "./images/1.jpg"
import Img2 from "./images/1.jpg"
import Img3 from "./images/1.jpg"
import Image from "next/image"

 function Banner() {
  return (
    <Carousel className="w-full ">
      <CarouselContent>
        {[Img1,Img2,Img3].map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="h-[400px] aspect-square flex items-center justify-center w-full p-3">
                 <Image src={_} alt="banner" fill className="object-cover"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Banner