import { Fragment, useState, type ReactNode } from "react";
import { type ColorTheme, type HierarchyItemType } from "./utils/types";
import { FilledButton } from "./components/Button/FilledButton";
import { OutlinedButton } from "./components/Button/OutlinedButton";
import { TextButton } from "./components/Button/TextButton";
import type { ButtonVariant } from "@/components/Button/ButtonBase/types";
import { Link } from "@/components/Link/LinkBase";
import { FilledButtonLink } from "./components/Link/FilledButtonLink";
import { OutlinedButtonLink } from "./components/Link/OutlinedButtonLink";
import type { SelectOptions } from "./components/Select/types";
import { Select } from "./components/Select/Select";
import type { AvatarSize } from "./components/Avatar/types";
import { Avatar } from "./components/Avatar/Avatar";
import { Copy } from "lucide-react";
import { ModalBase } from "./components/Modal/ModalBase/ModalBase";
import { ModalAction } from "./components/Modal/ModalAction/ModalAction";
import { MenuButton } from "./components/Menu/MenuButton";
import { MenuLabel } from "./components/Menu/MenuLabel";
import { Tooltip } from "./components/Tooltip/Tooltip";
import type { SidebarPosition, SidebarSize } from "./components/Sidebar/types";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Tree } from "./components/Tree/Tree";
import { NavigationSidebar } from "./components/Navigation/NavigationSidebar/NavigationSidebar";
import { NavigationMenu } from "./components/Navigation/NavigationMenu/NavigationMenu";
import { NavigationResponsive } from "./components/Navigation/NavigationResponsive/NavigationResponsive";
import { Disclosure } from "./components/Disclosure/Disclosure/Disclosure";
import { DisclosureGroup } from "./components/Disclosure/DisclousureGroup/DisclousreGroup";
import type { DisclosureProps } from "./components/Disclosure/Disclosure/types";
import { type Key } from "react-aria-components";
import { Input } from "./components/Form/Input/Input";
import { TextArea } from "./components/Form/TextArea/TextArea";
import {
  type ToggleButtonGroupItem,
  ToggleButtonGroup,
} from "./components/ToggleButtonGroup";
import "./styles/app.css";
import { GradientCard } from "./components/Card/GradientCard";
import { SolidCard } from "./components/Card/SolidCard";
import type { SolidCardBackground } from "./components/Card/BaseCard";
import { VisualSettings } from "./components/VisualSettings/VisualSettings";

// preview container
const PreviewContainer = (props: { label: string; children: ReactNode }) => {
  return (
    <div className="preview-container">
      <Tooltip description="hello label">
        <h2>{props.label}</h2>
      </Tooltip>
      <div className="preview-container__items">{props.children}</div>
    </div>
  );
};

// button component preview
const ButtonPreview = () => {
  const buttonTheme: ColorTheme[] = [
    "primary",
    "primary-variant",
    "secondary",
    "tertiary",
    "error",
    "inverse-surface",
    "success",
  ];

  const buttonElements = [
    {
      element: FilledButton,
      label: "Filled Button",
      description: "This is filled button",
    },
    {
      element: OutlinedButton,
      label: "Outlined Button",
      description: "This is outlined button",
    },
    {
      element: TextButton,
      label: "Text Button",
      description: "This is text button",
    },
  ];

  const avatarSrc =
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const onPress = () => {};

  let descriptionAvatar = "This is a avatar button";

  return (
    <PreviewContainer label="Buttons">
      {buttonTheme.map((theme) => {
        return (
          <div className="item-container" key={theme}>
            {buttonElements.map((ButtonElement, index) => {
              return (
                <Fragment key={theme + index}>
                  <ButtonElement.element
                    onPress={onPress}
                    theme={theme}
                    description={ButtonElement.description}
                  >
                    {ButtonElement.label}
                  </ButtonElement.element>

                  <ButtonElement.element
                    onPress={onPress}
                    theme={theme}
                    isDisabled
                    description={ButtonElement.description}
                  >
                    {ButtonElement.label}
                  </ButtonElement.element>

                  {ButtonElement.label === "Text Button" && (
                    <ButtonElement.element
                      onPress={onPress}
                      theme={theme}
                      description={"This button is shrinked"}
                      shape="shrink"
                    >
                      {ButtonElement.label}
                    </ButtonElement.element>
                  )}

                  <ButtonElement.element
                    theme={theme}
                    onPress={onPress}
                    shape="square"
                    description="This is square button"
                  >
                    <Copy />
                  </ButtonElement.element>

                  <ButtonElement.element
                    theme={theme}
                    onPress={onPress}
                    shape="avatar"
                    description={descriptionAvatar}
                  >
                    <Avatar src={avatarSrc} />
                  </ButtonElement.element>

                  <ButtonElement.element
                    theme={theme}
                    onPress={onPress}
                    shape="avatar"
                    description={descriptionAvatar}
                  >
                    <Avatar theme={theme}>RV</Avatar>
                  </ButtonElement.element>
                </Fragment>
              );
            })}
          </div>
        );
      })}
    </PreviewContainer>
  );
};

