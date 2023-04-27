type HomeButtonsType = {
  label: string;
  icon: string;
  link: string;
  isTargetBlank: boolean;
};

export const HomeButtonsData: HomeButtonsType[] = [
  {
    label: 'MENU',
    icon: '/assets/menu_icon.png',
    link: '/menu',
    isTargetBlank: false,
  },
  {
    label: 'FACEBOOK',
    icon: '/assets/facebook_icon.png',
    link: 'https://www.facebook.com/',
    isTargetBlank: true,
  },
  {
    label: 'INSTAGRAM',
    icon: '/assets/ig_icon.png',
    link: 'https://www.instagram.com/',
    isTargetBlank: true,
  }
];
