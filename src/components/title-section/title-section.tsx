import { ptSansCaption } from "@/lib/fonts";

type TitleSectionProps = {
  children: React.ReactNode;
};

export const TitleSection = ({ children }: TitleSectionProps) => {
  return (
    <h2
      className={`${ptSansCaption.className} text-balance text-heading-lg md:text-heading-xl text-gray-100`}
    >
      {children}
    </h2>
  );
};
