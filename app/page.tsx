  "use client";

  import AssistantButton from "@/components/AssistantButton/AssistantButton";

  import { motion } from "framer-motion";
  import { TextHoverEffect } from "@/components/ui/text-hover-effect";
  import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

  export default function Home() {
    return (
      <div>
        <div className="hidden md:block">

        <BackgroundBeamsWithCollision>
          <div className="flex flex-col">
          
          <motion.div
          initial={{ opacity: 0.0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        className={cn(
          "group mx-auto hover:cursor-pointer z-30 rounded-full border border-white/5  text-base text-white transition-all ease-in   bg-neutral-900 hover:bg-neutral-800",
        )}
      >
        <a href="https://github.com/Prakhar788" target="_blank" rel="noopener noreferrer">
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out  hover:duration-300 hover:text-neutral-400">
          <span>✨ Web Assistant with Calm ASMR</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        </a>
      </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="h-[30rem] flex items-center justify-center">
        <TextHoverEffect text="VOXA" />
        
      </div>
        
        </motion.div>
        
          </div>
       
       
      </BackgroundBeamsWithCollision>
          <div className="absolute bottom-0 right-0 pb-10 pr-10">
            
            <AssistantButton />
          </div>
          
        </div>
      </div>
    );
  }
