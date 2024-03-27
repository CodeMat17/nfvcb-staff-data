import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import ThemeToggleButton from "./ThemeToggleButton";

const DashboardNav = () => {
  return (
    <div className='sticky top-0 z-50 py-2.5 flex items-center justify-between mb-8 bg-white dark:bg-slate-950'>
      <div className='relative md:hidden w-[50px] aspect-square rounded-lg overflow-hidden'>
        <Image alt='' priority fill src='/nfvcb_logo.webp' />
      </div>
      <div className='flex items-center justify-end gap-5 float-right '>
        <ThemeToggleButton />
        <div className="md:hidden">
          <HamburgerMenu /> 
        </div>
       
      </div>
      {/* <div className='hidden md:flex'>
        <HamburgerMenu />
      </div> */}
    </div>
  );
};

export default DashboardNav;
