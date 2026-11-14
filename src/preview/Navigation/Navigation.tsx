import {
    Activity,
    BadgeCheck,
    Bell,
    Book,
    CalendarClock,
    CalendarDays,
    CalendarRange,
    ChartColumn,
    ChartPie,
    Clipboard,
    ClipboardList,
    CreditCard,
    DollarSign,
    FileBarChart,
    Files,
    FileText,
    GitBranch,
    Globe,
    History,
    Images,
    KeyRound,
    LayoutDashboard,
    LayoutTemplate,
    LockKeyhole,
    Mail,
    MessageSquare,
    Package,
    Plug,
    Receipt,
    ScrollText,
    Send,
    Settings,
    Shield,
    ShieldCheck,
    ShoppingCart,
    SlidersHorizontal,
    Target,
    Users,
    UsersRound,
    Workflow,
} from "lucide-react";
import { DialogTrigger } from "react-aria-components";
import type { Variant } from "@/components/Navigation/core";
import {
    Button,
    ExtendedFloatingActionButton,
    FloatingActionButton,
} from "../../components/Button";
import { ModalOverlay } from "../../components/Dialog";
import {
    Navigation,
    NavigationButton,
    NavigationLink,
    NavigationSection,
    NavigationSectionLabel,
    NavigationState,
    SubNavigation,
    SubNavigationTrigger,
} from "../../components/Navigation";
import { SideSheetDialog, SideSheetModal } from "../../components/Sheets";

