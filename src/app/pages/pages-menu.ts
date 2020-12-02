import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Administración',
    icon: 'folder-outline',
    children: [
      {
        title: 'Gestionar Personal',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Gestionar Documentos',
        link: '/pages/forms/layouts',
      }
    ],
  },
  {
    title: 'Medicamentos',
    icon: 'activity-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Gestionar Medicamentos',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Gestionar Calidad de Medi.',
        link: '/pages/ui-features/icons',
      },
    ],
  },
  {
    title: 'Movimientos',
    icon: 'swap-outline',
    children: [
      {
        title: 'Gestionar Pedidos',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Visualizar Pendientes',
        link: '/pages/modal-overlays/window',
      },
    ],
  },
  {
    title: 'Cerrar Sesión',
    icon: 'log-out-outline',
    link: '/pages/dashboard',
    home: true,
  },
];