const LinkPreview = () => {
  const linkTheme: ColorTheme[] = [
    "primary",
    "primary-variant",
    "secondary",
    "tertiary",
    "error",
    "inverse-surface",
    "success",
  ];

  const linkElements = [
    {
      element: Link,
      label: "Normal Link",
      description: "This is regular link",
    },
    {
      element: FilledButtonLink,
      label: "Filled Button Link",
      description: "This is filled button link",
    },
    {
      element: OutlinedButtonLink,
      label: "Outlined Button Link",
      description: "This is outlined button link",
    },
  ];

  return (
    <PreviewContainer label="Links">
      {linkTheme.map((theme) => {
        return (
          <div className="item-container" key={theme}>
            {linkElements.map((LinkElement, index) => {
              return (
                <Fragment key={theme + index}>
                  <LinkElement.element
                    href="/"
                    theme={theme}
                    description={LinkElement.description}
                  >
                    {LinkElement.label}
                  </LinkElement.element>

                  <LinkElement.element
                    href="/"
                    theme={theme}
                    isDisabled
                    description={LinkElement.description}
                  >
                    {LinkElement.label}
                  </LinkElement.element>
                </Fragment>
              );
            })}
          </div>
        );
      })}
    </PreviewContainer>
  );
};

const SelectPreview = () => {
  const buttonVariants: ButtonVariant[] = ["filled", "outlined", "text"];

  const colorThemes: ColorTheme[] = [
    "primary",
    "primary-variant",
    "secondary",
    "tertiary",
    "error",
    "inverse-surface",
    "success",
  ];

  const options: SelectOptions[] = [
    {
      key: "cakes",
      displayValue: "Cakes 🎂",
      description:
        "A cake is a baked sweet food, traditionally made with flour, sugar, and eggs, often with added fats and leavening agents.",
    },
    {
      key: "cookies",
      displayValue: "Cookies 🍪",
      description:
        "Cookies are small, sweet baked goods made with flour, sugar, and fat, often featuring additions like chocolate chips, nuts, or fruit. ",
      disabled: true,
    },
    {
      key: "donuts",
      displayValue: "Donuts 🍩",
      description:
        "Donuts are a type of fried or baked pastry, typically made from flour, sugar, and eggs, and often shaped like a ring with a hole in the center. ",
    },
    {
      key: "pastries",
      displayValue: "Pastries 🍰",
      description:
        "Pastries are baked goods made from dough, often with a flaky or crumbly texture, and can be sweet or savory.",
    },
    {
      key: "ice-cream",
      displayValue: "Icecream 🍨",
      description:
        "A frozen dairy dessert made mainly of sweetened cream or a mixture of milk and cream and frozen in a churn to whip in air and keep the ice crystals small.",
    },
  ];

  let description = "Who doesn't like desserts?";

  const [dessert, setDessert] = useState<Key>("cookies");

  return (
    <PreviewContainer label="Select">
      {colorThemes.map((theme) => {
        return (
          <div className="item-container" key={theme}>
            {buttonVariants.map((variant) => {
              return (
                <Fragment key={"select" + variant + theme}>
                  <Select
                    label="Desserts"
                    name="dessert"
                    options={options}
                    triggerVariant={variant}
                    placeholder="Select your favorite dessert"
                    description={description}
                    triggerTheme={theme}
                  />

                  <Select
                    label="Desserts"
                    options={options}
                    triggerVariant={variant}
                    placeholder="Select your favorite dessert"
                    description={description}
                    selectedKey={dessert}
                    triggerTheme={theme}
                    onSelectionChange={(key) => {
                      if (key === null) return;
                      setDessert(key);
                    }}
                  />

                  <Select
                    label="Desserts"
                    options={options}
                    triggerVariant={variant}
                    placeholder="Select your favorite dessert"
                    disabled
                    description={description}
                    triggerTheme={theme}
                  />
                </Fragment>
              );
            })}
          </div>
        );
      })}
    </PreviewContainer>
  );
};

