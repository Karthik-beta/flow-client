import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,

  IconChartBar,
  IconUsersPlus,
  IconAdjustmentsHorizontal,
  IconClipboardList,
  IconCalendarWeek,
  IconCalendarMonth,
  IconLogs,
} from '@tabler/icons-react'
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'Karthik Param',
    email: 'karthik@pivotr.in',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Flowmatic',
      logo: AudioWaveform,
      plan: 'Pivotr Technologies',
    },
    // {
    //   name: 'Acme Inc',
    //   logo: GalleryVerticalEnd,
    //   plan: 'Enterprise',
    // },
    // {
    //   name: 'Acme Corp.',
    //   logo: Command,
    //   plan: 'Startup',
    // },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Main Dashboard',
          url: '/',
          icon: IconLayoutDashboard,
        },
        // {
        //   title: 'Tasks',
        //   url: '/tasks',
        //   icon: IconChecklist,
        // },
        // {
        //   title: 'Apps',
        //   url: '/apps',
        //   icon: IconPackages,
        // },
        // {
        //   title: 'Chats',
        //   url: '/chats',
        //   badge: '3',
        //   icon: IconMessages,
        // },
        // {
        //   title: 'Users',
        //   url: '/users',
        //   icon: IconUsers,
        // },
      ],
    },
    {
      title: 'Attendance Management',
      items: [
        {
          title: 'Dashboard',
          icon: IconChartBar,
          items: [
            { title: 'Shift Strength V/S Skill Matrix', url: '/503' },
            { title: 'Shift Strength', url: '/503', },
            { title: 'Evacuation', url: '/503', },
          ],
        },
        {
          title: 'Onboarding',
          icon: IconUsersPlus,
          url: '/503',
        },
        {
          title: 'Resource Allocation',
          icon: IconAdjustmentsHorizontal,
          items: [
            { title: 'Shift management', url: '/503' },
            { title: 'Reserve Skill Matrix Employee', url: '/503' },
          ],
        },
        {
          title: 'Regularization',
          icon: IconClipboardList,
          items: [
            { title: 'Missed Punch Management', url: '/503' },
            { title: 'Leave Management', url: '/503' },
            { title: 'Compensatory Off Management', url: '/503' },
            { title: 'On Duty Management', url: '/503' },
            { title: 'Gate Pass Management', url: '/503' },
            { title: 'Holiday Management', url: '/503' },
          ],
        },
      ],
    },
    {
      title: 'Reports',
      items: [
        {
          title: 'Daily Info',
          icon: IconCalendarWeek,
          items: [
            { title: 'Daily Status', url: '/503' },
            { title: 'Mandays Report', url: '/503' },
            { title: 'Present Report', url: '/503' },
            { title: 'Absent Report', url: '/503' },
            { title: 'Late Entry Report', url: '/503' },
            { title: 'Early Exit Report', url: '/503' },
            { title: 'Overtime Report', url: '/503' },
            { title: 'Missed Punch Report', url: '/503' },
            { title: 'Insufficient Hours Report', url: '/503' },
          ]
        },
        {
          title: 'Monthly Info',
          icon: IconCalendarMonth,
          items: [
            { title: 'In – Out Register', url: '/503' },
            { title: 'Duty Hours Register', url: '/503' },
            { title: 'Muster Roll Register', url: '/503' },
            { title: 'Payroll Output Register', url: '/503' },
            { title: 'Shift Roaster Register', url: '/503' },
            { title: 'Overtime Register', url: '/503' },
            { title: 'Late Entry Register', url: '/503' },
            { title: 'Early Exit Register', url: '/503' },
            { title: 'Absent Register', url: '/503' },
            { title: 'Present Register', url: '/503' },
          ]
        },
      ]
    },
    {
      title: 'Device Logs',
      items: [
        {
          title: 'Device Logs',
          icon: IconLogs,
          url: '/503',
        }
      ]
    },
    // {
    //   title: 'Pages',
    //   items: [
    //     {
    //       title: 'Auth',
    //       icon: IconLockAccess,
    //       items: [
    //         {
    //           title: 'Sign In',
    //           url: '/sign-in',
    //         },
    //         {
    //           title: 'Sign In (2 Col)',
    //           url: '/sign-in-2',
    //         },
    //         {
    //           title: 'Sign Up',
    //           url: '/sign-up',
    //         },
    //         {
    //           title: 'Forgot Password',
    //           url: '/forgot-password',
    //         },
    //         {
    //           title: 'OTP',
    //           url: '/otp',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Errors',
    //       icon: IconBug,
    //       items: [
    //         {
    //           title: 'Unauthorized',
    //           url: '/401',
    //           icon: IconLock,
    //         },
    //         {
    //           title: 'Forbidden',
    //           url: '/403',
    //           icon: IconUserOff,
    //         },
    //         {
    //           title: 'Not Found',
    //           url: '/404',
    //           icon: IconError404,
    //         },
    //         {
    //           title: 'Internal Server Error',
    //           url: '/500',
    //           icon: IconServerOff,
    //         },
    //         {
    //           title: 'Maintenance Error',
    //           url: '/503',
    //           icon: IconBarrierBlock,
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
