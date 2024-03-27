import { Contact, Film, UserRound, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className=' border hidden md:flex flex-col w-[200px] h-screen fixed items-center justify-center gap-4'>
      <Link
        href='/'
        className={`w-full px-4 py-2.5 font-medium text-green-700 hover:bg-green-400/20 ${
          pathname === "/dashboard" ? "bg-green-400/20" : null
        }`}>
        <span className='flex items-center '>
          <Contact className='mr-3 flex-shrink-0' />{" "}
          <p className='whitespace-nowrap'>Staff Data</p>
        </span>
      </Link>

      <Link
        href='#'
        className='w-full px-4 py-2.5 font-medium text-green-700 hover:bg-green-400/20'>
        <span className='flex items-center '>
          <Film className='mr-3 flex-shrink-0' />{" "}
          <p className='whitespace-nowrap'>Movies</p>
        </span>
      </Link>

      <Link
        href='#'
        className='w-full px-4 py-2.5 font-medium text-green-700 hover:bg-green-400/20'>
        <span className='flex items-center '>
          <Users className='mr-3 flex-shrink-0' />{" "}
          <p className='whitespace-nowrap'>Clients</p>
        </span>
      </Link>

      <Link
        href='#'
        className='w-full px-4 py-2.5 font-medium text-green-700 hover:bg-green-400/20'>
        <span className='flex items-center '>
          <UserRound className='mr-3 flex-shrink-0' />{" "}
          <p className='whitespace-nowrap'>Others</p>
        </span>
      </Link>
      <div className='absolute top-5'>
        <div className='relative w-[60px] aspect-square rounded-lg overflow-hidden'>
          <Image alt='' priority fill src='/nfvcb_logo.webp' />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