export const NavStatePreview = ({ variant }: { variant?: Variant }) => {
    return (
        <Navigation label="Adgytec Workspace" variant={variant}>
            <div className="nav-fab">
                {variant === "collapsed" ? (
                    <FloatingActionButton
                        icon={Send}
                        tooltip="Send"
                        size="small"
                    />
                ) : (
                    <ExtendedFloatingActionButton icon={Send} size="small">
                        Send
                    </ExtendedFloatingActionButton>
                )}
            </div>

            <NavigationLink
                label="Dashboard"
                icon={LayoutDashboard}
                activeIcon={LayoutDashboard}
            />

            <SubNavigationTrigger
                stateID="Identity & Access"
                label="Identity & Access"
            >
                <NavigationButton icon={Shield} activeIcon={ShieldCheck} />

                <SubNavigation>
                    <NavigationLink
                        label="Users"
                        icon={Users}
                        activeIcon={Users}
                    />

                    <NavigationLink
                        label="Groups"
                        icon={UsersRound}
                        activeIcon={UsersRound}
                    />

                    <NavigationLink
                        label="Roles"
                        icon={BadgeCheck}
                        activeIcon={BadgeCheck}
                    />

                    <SubNavigationTrigger stateID="Policies" label="Policies">
                        <NavigationButton
                            icon={ScrollText}
                            activeIcon={ScrollText}
                        />

                        <SubNavigation>
                            <NavigationLink
                                label="Access Policies"
                                icon={LockKeyhole}
                                activeIcon={LockKeyhole}
                            />

                            <NavigationLink
                                label="Permission Sets"
                                icon={KeyRound}
                                activeIcon={KeyRound}
                            />

                            <NavigationLink
                                label="Conditional Access"
                                icon={GitBranch}
                                activeIcon={GitBranch}
                            />
                        </SubNavigation>
                    </SubNavigationTrigger>
                </SubNavigation>
            </SubNavigationTrigger>

            <SubNavigationTrigger
                stateID="Content Management"
                label="Content Management"
            >
                <NavigationButton isActive icon={Files} activeIcon={Files} />

                <SubNavigation>
                    <NavigationLink
                        label="Pages"
                        icon={FileText}
                        activeIcon={FileText}
                    />

                    <NavigationLink
                        label="Media Library"
                        icon={Images}
                        activeIcon={Images}
                    />

                    <NavigationLink
                        label="Templates"
                        icon={LayoutTemplate}
                        activeIcon={LayoutTemplate}
                    />

                    <NavigationLink
                        label="Analytics"
                        icon={ChartColumn}
                        activeIcon={ChartColumn}
                    />

                    <NavigationLink
                        label="Users"
                        icon={Users}
                        activeIcon={Users}
                    />

                    <NavigationLink
                        label="Roles & Permissions"
                        icon={ShieldCheck}
                        activeIcon={ShieldCheck}
                    />

                    <NavigationLink
                        label="Forms"
                        icon={ClipboardList}
                        activeIcon={ClipboardList}
                    />

                    <NavigationLink
                        label="Notifications"
                        icon={Bell}
                        activeIcon={Bell}
                    />

                    <NavigationLink
                        label="Comments"
                        icon={MessageSquare}
                        activeIcon={MessageSquare}
                    />

                    <NavigationLink
                        label="Contacts"
                        icon={Book}
                        activeIcon={Book}
                    />

                    <NavigationLink
                        label="Products"
                        icon={Package}
                        activeIcon={Package}
                    />

                    <NavigationLink
                        label="Orders"
                        icon={ShoppingCart}
                        activeIcon={ShoppingCart}
                    />

                    <NavigationLink
                        label="Invoices"
                        icon={Receipt}
                        activeIcon={Receipt}
                    />

                    <NavigationLink
                        label="Reports"
                        icon={FileBarChart}
                        activeIcon={FileBarChart}
                    />

                    <NavigationLink
                        label="Integrations"
                        icon={Plug}
                        activeIcon={Plug}
                    />

                    <NavigationLink
                        label="API Keys"
                        icon={KeyRound}
                        activeIcon={KeyRound}
                    />

                    <NavigationLink
                        label="Domains"
                        icon={Globe}
                        activeIcon={Globe}
                    />

                    <NavigationLink
                        label="Settings"
                        icon={Settings}
                        activeIcon={Settings}
                    />

                    <SubNavigationTrigger
                        stateID="Publishing"
                        label="Publishing"
                    >
                        <NavigationButton
                            isActive
                            icon={Send}
                            activeIcon={Send}
                        />

                        <SubNavigation>
                            <NavigationLink
                                label="Workflows"
                                icon={Workflow}
                                activeIcon={Workflow}
                            />

                            <NavigationLink
                                label="Approvals"
                                icon={BadgeCheck}
                                activeIcon={BadgeCheck}
                            />

                            <NavigationLink
                                isActive
                                label="Schedules"
                                icon={CalendarClock}
                                activeIcon={CalendarClock}
                            />
                        </SubNavigation>
                    </SubNavigationTrigger>
                </SubNavigation>
            </SubNavigationTrigger>

            <SubNavigationTrigger stateID="Analytics" label="Analytics">
                <NavigationButton icon={ChartColumn} activeIcon={ChartColumn} />

                <SubNavigation>
                    <NavigationLink
                        label="Overview"
                        icon={ChartPie}
                        activeIcon={ChartPie}
                    />

                    <NavigationLink
                        label="Traffic"
                        icon={Activity}
                        activeIcon={Activity}
                    />

                    <NavigationLink
                        label="Conversions"
                        icon={Target}
                        activeIcon={Target}
                    />

                    <SubNavigationTrigger stateID="Reports" label="Reports">
                        <NavigationButton
                            icon={FileBarChart}
                            activeIcon={FileBarChart}
                        />

                        <SubNavigation>
                            <NavigationLink
                                label="Daily Reports"
                                icon={CalendarDays}
                                activeIcon={CalendarDays}
                            />

                            <NavigationLink
                                label="Monthly Reports"
                                icon={CalendarRange}
                                activeIcon={CalendarRange}
                            />

                            <NavigationLink
                                label="Custom Reports"
                                icon={SlidersHorizontal}
                                activeIcon={SlidersHorizontal}
                            />
                        </SubNavigation>
                    </SubNavigationTrigger>
                </SubNavigation>
            </SubNavigationTrigger>

            <NavigationLink
                label="Billing"
                icon={CreditCard}
                activeIcon={CreditCard}
            />

            <NavigationLink
                label="Audit Logs"
                icon={History}
                activeIcon={History}
            />

            <NavigationLink
                label="Settings"
                icon={Settings}
                activeIcon={Settings}
            />
        </Navigation>
    );
};