const AvatarPreview = () => {
  const avatarSrc =
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const avatarChildren = "RV";

  const avatarSizes: AvatarSize[] = ["small", "normal", "large"];

  const avatarTheme: ColorTheme[] = [
    "primary",
    "primary-variant",
    "secondary",
    "tertiary",
    "error",
    "inverse-surface",
    "success",
  ];

  return (
    <PreviewContainer label="Avatar">
      {avatarSizes.map((size) => {
        return (
          <div className="item-container" key={"avatar" + size}>
            <Avatar size={size} src={avatarSrc} label="dog-smile" />

            {avatarTheme.map((theme) => {
              return (
                <Avatar size={size} theme={theme} key={"avatar" + size + theme}>
                  {avatarChildren}
                </Avatar>
              );
            })}
          </div>
        );
      })}
    </PreviewContainer>
  );
};

const ModalPreview = () => {
  return (
    <PreviewContainer label="Modal Base">
      <div className="item-container">
        <ModalBase
          trigger={
            <FilledButton theme="primary" description="Open modal base">
              Open modal
            </FilledButton>
          }
          modalOverlayProps={{
            isDismissable: true,
          }}
        >
          <AvatarPreview />
        </ModalBase>
      </div>
    </PreviewContainer>
  );
};

const ModalActionPreview = () => {
  const modalTheme: ColorTheme[] = [
    "primary",
    "primary-variant",
    "secondary",
    "tertiary",
    "error",
    "inverse-surface",
    "success",
  ];

  const trigger = (theme: ColorTheme) => (
    <OutlinedButton theme={theme} description="Open modal action">
      Open modal
    </OutlinedButton>
  );

  return (
    <PreviewContainer label="Modal Action">
      <div className="item-container">
        {modalTheme.map((theme) => {
          return (
            <ModalAction
              closeText="Close"
              trigger={trigger(theme)}
              key={theme}
              header="Simple Modal"
              actionPlacement="end"
              modalAction={({ close }) => (
                <FilledButton onPress={close} theme={theme}>
                  Okay
                </FilledButton>
              )}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                fermentum felis felis, non euismod ipsum convallis at. Curabitur
                efficitur, lectus et molestie feugiat, ipsum justo euismod
                dolor, at dictum mi diam eget sem. Donec at dui suscipit magna
                rhoncus lobortis at quis ipsum. Curabitur mattis posuere libero,
                a vehicula arcu sagittis in. Duis mollis quam in turpis porta
                porta. Mauris quam orci, interdum sit amet purus ac, laoreet
                accumsan mi. Aliquam nec vulputate quam. Donec neque mi,
                bibendum eu est eu, aliquam condimentum diam.
              </p>

              <p>
                Cras tristique lorem vel magna porttitor molestie. Ut pretium
                ullamcorper tellus. Phasellus euismod neque non finibus
                pharetra.
              </p>
            </ModalAction>
          );
        })}
      </div>
    </PreviewContainer>
  );
};

