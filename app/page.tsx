import { Avatar } from './components/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from './components/dropdown'
import { Navbar, NavbarDivider, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from './components/navbar'
import { Sidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarLabel, SidebarSection } from './components/sidebar'
import { StackedLayout } from './components/stacked-layout'
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid'
import { InboxIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navItems = [
  { label: 'Home', url: '/' },
  { label: 'Events', url: '/events' },
  { label: 'Orders', url: '/orders' },
  { label: 'Broadcasts', url: '/broadcasts' },
  { label: 'Settings', url: '/settings' },
]

function TeamDropdownMenu() {
  return (
      <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
        <DropdownItem href="/teams/1/settings">
          <Cog8ToothIcon />
          <DropdownLabel>Settings</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem href="/teams/1">
          <Avatar slot="icon" src="/tailwind-logo.svg" />
          <DropdownLabel>Tailwind Labs</DropdownLabel>
        </DropdownItem>
        <DropdownItem href="/teams/2">
          <Avatar slot="icon" initials="WC" className="bg-purple-500 text-white" />
          <DropdownLabel>Workcation</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem href="/teams/create">
          <PlusIcon />
          <DropdownLabel>New team&hellip;</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
  )
}

export default function Example() {
  return (
      <div>
        Home page.
      </div>
  )
}