export const NavPreview = () => {
    return (
        <div className="items-grid nav-preview">
            <div className="items">
                <NavigationState>
                    <DialogTrigger>
                        <Button>open</Button>

                        <ModalOverlay>
                            <SideSheetModal layout="detached" alignment="start">
                                <SideSheetDialog>
                                    <NavStatePreview />
                                </SideSheetDialog>
                            </SideSheetModal>
                        </ModalOverlay>
                    </DialogTrigger>

                    <div className="nav">
                        <NavStatePreview variant="collapsed" />
                    </div>

                    <div className="nav">
                        <NavStatePreview />
                    </div>
                </NavigationState>
            </div>

            <div className="items">
                <div className="nav">
                    <Navigation label="Adgytec Workspace" variant="collapsed">
                        <NavigationSection>
                            <NavigationSectionLabel>
                                Workspace
                            </NavigationSectionLabel>

                            <NavigationLink
                                label="Dashboard"
                                icon={LayoutDashboard}
                                activeIcon={LayoutDashboard}
                            />

                            <NavigationLink
                                label="Inbox"
                                icon={Mail}
                                activeIcon={Mail}
                            />

                            <NavigationLink
                                label="Tasks"
                                icon={Clipboard}
                                activeIcon={Clipboard}
                            />
                        </NavigationSection>

                        <NavigationSection>
                            <NavigationSectionLabel>
                                Administration
                            </NavigationSectionLabel>

                            <SubNavigationTrigger
                                label="Identity & Access"
                                stateID="Identity & Access"
                            >
                                <NavigationButton
                                    icon={Shield}
                                    activeIcon={ShieldCheck}
                                />

                                <SubNavigation>
                                    <NavigationLink
                                        label="Users"
                                        icon={Users}
                                        activeIcon={Users}
                                    />

                                    <NavigationLink
                                        label="Roles"
                                        icon={BadgeCheck}
                                        activeIcon={BadgeCheck}
                                    />

                                    <NavigationLink
                                        label="Groups"
                                        icon={UsersRound}
                                        activeIcon={UsersRound}
                                    />
                                </SubNavigation>
                            </SubNavigationTrigger>

                            <SubNavigationTrigger
                                label="Settings"
                                stateID="Settings"
                            >
                                <NavigationButton
                                    icon={Settings}
                                    activeIcon={Settings}
                                />

                                <SubNavigation>
                                    <NavigationLink
                                        label="General"
                                        icon={Settings}
                                        activeIcon={Settings}
                                    />

                                    <NavigationLink
                                        label="Billing"
                                        icon={DollarSign}
                                        activeIcon={DollarSign}
                                    />

                                    <NavigationLink
                                        label="Integrations"
                                        icon={Globe}
                                        activeIcon={Globe}
                                    />
                                </SubNavigation>
                            </SubNavigationTrigger>
                        </NavigationSection>
                    </Navigation>
                </div>

                <div className="nav">
                    <Navigation label="Adgytec Workspace">
                        <NavigationSection>
                            <NavigationSectionLabel>
                                Workspace
                            </NavigationSectionLabel>

                            <NavigationLink
                                label="Dashboard"
                                icon={LayoutDashboard}
                                activeIcon={LayoutDashboard}
                            />

                            <NavigationLink
                                label="Inbox"
                                icon={Mail}
                                activeIcon={Mail}
                            />

                            <NavigationLink
                                label="Tasks"
                                icon={Clipboard}
                                activeIcon={Clipboard}
                            />
                        </NavigationSection>

                        <NavigationSection>
                            <NavigationSectionLabel>
                                Administration
                            </NavigationSectionLabel>

                            <SubNavigationTrigger
                                label="Identity & Access"
                                stateID="Identity & Access"
                            >
                                <NavigationButton
                                    icon={Shield}
                                    activeIcon={ShieldCheck}
                                />

                                <SubNavigation>
                                    <NavigationLink
                                        label="Users"
                                        icon={Users}
                                        activeIcon={Users}
                                    />

                                    <NavigationLink
                                        label="Roles"
                                        icon={BadgeCheck}
                                        activeIcon={BadgeCheck}
                                    />

                                    <NavigationLink
                                        label="Groups"
                                        icon={UsersRound}
                                        activeIcon={UsersRound}
                                    />
                                </SubNavigation>
                            </SubNavigationTrigger>

                            <SubNavigationTrigger
                                label="Settings"
                                stateID="Settings"
                            >
                                <NavigationButton
                                    icon={Settings}
                                    activeIcon={Settings}
                                />

                                <SubNavigation>
                                    <NavigationLink
                                        label="General"
                                        icon={Settings}
                                        activeIcon={Settings}
                                    />

                                    <NavigationLink
                                        label="Billing"
                                        icon={DollarSign}
                                        activeIcon={DollarSign}
                                    />

                                    <NavigationLink
                                        label="Integrations"
                                        icon={Globe}
                                        activeIcon={Globe}
                                    />
                                </SubNavigation>
                            </SubNavigationTrigger>
                        </NavigationSection>
                    </Navigation>
                </div>
            </div>
        </div>
    );
};

export default NavPreview;
