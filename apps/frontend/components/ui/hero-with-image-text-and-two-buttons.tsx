import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DisplayCardsDemo } from "../StackCards";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import React from "react";
import StdBtn from "../StdBtn";

function Hero() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex gap-4 flex-col pt-10 pl-40">
            <div className="flex items-center gap-3">
              <img
                src="/favicon-dark.svg"
                alt="Shaddo logo light"
                className="h-8 w-8 block dark:hidden"
              />
              <img
                src="/favicon-light.svg"
                alt="Shaddo logo dark"
                className="h-8 w-8 hidden dark:block"
              />
              <span className="text-2xl font-semibold tracking-wider text-primary">SHADDO</span>
            </div>
            <div className="flex gap-4 flex-col relative">
              <h1 className="md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                One app for all your
                <ContainerTextFlip
                  words={["Tasks", "Projects", "Habits", "Time"]}
                  className="scale-80 absolute"
                />
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Stay organized and boost your productivity with our all-in-one
                solution. Manage your tasks, track your habits, and make the most
                of your time with our intuitive tools designed to help you achieve
                more.
              </p>
            </div>
            <div className="flex gap-4 ">
                <StdBtn text="Login with" logo={<img src="google.svg" className="w-4 h-4" />} />
                <StdBtn text="Get Started" logo={<MoveRight className="w-4 h-4" />} />
            </div>
          </div>
          <div className="rounded-md aspect-square h-10/12 mt-30 scale-115 mr-40">
            <DisplayCardsDemo />
          </div>
        </div>
      </div>
    </div>
  );
}





export { Hero };