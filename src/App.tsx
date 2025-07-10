import { Fragment, type ReactNode } from "react";
import { ColorTheme } from "./utils/types";
import FilledButton from "./components/Button/FilledButton";
import OutlinedButton from "./components/Button/OutlinedButton";
import TextButton from "./components/Button/TextButton";
import { ButtonShape, ButtonVariant } from "./components/Button/types";
import Link from "./components/Link/Link";
import FilledButtonLink from "./components/Link/FilledButtonLink";
import OutlinedButtonLink from "./components/Link/OutlinedButtonLink";
import type { SelectOptions } from "./components/Select/types";
import Select from "./components/Select/Select";
import { AvatarSize } from "./components/Avatar/types";
import Avatar from "./components/Avatar/Avatar";
import { Copy } from "lucide-react";
import ModalBase from "./components/ModalBase/ModalBase";
import ModalAction from "./components/ModalAction/ModalAction";
import { ModalActionPlacement } from "./components/ModalAction/types";
import type { MenuItemType } from "./components/Menu/types";
import MenuButton from "./components/Menu/MenuButton";
import MenuLabel from "./components/Menu/MenuLabel";
import Tooltip from "./components/Tooltip/Tooltip";
import { SidebarPosition, SidebarSize } from "./components/Sidebar/types";
import Sidebar from "./components/Sidebar/Sidebar";

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
  const buttonTheme = [
    ColorTheme.primary,
    ColorTheme.primaryVariant,
    ColorTheme.secondary,
    ColorTheme.tertiary,
    ColorTheme.error,
    ColorTheme.inverseSurface,
    ColorTheme.success,
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
                    disabled
                    description={ButtonElement.description}
                  >
                    {ButtonElement.label}
                  </ButtonElement.element>

                  {ButtonElement.label === "Text Button" && (
                    <ButtonElement.element
                      onPress={onPress}
                      theme={theme}
                      description={"This is button is shrinked"}
                      shape={ButtonShape.shrink}
                    >
                      {ButtonElement.label}
                    </ButtonElement.element>
                  )}

                  <ButtonElement.element
                    theme={theme}
                    onPress={onPress}
                    shape={ButtonShape.square}
                    description="This is square button"
                  >
                    <Copy strokeWidth={3} size={16} />
                  </ButtonElement.element>

                  <ButtonElement.element
                    theme={theme}
                    onPress={onPress}
                    shape={ButtonShape.avatar}
                    description={descriptionAvatar}
                  >
                    <Avatar src={avatarSrc} />
                  </ButtonElement.element>

                  <ButtonElement.element
                    theme={theme}
                    onPress={onPress}
                    shape={ButtonShape.avatar}
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
  const linkTheme = [
    ColorTheme.primary,
    ColorTheme.primaryVariant,
    ColorTheme.secondary,
    ColorTheme.tertiary,
    ColorTheme.error,
    ColorTheme.inverseSurface,
    ColorTheme.success,
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
                    disabled
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
  const buttonVariants = [
    ButtonVariant.filled,
    ButtonVariant.outlined,
    ButtonVariant.text,
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

  return (
    <PreviewContainer label="Select">
      <div className="item-container">
        {buttonVariants.map((variant) => {
          return (
            <Fragment key={"select" + variant}>
              <Select
                label="Desserts"
                options={options}
                triggerVariant={variant}
                placeholder="Select your favorite dessert"
                description={description}
              />

              <Select
                label="Desserts"
                options={options}
                triggerVariant={variant}
                placeholder="Select your favorite dessert"
                disabled
                description={description}
              />
            </Fragment>
          );
        })}
      </div>
    </PreviewContainer>
  );
};

const AvatarPreview = () => {
  const avatarSrc =
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const avatarChildren = "RV";

  const avatarSizes = [AvatarSize.small, AvatarSize.normal, AvatarSize.large];

  const avatarTheme = [
    ColorTheme.primary,
    ColorTheme.primaryVariant,
    ColorTheme.secondary,
    ColorTheme.tertiary,
    ColorTheme.error,
    ColorTheme.inverseSurface,
    ColorTheme.success,
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
            <FilledButton
              theme={ColorTheme.primary}
              description="Open modal base"
            >
              Open modal
            </FilledButton>
          }
          isDismissable
        >
          <AvatarPreview />
        </ModalBase>
      </div>
    </PreviewContainer>
  );
};

const ModalActionPreview = () => {
  const modalTheme = [
    ColorTheme.primary,
    ColorTheme.primaryVariant,
    ColorTheme.secondary,
    ColorTheme.tertiary,
    ColorTheme.error,
    ColorTheme.inverseSurface,
    ColorTheme.success,
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
              trigger={trigger(theme)}
              key={theme}
              header="Simple Modal"
              actionPlacement={ModalActionPlacement.end}
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
  const menuItems: MenuItemType[][] = [
    [
      {
        href: "/",
        type: "link",
        node: "first",
      },
      {
        type: "sub-menu",
        node: "sub-menu",
        subMenuItems: [
          [
            {
              href: "/",
              type: "link",
              node: "hello",
            },
            {
              href: "/",
              type: "link",
              node: "world",
            },
            {
              type: "sub-menu",
              node: "sub-menu",
              subMenuItems: [
                [
                  {
                    href: "/",
                    type: "link",
                    node: "hello",
                  },
                  {
                    href: "/",
                    type: "link",
                    node: "world",
                  },
                ],
                [
                  {
                    href: "/",
                    type: "link",
                    node: "another-hello",
                  },
                  {
                    href: "/",
                    type: "link",
                    node: "another-world",
                  },
                  {
                    type: "sub-menu",
                    node: "sub-menu",
                    subMenuItems: [
                      [
                        {
                          href: "/",
                          type: "link",
                          node: "hello",
                        },
                        {
                          href: "/",
                          type: "link",
                          node: "world",
                        },
                      ],
                      [
                        {
                          href: "/",
                          type: "link",
                          node: "another-hello",
                        },
                        {
                          href: "/",
                          type: "link",
                          node: "another-world",
                        },
                      ],
                    ],
                  },
                ],
              ],
            },
          ],
          [
            {
              href: "/",
              type: "link",
              node: "another-hello",
            },
            {
              href: "/",
              type: "link",
              node: "another-world",
            },
          ],
        ],
      },
      {
        href: "/",
        type: "link",
        node: "second",
      },
    ],

    [
      {
        href: "/",
        type: "link",
        node: "hello",
      },
      {
        type: "item-node",
        node: (
          <OutlinedButton
            theme={ColorTheme.error}
            onPress={() => {
              console.log("Signing out user");
            }}
          >
            Sign out
          </OutlinedButton>
        ),
      },
    ],
  ];

  return (
    <PreviewContainer label="Menu">
      <div className="item-container">
        <MenuButton menuItems={menuItems}>
          <FilledButton>Open Menu</FilledButton>
        </MenuButton>

        <MenuLabel menuItems={menuItems} description="avatar menu">
          <Avatar theme={ColorTheme.inverseSurface}>RV</Avatar>
        </MenuLabel>
      </div>
    </PreviewContainer>
  );
};

const SidebarPreview = () => {
  const sidebarPositions = [
    SidebarPosition.inlineStart,
    SidebarPosition.inlineEnd,
    SidebarPosition.blockStart,
    SidebarPosition.blockEnd,
  ];

  const sidebarSizes = [
    SidebarSize.full,
    SidebarSize.threeQuarters,
    SidebarSize.half,
    SidebarSize.quarter,
  ];

  const getTrigger = (size: SidebarSize) => {
    let colorTheme;
    switch (size) {
      case SidebarSize.full:
        colorTheme = ColorTheme.primary;
        break;
      case SidebarSize.threeQuarters:
        colorTheme = ColorTheme.primaryVariant;
        break;
      case SidebarSize.half:
        colorTheme = ColorTheme.secondary;
        break;
      case SidebarSize.quarter:
        colorTheme = ColorTheme.tertiary;
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
                  Sidebar content
                </Sidebar>
              );
            })}
          </div>
        );
      })}
    </PreviewContainer>
  );
};

const App = () => {
  const previewElements = [
    ButtonPreview,
    LinkPreview,
    SelectPreview,
    AvatarPreview,
    ModalPreview,
    ModalActionPreview,
    MenuPreview,
    SidebarPreview,
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
