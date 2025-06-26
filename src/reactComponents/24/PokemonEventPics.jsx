import { DraggableCardBody } from "./DraggableCard";
import { DraggableCardContainer } from "./DraggableCardContainer";
import eventPic1 from "../../assets/eventpic-1.jpeg";
import eventPic2 from "../../assets/eventpic-2.jpeg";
import eventPic3 from "../../assets/eventpic-3.jpeg";
import eventPic4 from "../../assets/eventpic-4.jpeg";
import eventPic5 from "../../assets/eventpic-5.jpeg";

const eventPicDictionary = {
    "eventPic1": eventPic1,
    "eventPic2": eventPic2,
    "eventPic3": eventPic3,
    "eventPic4": eventPic4,
    "eventPic5": eventPic5,
};

export default function PokemonEventPics() {
  const items = [
    {
      title: "GH Mall",
      image: "eventPic5",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Promenade",
      image: "eventPic4",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "GH Mall",
      image: "eventPic3",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Promenade",
      image: "eventPic2",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Feliz",
      image: "eventPic1",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    }
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip border border-solid bg-gray-100">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800 font-chewy">
        some text here
      </p>
      {items.map((item, index) => (
        <DraggableCardBody className={item.className} key={index}>
          <img
            src={eventPicDictionary[item.image]?.src}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl text-neutral-700 font-retro">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
