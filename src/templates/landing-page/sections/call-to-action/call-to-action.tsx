import { ArrowRight, Store } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";
import Link from "next/link";
import { TitleSection } from "../../../../components/title-section";
import { Button } from "../../../../components/ui/button";

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
});

export const CallToAction = () => {
  return (
    <section className="pt-24">
      <div className="pb-24 bg-[url(/call-to-action.svg)] bg-no-repeat bg-cover bg-center bg-linear-to-b from-cyan-950/20 to-gray-700 relative pt-12">
        <div className="p-4 bg-cyan-300 w-fit rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Store className="text-cyan-100" />
        </div>
        <div className="container-2xl">
          <div className="flex flex-col items-center gap-6 text-center max-w-[450px] mx-auto">
            <TitleSection>
              Crie uma loja online e inicie suas vendas ainda hoje
            </TitleSection>
            <Button variant="primary" asChild>
              <Link href="/criar-loja">
                Criar loja grátis <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
