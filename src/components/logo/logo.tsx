import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" title="pagina inicial">
      <Image alt="Logo" src="/Logo.svg" width={116} height={32} />
    </Link>
  );
};
