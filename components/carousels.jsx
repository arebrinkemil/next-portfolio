import * as React from "react";
import { ItemCarousel, VidCarousel } from "./carousel";
import shogunPic from "../public/shogun.png";
import serverance from "../public/severance.jpeg";
import { ImageCarousel } from "./carousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Carousels() {
  const carousel1Content = [
    "OUmjvFm7h6I",
    "a5uQMwRMHcs",
    "1UCdB8Nw5JI",
    "Jg5wkZ-dJXA",
    "7eXJLNQnxp8",
    "dFfC92iBxNw",
    "YYkBSyoZxXQ",
    "Zy4KtD98S2c",
    "tX52W4JFE6Q",
  ];
  const carousel2Content = [
    shogunPic,
    serverance,
    shogunPic,
    serverance,
    shogunPic,
    serverance,
  ];
  const carousel3Content = [
    shogunPic,
    serverance,
    shogunPic,
    serverance,
    shogunPic,
    serverance,
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="w-full">
            <AccordionTrigger>
              {" "}
              <h2 className="text-2xl font-bold">What im listening to</h2>
            </AccordionTrigger>
            <AccordionContent>
              <div className="w-full flex justify-center bg-secondary rounded-lg">
                <VidCarousel content={carousel1Content} />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="w-full">
            <AccordionTrigger>
              <h2 className="text-2xl font-bold">What im watching</h2>
            </AccordionTrigger>
            <AccordionContent>
              <div className="w-full flex justify-center bg-secondary rounded-lg">
                <ImageCarousel content={carousel2Content} />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="w-full">
            <AccordionTrigger>
              <h2 className="text-2xl font-bold">What im playing</h2>
            </AccordionTrigger>
            <AccordionContent>
              <div className="w-full flex justify-center bg-secondary rounded-lg">
                <ImageCarousel content={carousel3Content} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
