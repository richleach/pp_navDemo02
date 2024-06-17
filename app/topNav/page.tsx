import { Avatar } from '../components/avatar'
import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownItem,
    DropdownLabel,
    DropdownMenu,
} from '../components/dropdown'
import { Navbar, NavbarDivider, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from '../components/navbar'
import { Sidebar, SidebarBody, SidebarHeader, SidebarItem, SidebarLabel, SidebarSection } from '../components/sidebar'
import { StackedLayout } from '../components/stacked-layout'
import Sample from '../components/pages/Sample'
import {
    ArrowRightStartOnRectangleIcon,
    ChevronDownIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    PlusIcon,
    ShieldCheckIcon,
    UserIcon,
} from '@heroicons/react/16/solid'

import {
    Cog6ToothIcon,
    HomeIcon,
    InboxIcon,
    MagnifyingGlassIcon,
    MegaphoneIcon,
    QuestionMarkCircleIcon,
    SparklesIcon,
    Square2StackIcon,
    TicketIcon,
    CalendarIcon,
    IdentificationIcon,
    UserGroupIcon,
    LinkIcon,
    PresentationChartBarIcon,
    CurrencyDollarIcon,
    PencilIcon,
    DocumentIcon,
    ShieldCheckIcon as Shield,
    ChartBarIcon,
    ExclamationTriangleIcon,
    HandThumbUpIcon,
    BarsArrowUpIcon,
    UsersIcon,
    MagnifyingGlassCircleIcon,
} from "@heroicons/react/20/solid";


const navItems = [
    { label: 'Home', url: '/' },
    { label: 'Item1', url: '/' },
    { label: 'Item2', url: '/' },
    { label: 'Item3', url: '/' },
    { label: 'Item4', url: '/' },
    { label: 'Item5', url: '/' },

]

function TeamDropdownMenu() {
    return (
        <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
            <DropdownItem href="/teams/1/settings">

                <DropdownLabel>Home</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem className="-ml-6">
                <DropdownLabel>Events</DropdownLabel>
            </DropdownItem>
            <DropdownItem>
                <HandThumbUpIcon/> <DropdownLabel className="ml-2 -leading-3">Event #1</DropdownLabel>
            </DropdownItem>
            <DropdownItem>
                <HandThumbUpIcon/> <DropdownLabel className="ml-2 -leading-3">Event #2</DropdownLabel>
            </DropdownItem>
            <DropdownItem>
                <HandThumbUpIcon/> <DropdownLabel className="ml-2 -leading-3">Event #3</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem>
                <ExclamationTriangleIcon/> <DropdownLabel className="ml-2 -leading-3">Event #4</DropdownLabel>
            </DropdownItem>
            <DropdownItem>
                <ExclamationTriangleIcon/> <DropdownLabel className="ml-2 -leading-3">Event #5</DropdownLabel>
            </DropdownItem>
            <DropdownItem>
                <ExclamationTriangleIcon/> <DropdownLabel className="ml-2 -leading-3">Event #6</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownDivider />
            <DropdownItem>
                <QuestionMarkCircleIcon/> <DropdownLabel className="ml-2 -leading-3">Event #7</DropdownLabel>
            </DropdownItem>
            <DropdownItem>
                <QuestionMarkCircleIcon/> <DropdownLabel className="ml-2 -leading-3">Event #8</DropdownLabel>
            </DropdownItem>
            <DropdownItem>
                <QuestionMarkCircleIcon/> <DropdownLabel className="ml-2 -leading-3">Event #9</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/teams/2">

                <DropdownLabel>Calendar</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/teams/1/settings">

                <DropdownLabel>Contacts</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/teams/1">

                <DropdownLabel>Communications</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/teams/2">

                <DropdownLabel>Leads</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/teams/2">

                <DropdownLabel>Proposals</DropdownLabel>
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
        <StackedLayout
            navbar={
                <Navbar>
                    <Dropdown>
                        <DropdownButton as={NavbarItem} className="max-lg:hidden">
                            <Avatar src="/images/pp2-script-logo.png" />
                            <NavbarLabel>Planning Pod</NavbarLabel>
                            <ChevronDownIcon />
                        </DropdownButton>
                        <TeamDropdownMenu />
                    </Dropdown>
                    <NavbarDivider className="max-lg:hidden" />



                    <NavbarSection className="max-lg:hidden">
                        {navItems.map(({ label, url }) => (
                            <NavbarItem key={label} href={url}>
                                {label}
                            </NavbarItem>
                        ))}

                        <Dropdown>
                            <DropdownButton as={NavbarItem} className="max-lg:hidden">
                                <NavbarLabel>Another DropDown</NavbarLabel>
                                <ChevronDownIcon />
                            </DropdownButton>
                            <TeamDropdownMenu />
                        </Dropdown>


                    </NavbarSection>
                    <NavbarSpacer />
                    <NavbarSection>
                        <NavbarItem href="/search" aria-label="Search">
                            <MagnifyingGlassIcon />
                        </NavbarItem>
                        <NavbarItem href="/inbox" aria-label="Inbox">
                            <InboxIcon />
                        </NavbarItem>
                        <Dropdown>
                            <DropdownButton as={NavbarItem}>
                                <Avatar src="/images/steveHeadShot.jpg" square />
                            </DropdownButton>
                            <DropdownMenu className="min-w-64" anchor="bottom end">
                                <DropdownItem href="/my-profile">
                                    <UserIcon />
                                    <DropdownLabel>My profile</DropdownLabel>
                                </DropdownItem>
                                <DropdownItem href="/settings">
                                    <Cog8ToothIcon />
                                    <DropdownLabel>Settings</DropdownLabel>
                                </DropdownItem>
                                <DropdownDivider />
                                <DropdownItem href="/privacy-policy">
                                    <ShieldCheckIcon />
                                    <DropdownLabel>Privacy policy</DropdownLabel>
                                </DropdownItem>
                                <DropdownItem href="/share-feedback">
                                    <LightBulbIcon />
                                    <DropdownLabel>Share feedback</DropdownLabel>
                                </DropdownItem>
                                <DropdownDivider />
                                <DropdownItem href="/logout">
                                    <ArrowRightStartOnRectangleIcon />
                                    <DropdownLabel>Sign out</DropdownLabel>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarSection>
                </Navbar>
            }
            sidebar={
                <Sidebar>
                    <SidebarHeader>
                        <Dropdown>
                            <DropdownButton as={SidebarItem} className="lg:mb-2.5">
                                <Avatar src="/tailwind-logo.svg" />
                                <SidebarLabel>Tailwind Labs</SidebarLabel>
                                <ChevronDownIcon />
                            </DropdownButton>
                            <TeamDropdownMenu />
                        </Dropdown>
                    </SidebarHeader>
                    <SidebarBody>
                        <SidebarSection>
                            {navItems.map(({ label, url }) => (
                                <SidebarItem key={label} href={url}>
                                    {label}
                                </SidebarItem>
                            ))}
                        </SidebarSection>
                    </SidebarBody>
                </Sidebar>
            }
        >
           <Sample />
        </StackedLayout>
    )
}
