import Link from 'next/link';
import { motion } from 'framer-motion';
import { UserCard } from '@components/user/user-card';
import { Loading } from '@components/ui/loading';
import { Error } from '@components/ui/error';
import { variants } from './aside-trends';

export function Suggestions(): JSX.Element {



  return (
    <section className='hover-animation rounded-2xl bg-main-sidebar-background'>
      suggestion
    </section>
    // <section className='hover-animation rounded-2xl bg-main-sidebar-background'>
    //   {adminLoading || suggestionsLoading ? (
    //     <Loading className='flex items-center justify-center p-4 h-52' />
    //   ) : suggestionsData ? (
    //     <motion.div className='inner:px-4 inner:py-3' {...variants}>
    //       <h2 className='text-xl font-bold'>Who to follow</h2>
    //       {adminData && <UserCard {...adminData} />}
    //       {suggestionsData?.map((userData) => (
    //         <UserCard {...userData} key={userData.id} />
    //       ))}
    //       <Link href='/people'>
    //         <div
    //           className='block w-full text-center rounded-t-none custom-button accent-tab hover-card rounded-2xl text-main-accent'
    //         >
    //           Show more
    //         </div>
    //       </Link>
    //     </motion.div>
    //   ) : (
    //     <Error />
    //   )}
    // </section>
  );
}
