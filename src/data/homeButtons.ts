type HomeButtonsType = {
  label: string;
  icon: string;
  link: string;
  isTargetBlank: boolean;
};

export const HomeButtonsData: HomeButtonsType[] = [
  {
    label: 'MENU',
    icon: 'src/assets/menu_icon.png',
    link: '/menu',
    isTargetBlank: false,
  },
  {
    label: 'FACEBOOK',
    icon: 'src/assets/facebook_icon.png',
    link: 'https://www.facebook.com/',
    isTargetBlank: true,
  },
  {
    label: 'INSTAGRAM',
    icon: 'src/assets/ig_icon.png',
    link: 'https://www.instagram.com/',
    isTargetBlank: true,
  }
];
