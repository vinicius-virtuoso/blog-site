import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TitleSection } from "../../../../components/title-section";
import { Button } from "../../../../components/ui/button";

export const FeatureSection = () => {
  return (
    <section>
      <div className="container-2xl bg-gray-700 gap-6 grid md:grid-cols-2 py-8 md:py-10">
        <div className="flex flex-col gap-4 p-6 rounded-lg bg-gray-500 md:p-12">
          <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm">
            Simples
          </span>
          <TitleSection>
            Crie um catálogo de produtos online em poucos minutos
          </TitleSection>
        </div>
        <div className="flex flex-col gap-4 p-6 rounded-lg bg-gray-500 md:p-12">
          <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm">
            Pratico
          </span>
          <TitleSection>
            Venda para seu público através de uma plataforma única
          </TitleSection>
        </div>

        <div className="col-span-full flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
            <div className="flex flex-col gap-4 rounded-lg">
              <span className="text-body-tag text-blue-200 bg-blue-400 px-2 py-1 w-fit rounded-sm">
                personalizável
              </span>
              <TitleSection>
                Tenha uma loja online personalizada com a cara da sua marca
              </TitleSection>

              <Button
                className="w-fit rounded-full mt-4 md:mt-auto md:flex hidden"
                asChild
              >
                <Link href="/criar-loja">
                  Criar loja grátis <ArrowRight />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-4">
              <div className="w-full max-w-md overflow-hidden">
                <Image
                  src="feature-section.svg"
                  alt="Features"
                  width={440}
                  height={330}
                />
              </div>

              <Button
                className="w-full rounded-full mt-4 md:mt-auto md:hidden"
                asChild
              >
                <Link href="/criar-loja">
                  Criar loja grátis <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
