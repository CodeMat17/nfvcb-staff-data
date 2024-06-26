import ThemeToggleButton from "@/components/ThemeToggleButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='relative flex flex-col md:flex-row w-full items-center justify-center px-4 py-40 md:pt-64 gap-6  max-w-6xl mx-auto'>
      {/* <div clas> */}
      <div className='flex items-center justify-center'>
        <div className='relative w-[150px] md:w-[220px] aspect-square rounded-xl overflow-hidden'>
          <Image
            alt=''
            priority
            src='/nfvcb_logo.webp'
            // width={100}
            // height={65}
            fill
          />
        </div>
      </div>

      <div className='max-w-xl text-4xl lg:text-5xl text-center flex flex-col gap-6'>
        <p>
          The <strong className='text-green-700'>NFVCB</strong> staff{" "}
          <span className='text-green-700'>DataDeck</span>
        </p>
        <div>
          <Button
            asChild
            className='bg-gradient-to-tr from-green-700 to-green-300 px-20 py-6 text-white text-lg font-semibold tracking-wider'>
            <Link href='/dashboard'>View</Link>
          </Button>
        </div>
      </div>
      {/* </div> */}
      <div className='absolute top-4 right-4'>
        <ThemeToggleButton />
      </div>
    </main>
  );
}
