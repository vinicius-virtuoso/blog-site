import { ArrowRight, Clock, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TitleHero } from "../../../../components/title-section";
import { Button } from "../../../../components/ui/button";

export const HeroSection = () => {
  return (
    <section className="container-2xl relative flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-80 md:h-144 items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          <TitleHero>
            Venda seus produtos como afiliado em um único lugar
          </TitleHero>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="text-cyan-100 h-4 w-4" />
                <span className="text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Store className="text-cyan-100 h-4 w-4" />
                <span className="text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>
            <div className="text-white flex flex-col gap-2 mt-5 items-center md:items-start lg:items-start">
              <Button className="rounded-full w-fit" asChild>
                <Link href="/criar-loja">
                  Criar loja grátis <ArrowRight />
                </Link>
              </Button>

              <p className="text-gray-300 text-body-xs">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-80 hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
          <Image
            src="/hero-section.svg"
            alt="ilustração com icones, store, tag e sacola"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