const MenuPreview = () => {
  const menuItems: HierarchyItemType[] = [
    {
      id: "1",
      type: "link",
      href: "https://google.com",
      target: "_blank",
      node: "Google",
    },
    {
      id: "2",
      type: "link",
      href: "https://adgytec.in",
      target: "_blank",
      node: "Adgytec",
    },
    {
      id: "3",
      type: "separator",
    },
    {
      id: "4",
      type: "button",
      onPress: () => alert("hmm i am pressed"),
      node: "Press me",
    },
    {
      id: "5",
      type: "button",
      onPress: () => {},
      node: "It will not do anything",
    },
    {
      id: "6",
      type: "separator",
    },
    {
      id: "7",
      type: "sub-items",
      subItems: [
        {
          id: "1",
          type: "link",
          href: "https://google.com",
          target: "_blank",
          node: "Google",
        },
        {
          id: "2",
          type: "link",
          href: "https://adgytec.in",
          target: "_blank",
          node: "Adgytec",
        },
        {
          id: "3",
          type: "separator",
        },
        {
          id: "4",
          type: "button",
          onPress: () => alert("hmm i am pressed"),
          node: "Press me",
        },
        {
          id: "5",
          type: "button",
          onPress: () => {},
          node: "It will not do anything",
        },
        {
          id: "6",
          type: "separator",
        },
        {
          id: "7",
          type: "sub-items",
          subItems: [
            {
              id: "1",
              type: "link",
              href: "https://google.com",
              target: "_blank",
              node: "Google",
            },
            {
              id: "2",
              type: "link",
              href: "https://adgytec.in",
              target: "_blank",
              node: "Adgytec",
            },
            {
              id: "3",
              type: "separator",
            },
            {
              id: "4",
              type: "button",
              onPress: () => alert("hmm i am pressed"),
              node: "Press me",
            },
            {
              id: "5",
              type: "button",
              onPress: () => {},
              node: "It will not do anything",
            },
            {
              id: "6",
              type: "separator",
            },
            {
              id: "7",
              type: "sub-items",
              subItems: [
                {
                  id: "1",
                  type: "link",
                  href: "https://google.com",
                  target: "_blank",
                  node: "Google",
                },
                {
                  id: "2",
                  type: "link",
                  href: "https://adgytec.in",
                  target: "_blank",
                  node: "Adgytec",
                },
                {
                  id: "3",
                  type: "separator",
                },
                {
                  id: "4",
                  type: "button",
                  onPress: () => alert("hmm i am pressed"),
                  node: "Press me",
                },
                {
                  id: "5",
                  type: "button",
                  onPress: () => {},
                  node: "It will not do anything",
                },
                {
                  id: "6",
                  type: "separator",
                },
                {
                  id: "7",
                  type: "sub-items",
                  subItems: [
                    {
                      id: "1",
                      type: "link",
                      href: "https://google.com",
                      target: "_blank",
                      node: "Google",
                    },
                    {
                      id: "2",
                      type: "link",
                      href: "https://adgytec.in",
                      target: "_blank",
                      node: "Adgytec",
                    },
                    {
                      id: "3",
                      type: "separator",
                    },
                    {
                      id: "4",
                      type: "button",
                      onPress: () => alert("hmm i am pressed"),
                      node: "Press me",
                    },
                    {
                      id: "5",
                      type: "button",
                      onPress: () => {},
                      node: "It will not do anything",
                    },
                    {
                      id: "6",
                      type: "separator",
                    },
                    {
                      id: "7",
                      type: "sub-items",
                      subItems: [],
                      node: "Sub Items",
                    },
                    {
                      id: "8",
                      type: "item-node",
                      node: (
                        <OutlinedButton
                          onPress={() => alert("sign out pressed")}
                          theme="error"
                        >
                          Sign Out
                        </OutlinedButton>
                      ),
                    },
                  ],
                  node: "Sub Items",
                },
                {
                  id: "8",
                  type: "item-node",
                  node: (
                    <OutlinedButton
                      onPress={() => alert("sign out pressed")}
                      theme="error"
                    >
                      Sign Out
                    </OutlinedButton>
                  ),
                },
              ],
              node: "Sub Items",
            },
            {
              id: "8",
              type: "item-node",
              node: (
                <OutlinedButton
                  onPress={() => alert("sign out pressed")}
                  theme="error"
                >
                  Sign Out
                </OutlinedButton>
              ),
            },
          ],
          node: "Sub Items",
        },
        {
          id: "8",
          type: "item-node",
          node: (
            <OutlinedButton
              onPress={() => alert("sign out pressed")}
              theme="error"
            >
              Sign Out
            </OutlinedButton>
          ),
        },
      ],
      node: "Sub Items",
    },
    {
      id: "8",
      type: "item-node",
      node: (
        <OutlinedButton onPress={() => alert("sign out pressed")} theme="error">
          Sign Out
        </OutlinedButton>
      ),
    },
  ];

  return (
    <PreviewContainer label="Menu">
      <div className="item-container">
        <MenuButton menuItems={menuItems}>
          <FilledButton>Open Menu</FilledButton>
        </MenuButton>

        <MenuLabel menuItems={menuItems} description="avatar menu">
          <Avatar theme="inverse-surface">RV</Avatar>
        </MenuLabel>
      </div>
    </PreviewContainer>
  );
};

