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
    link: '',
    isTargetBlank: false,
  },
  {
    label: 'FACEBOOK',
    icon: 'src/assets/facebook_icon.png',
    link: '',
    isTargetBlank: true,
  },
  {
    label: 'INSTAGRAM',
    icon: 'src/assets/ig_icon.png',
    link: '',
    isTargetBlank: true,
  }
];
