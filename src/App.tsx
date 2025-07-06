import { Fragment, type ReactNode } from "react";
import { ColorTheme } from "./utils/types";
import FilledButton from "./components/Button/FilledButton";
import OutlinedButton from "./components/Button/OutlinedButton";
import TextButton from "./components/Button/TextButton";
import { ButtonVariant } from "./components/Button/types";
import Link from "./components/Link/Link";
import FilledButtonLink from "./components/Link/FilledButtonLink";
import OutlinedButtonLink from "./components/Link/OutlinedButtonLink";
import type { SelectOptions } from "./components/Select/types";
import Select from "./components/Select/Select";
import { AvatarSize, type AvatarProps } from "./components/Avatar/types";
import Avatar from "./components/Avatar/Avatar";

// preview container
const PreviewContainer = (props: { label: string; children: ReactNode }) => {
  return (
    <div className="preview-container">
      <h2>{props.label}</h2>

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
  ];

  const buttonElements = [
    {
      element: FilledButton,
      label: "Filled Button",
    },
    {
      element: OutlinedButton,
      label: "Outlined Button",
    },
    {
      element: TextButton,
      label: "Text Button",
    },
  ];

  const onPress = () => {};

  return (
    <PreviewContainer label="Buttons">
      {buttonTheme.map((theme) => {
        return (
          <div className="item-container" key={theme}>
            {buttonElements.map((ButtonElement, index) => {
              return (
                <Fragment key={theme + index}>
                  <ButtonElement.element onPress={onPress} theme={theme}>
                    {ButtonElement.label}
                  </ButtonElement.element>

                  <ButtonElement.element
                    onPress={onPress}
                    theme={theme}
                    disabled
                  >
                    {ButtonElement.label}
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
  ];

  const linkElements = [
    {
      element: Link,
      label: "Normal Link",
    },
    {
      element: FilledButtonLink,
      label: "Filled Button Link",
    },
    {
      element: OutlinedButtonLink,
      label: "Outlined Button Link",
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
                  <LinkElement.element href="/" theme={theme}>
                    {LinkElement.label}
                  </LinkElement.element>

                  <LinkElement.element href="/" theme={theme} disabled>
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
  const buttonTheme = [
    ColorTheme.primary,
    ColorTheme.primaryVariant,
    ColorTheme.secondary,
    ColorTheme.tertiary,
    ColorTheme.error,
  ];

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

  return (
    <PreviewContainer label="Select">
      {buttonTheme.map((theme) => {
        return (
          <div className="item-container">
            {buttonVariants.map((variant) => {
              return (
                <Fragment key={"select" + theme + variant}>
                  <Select
                    label="Desserts"
                    options={options}
                    colorTheme={theme}
                    triggerVariant={variant}
                    placeholder="Select your favorite dessert"
                  />

                  <Select
                    label="Desserts"
                    options={options}
                    colorTheme={theme}
                    triggerVariant={variant}
                    placeholder="Select your favorite dessert"
                    disabled
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

  const avatarSizes = [AvatarSize.small, AvatarSize.normal, AvatarSize.large];

  return (
    <PreviewContainer label="Avatar">
      {avatarSizes.map((size) => {
        return (
          <div className="item-container">
            <Fragment key={"avatar" + size}>
              <Avatar size={size} src={avatarSrc} label="dog-smile" />

              <Avatar size={size}>{avatarChildren}</Avatar>
            </Fragment>
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
