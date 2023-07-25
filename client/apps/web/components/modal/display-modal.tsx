import { UserAvatar } from '@components/user/user-avatar';
import { UserName } from '@components/user/user-name';
import { InputThemeRadio } from '@components/input/input-theme-radio';
import { Button } from '@components/ui/button';
import { InputAccentRadio } from '@components/input/input-accent-radio';
import type { Theme, Accent } from '@lib/types/theme';

type DisplayModalProps = {
  closeModal: () => void;
};

const themes: Readonly<[Theme, string][]> = [
  ['light', 'Default'],
  ['dim', 'Dim'],
  ['dark', 'Lights out']
];

const accentsColor: Readonly<Accent[]> = [
  'blue',
  'yellow',
  'pink',
  'purple',
  'orange',
  'green'
];

export function DisplayModal({ closeModal }: DisplayModalProps): JSX.Element {
  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='flex flex-col gap-3 text-center'>
        <h2 className='text-2xl font-bold'>Customize your view</h2>
        <p className='text-light-secondary dark:text-dark-secondary'>
          These settings affect all the Twitter accounts on this browser.
        </p>
      </div>
      <article
        className='px-4 py-3 mx-8 border hover-animation rounded-2xl border-light-border dark:border-dark-border'
      >
        <div className='grid grid-cols-[auto,1fr] gap-3'>
          <UserAvatar src='/assets/twitter-avatar.jpg' alt='Twitter' />
          <div>
            <div className='flex gap-1'>
              <UserName verified name='Twitter' />
              <p className='text-light-secondary dark:text-dark-secondary'>
                @twitter
              </p>
              <div className='flex gap-1 text-light-secondary dark:text-dark-secondary'>
                <i>·</i>
                <p>26m</p>
              </div>
            </div>
            <p className='break-words whitespace-pre-line'>
              At the heart of Twitter are short messages called Tweets — just
              like this one — which can include photos, videos, links, text,
              hashtags, and mentions like{' '}
              <span className='text-main-accent'>@twitter</span>.
            </p>
          </div>
        </div>
      </article>
      <div className='flex flex-col w-full gap-1'>
        <p className='text-sm font-bold text-light-secondary dark:text-dark-secondary'>
          Color
        </p>
        <div
          className='grid grid-cols-3 grid-rows-2 gap-3 py-3 hover-animation justify-items-center rounded-2xl bg-main-sidebar-background xs:grid-cols-6 xs:grid-rows-none'
        >
          {accentsColor.map((accentColor) => (
            <InputAccentRadio type={accentColor} key={accentColor} />
          ))}
        </div>
      </div>
      <div className='flex flex-col w-full gap-1'>
        <p className='text-sm font-bold text-light-secondary dark:text-dark-secondary'>
          Background
        </p>
        <div
          className='grid grid-rows-3 gap-3 px-4 py-3 hover-animation rounded-2xl bg-main-sidebar-background xs:grid-cols-3 xs:grid-rows-none'
        >
          {themes.map(([themeType, label]) => (
            <InputThemeRadio type={themeType} label={label} key={themeType} />
          ))}
        </div>
      </div>
      <Button
        className='bg-main-accent px-4 py-1.5 font-bold
                   text-white hover:bg-main-accent/90 active:bg-main-accent/75'
        onClick={closeModal}
      >
        Done
      </Button>
    </div>
  );
}
