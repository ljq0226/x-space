'use client'
import Link from 'next/link';
import { useWindow } from '@lib/context/window-context';
import { useModal } from '@lib/hooks/useModal';
import { Modal } from '@components/modal/modal';
// import { Input } from '@components/input/input';
import { CustomIcon } from '@components/ui/custom-icon';
import { Button } from '@components/ui/button';
import { SidebarLink } from './sidebar-link';
import { MoreSettings } from './more-settings';
import { SidebarProfile } from './sidebar-profile';
import type { IconName } from '@components/ui/hero-icon';

export type NavLink = {
  href: string;
  linkName: string;
  iconName: IconName;
  disabled?: boolean;
  canBeHidden?: boolean;
};

const navLinks: Readonly<NavLink[]> = [
  {
    href: '/home',
    linkName: 'Home',
    iconName: 'HomeIcon'
  },
  {
    href: '/explore',
    linkName: 'Explore',
    iconName: 'HashtagIcon',
    disabled: true,
    canBeHidden: true
  },
  {
    href: '/notifications',
    linkName: 'Notifications',
    iconName: 'BellIcon',
    disabled: true
  },
  {
    href: '/messages',
    linkName: 'Messages',
    iconName: 'EnvelopeIcon',
    disabled: true
  },
  {
    href: '/bookmarks',
    linkName: 'Bookmarks',
    iconName: 'BookmarkIcon',
    canBeHidden: true
  },
  {
    href: '/lists',
    linkName: 'Lists',
    iconName: 'Bars3BottomLeftIcon',
    disabled: true,
    canBeHidden: true
  }
];

export function Sidebar(): JSX.Element {
  // const { isMobile } = useWindow();
  const isMobile = false

  const { open, openModal, closeModal } = useModal();

  const username = 'Lumos'

  return (
    <header
      id='sidebar'
      className='flex w-0 transition-opacity duration-200 shrink-0 xs:w-20 md:w-24 lg:max-w-none xl:-mr-4 xl:w-full xl:max-w-xs xl:justify-end'
    >
      <Modal
        className='flex items-start justify-center'
        modalClassName='bg-main-background rounded-2xl max-w-xl w-full mt-8 overflow-hidden'
        open={open}
        closeModal={closeModal}
      >
        {/* <Input modal closeModal={closeModal} /> */}
      </Modal>
      <div
        className='fixed bottom-0 z-10 flex flex-col justify-between w-full py-0 border-t border-light-border bg-main-background dark:border-dark-border xs:top-0 xs:h-full xs:w-auto xs:border-0 xs:bg-transparent xs:px-2 xs:py-3 xs:pt-2 md:px-4 xl:w-72'
      >
        <section className='flex flex-col justify-center gap-2 xs:items-center xl:items-stretch'>
          <h1 className='hidden xs:flex'>
            <Link href='/home'>
              <div
                className='custom-button main-tab text-accent-blue transition hover:bg-light-primary/10 
                           focus-visible:bg-accent-blue/10 focus-visible:!ring-accent-blue/80
                           dark:text-twitter-icon dark:hover:bg-dark-primary/10'
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="text-white r-cbkdnj r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0">
                </path>
                </g></svg>
                <CustomIcon className='h-7 w-7' iconName='TwitterIcon' />
              </div>
            </Link>
          </h1>
          <nav className='flex items-center justify-around xs:flex-col xs:justify-center xl:block'>
            {navLinks.map(({ ...linkData }) => (
              <SidebarLink {...linkData} key={linkData.href} />
            ))}
            <SidebarLink
              href={`/user/${username}`}
              username={username}
              linkName='Profile'
              iconName='UserIcon'
            />
            {!isMobile && <MoreSettings />}
          </nav>
          <Button
            className='accent-tab absolute right-4 -translate-y-[72px] bg-main-accent text-lg font-bold text-white
                       outline-none transition hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0
                       xs:hover:bg-main-accent/90 xs:active:bg-main-accent/75 xl:w-11/12'
            onClick={openModal}
          >
            <CustomIcon
              className='block w-6 h-6 xl:hidden'
              iconName='FeatherIcon'
            />
            <p className='hidden xl:block'>Tweet</p>
          </Button>
        </section>
        {!isMobile && <SidebarProfile />}
      </div>
    </header>
  );
}