const SidebarPreview = () => {
  const sidebarPositions: SidebarPosition[] = [
    "inline-start",
    "inline-end",
    "block-start",
    "block-end",
  ];

  const sidebarSizes: SidebarSize[] = [
    "full",
    "three-quarters",
    "half",
    "quarter",
  ];

  const getTrigger = (size: SidebarSize) => {
    let colorTheme: ColorTheme;
    switch (size) {
      case "full":
        colorTheme = "primary";
        break;
      case "three-quarters":
        colorTheme = "primary-variant";
        break;
      case "half":
        colorTheme = "secondary";
        break;
      case "quarter":
        colorTheme = "tertiary";
        break;
    }

    return <OutlinedButton theme={colorTheme}>Open sidebar</OutlinedButton>;
  };

  return (
    <PreviewContainer label="Sidebar">
      {sidebarPositions.map((position) => {
        return (
          <div className="item-container" key={position}>
            {sidebarSizes.map((size) => {
              return (
                <Sidebar
                  key={size + position}
                  sidebarSize={size}
                  sidebarPosition={position}
                  isDismissable
                  trigger={getTrigger(size)}
                >
                  {({ close }) => {
                    return (
                      <div>
                        <p>Sidebar content</p>

                        <TextButton onPress={close}>Close</TextButton>
                      </div>
                    );
                  }}
                </Sidebar>
              );
            })}
          </div>
        );
      })}
    </PreviewContainer>
  );
};

const TreePreview = () => {
  const tree: HierarchyItemType[] = [
    {
      id: "1",
      type: "link",
      node: "Dashboard",
      href: "https://www.google.com",
      target: "_blank",
      active: true,
    },
    {
      id: "2",
      type: "button",
      node: "Actions",
      onPress: () => alert("Main action triggered"),
    },
    {
      id: "3",
      type: "sub-items",
      node: "Settings",
      subItems: [
        {
          id: "3.1",
          type: "link",
          node: "Account",
          href: "/settings/account",
        },
        {
          id: "3.2",
          type: "button",
          node: "Logout",
          onPress: () => alert("Logging out"),
        },
      ],
    },
    {
      id: "4",
      type: "sub-items",
      node: "Support",
      subItems: [
        {
          id: "4.1",
          type: "link",
          node: "FAQ",
          href: "/support/faq",
        },
        {
          id: "4.2",
          type: "link",
          node: "Contact Us",
          href: "/support/contact",
          target: "_blank",
        },
      ],
    },
    {
      id: "5",
      type: "item-node",
      node: (
        <OutlinedButton
          theme="error"
          onPress={() => {
            alert("Signing out user");
          }}
        >
          Sign out
        </OutlinedButton>
      ),
    },
  ];

  return (
    <PreviewContainer label="Tree">
      <Tree items={tree} />
    </PreviewContainer>
  );
};

const NavSidebarPreview = () => {
  const tree: HierarchyItemType[] = [
    {
      id: "1",
      type: "link",
      node: "Dashboard",
      href: "https://www.google.com",
      target: "_blank",
      active: true,
    },
    {
      id: "2",
      type: "button",
      node: "Actions",
      onPress: () => alert("Main action triggered"),
    },
    {
      id: "3",
      type: "sub-items",
      node: "Settings",
      subItems: [
        {
          id: "3.1",
          type: "link",
          node: "Account",
          href: "/settings/account",
        },
        {
          id: "3.2",
          type: "button",
          node: "Logout",
          onPress: () => alert("Logging out"),
        },
      ],
    },
    {
      id: "4",
      type: "sub-items",
      node: "Support",
      subItems: [
        {
          id: "4.1",
          type: "link",
          node: "FAQ",
          href: "/support/faq",
        },
        {
          id: "4.2",
          type: "link",
          node: "Contact Us",
          href: "/support/contact",
          target: "_blank",
        },
      ],
    },
    {
      id: "5",
      type: "item-node",
      node: (
        <OutlinedButton
          theme="error"
          onPress={() => {
            alert("Signing out user");
          }}
        >
          Sign out
        </OutlinedButton>
      ),
    },
  ];

  return (
    <PreviewContainer label="Nav Sidebar">
      <div className="items-container">
        <NavigationSidebar items={tree} />
      </div>
    </PreviewContainer>
  );
};

