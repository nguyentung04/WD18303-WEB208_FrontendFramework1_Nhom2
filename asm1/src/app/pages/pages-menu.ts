import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  
  {
    title: 'Trang chủ',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
   {
    title: 'Thông tin nhân viên',
    icon: 'person-outline',
    link: '/pages/userinfo',
  },
  {
    title: 'Kỹ năng làm việc',
    icon: 'star-outline',
    link: '/pages/skill',
  },
  {
    title: 'Quản lý ứng tuyển',
    icon: 'book-outline',
    link: '/pages/recruitment',
  },
  {
    title: 'Quản lý chứng chỉ',
    icon: 'clipboard-outline',
    link: '/pages/certificate',
  },
];
