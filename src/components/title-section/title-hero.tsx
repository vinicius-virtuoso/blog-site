import { ptSansCaption } from "@/lib/fonts";

type TitleHeroProps = {
  children: React.ReactNode;
};

export const TitleHero = ({ children }: TitleHeroProps) => {
  return (
    <h1
      className={`${ptSansCaption.className} text-heading-hg text-gray-100 text-center md:text-left`}
    >
      {children}
    </h1>
  );
};
