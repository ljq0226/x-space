import { AnimatePresence } from 'framer-motion';
import { useWindow } from '@lib/context/window-context';
import { MainContainer } from '@components/home/main-container';
import { Input } from '@components/input/input';
import { UpdateUsername } from '@components/home/update-username';
import { MainHeader } from '@components/home/main-header';
// import { Tweet } from '@components/tweet/tweet';
import { Loading } from '@components/ui/loading';
import { Error } from '@components/ui/error';
import type { ReactElement, ReactNode } from 'react';
export default function Home(): JSX.Element {
  // const { isMobile } = useWindow();
  const isMobile = false

  // const { data, loading, LoadMore } = useInfiniteScroll(
  //   tweetsCollection,
  //   [where('parent', '==', null), orderBy('createdAt', 'desc')],
  //   { includeUser: true, allowNull: true, preserve: true }
  // );

  return (
    <MainContainer>
      <MainHeader
        useMobileSidebar
        title='Home'
        className='flex items-center justify-between'
      >
        <UpdateUsername />
      </MainHeader>
      <div className="underline">asd</div>
    </MainContainer>
  );
}