const NavMenuPreview = () => {
  const tree: HierarchyItemType[] = [
    {
      id: "1",
      type: "link",
      node: "Dashboard",
      href: "https://www.google.com",
      target: "_blank",
      active: true,
    },
    {
      id: "2",
      type: "button",
      node: "Actions",
      onPress: () => alert("Main action triggered"),
    },
    {
      id: "3",
      type: "sub-items",
      node: "Settings",
      subItems: [
        {
          id: "3.1",
          type: "link",
          node: "Account",
          href: "/settings/account",
        },
        {
          id: "3.2",
          type: "button",
          node: "Logout",
          onPress: () => alert("Logging out"),
        },
      ],
    },
    {
      id: "4",
      type: "sub-items",
      node: "Support",
      subItems: [
        {
          id: "4.1",
          type: "link",
          node: "FAQ",
          href: "/support/faq",
        },
        {
          id: "4.2",
          type: "link",
          node: "Contact Us",
          href: "/support/contact",
          target: "_blank",
        },
      ],
    },
    {
      id: "5",
      type: "item-node",
      node: (
        <OutlinedButton
          theme="error"
          onPress={() => {
            alert("Signing out user");
          }}
        >
          Sign out
        </OutlinedButton>
      ),
    },
  ];

  return (
    <PreviewContainer label="Nav Menu">
      <NavigationMenu items={tree} />
    </PreviewContainer>
  );
};

const NavResponsivePreview = () => {
  const tree: HierarchyItemType[] = [
    {
      id: "1",
      type: "link",
      node: "Dashboard",
      href: "https://www.google.com",
      target: "_blank",
      active: true,
    },
    {
      id: "2",
      type: "button",
      node: "Actions",
      onPress: () => alert("Main action triggered"),
    },
    {
      id: "3",
      type: "sub-items",
      node: "Settings",
      subItems: [
        {
          id: "3.1",
          type: "link",
          node: "Account",
          href: "/settings/account",
        },
        {
          id: "3.2",
          type: "button",
          node: "Logout",
          onPress: () => alert("Logging out"),
        },
      ],
    },
    {
      id: "4",
      type: "sub-items",
      node: "Support",
      subItems: [
        {
          id: "4.1",
          type: "link",
          node: "FAQ",
          href: "/support/faq",
        },
        {
          id: "4.2",
          type: "link",
          node: "Contact Us",
          href: "/support/contact",
          target: "_blank",
        },
      ],
    },
    {
      id: "5",
      type: "item-node",
      node: (
        <OutlinedButton
          theme="error"
          onPress={() => {
            alert("Signing out user");
          }}
        >
          Sign out
        </OutlinedButton>
      ),
    },
  ];

  return (
    <PreviewContainer label="Nav Responsive">
      <div className="items-container">
        <NavigationResponsive items={tree} mediaQuery="min-width:48em" />
      </div>
    </PreviewContainer>
  );
};

const DisclosurePreview = () => {
  return (
    <PreviewContainer label="Disclosure">
      <Disclosure heading="Hello click this to open">
        A cake is a baked sweet food, traditionally made with flour, sugar, and
        eggs, often with added fats and leavening agents.
      </Disclosure>
    </PreviewContainer>
  );
};

