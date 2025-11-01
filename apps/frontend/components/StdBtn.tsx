import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function StdBtn({ text, logo }: { text: string | React.ReactNode, logo?: React.ReactNode }) {
  return (
    <div className=" flex justify-center text-center w-auto">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>{text}</span>
        {logo}
      </HoverBorderGradient>
    </div>
  );
}