const DisclosureGroupPreview = () => {
  const items: DisclosureProps[] = [
    {
      id: "1",
      heading: "hello click this to open",
      children:
        "A cake is a baked sweet food, traditionally made with flour, sugar, and eggs, often with added fats and leavening agents.",
    },
    {
      id: "2",
      heading: "hello click this to open",
      children:
        "A cake is a baked sweet food, traditionally made with flour, sugar, and eggs, often with added fats and leavening agents.",
    },
    {
      id: "3",
      heading: "hello click this to open",
      children:
        "A cake is a baked sweet food, traditionally made with flour, sugar, and eggs, often with added fats and leavening agents.",
    },
  ];

  return (
    <PreviewContainer label="Disclosure Group">
      <DisclosureGroup items={items} />
    </PreviewContainer>
  );
};

const FormInputPreview = () => {
  return (
    <PreviewContainer label="Form Input">
      <Input
        label="Email"
        textFieldProps={{
          isRequired: true,
          type: "email",
        }}
      />

      <TextArea label="More info" />
    </PreviewContainer>
  );
};

const ToggleButtonPreview = () => {
  const items: ToggleButtonGroupItem[] = [
    {
      id: "light",
      value: "Light",
    },
    {
      id: "dark",
      value: "Dark",
    },
    {
      id: "system",
      value: "System",
    },
  ];

  const buttonTheme: ColorTheme[] = [
    "primary",
    "primary-variant",
    "secondary",
    "tertiary",
    "error",
    "inverse-surface",
    "success",
  ];

  return (
    <PreviewContainer label="Toggle Button Group">
      {buttonTheme.map((theme) => {
        return (
          <div className="item-container" key={theme}>
            <ToggleButtonGroup
              selectionMode="single"
              items={items}
              disallowEmptySelection
              theme={theme}
              orientation="horizontal"
            />

            <ToggleButtonGroup
              selectionMode="single"
              items={items}
              disallowEmptySelection
              theme={theme}
              orientation="horizontal"
              isDisabled
            />

            <ToggleButtonGroup
              selectionMode="single"
              items={items}
              disallowEmptySelection
              theme={theme}
              orientation="vertical"
            />

            <ToggleButtonGroup
              selectionMode="single"
              items={items}
              disallowEmptySelection
              theme={theme}
              orientation="vertical"
              isDisabled
            />
          </div>
        );
      })}
    </PreviewContainer>
  );
};

const CardPreview = () => {
  const backgrounds: SolidCardBackground[] = [
    "solid",
    "solid-high",
    "solid-highest",
    "solid-low",
    "solid-lowest",
  ];

  const imgsrc =
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const cardChild = (
    <>
      <img
        src={imgsrc}
        style={{
          borderRadius: "inherit",
        }}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
        amet egestas justo. Integer lobortis vulputate finibus. Morbi eget
        feugiat odio. Sed lectus massa, malesuada at laoreet non, porttitor non
        elit. Maecenas imperdiet varius nisi, non gravida velit egestas quis.
        Fusce tincidunt ac nulla ac condimentum. Integer auctor, libero vel
        maximus laoreet, nisl erat rhoncus nunc, a facilisis risus libero a
        felis.{" "}
      </p>
    </>
  );

  return (
    <PreviewContainer label="Card Preview">
      <div className="item-container">
        {backgrounds.map((background, ind) => {
          return (
            <SolidCard key={"solid" + ind} background={background}>
              {cardChild}
            </SolidCard>
          );
        })}

        <GradientCard>{cardChild}</GradientCard>
      </div>
    </PreviewContainer>
  );
};

const VisualSettingsPreview = () => {
  return (
    <div>
      <VisualSettings ui={false} />
      <VisualSettings />
    </div>
  );
};

const App = () => {
  const previewElements = [
    VisualSettingsPreview,
    ButtonPreview,
    LinkPreview,
    CardPreview,
    SelectPreview,
    AvatarPreview,
    ModalPreview,
    ModalActionPreview,
    MenuPreview,
    SidebarPreview,
    TreePreview,
    NavSidebarPreview,
    NavMenuPreview,
    NavResponsivePreview,
    DisclosurePreview,
    DisclosureGroupPreview,
    FormInputPreview,
    ToggleButtonPreview,
  ];

  return (
    <div className="preview-parent">
      {previewElements.map((Element, ind) => {
        return <Element key={ind} />;
      })}
    </div>
  );
};

export default App;
