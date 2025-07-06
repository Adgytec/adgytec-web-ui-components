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
    },
    {
      key: "cookies",
      displayValue: "Cookies 🍪",
    },
    {
      key: "biscuits",
      displayValue: "Biscuits",
    },
    {
      key: "pastries",
      displayValue: "Pastries 🍰",
    },
    {
      key: "ice-cream",
      displayValue: "Icecream 🍨",
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
                    options={options}
                    triggerTheme={theme}
                    triggerVariant={variant}
                    placeholder="Select your favorite dessert."
                  />

                  <Select
                    options={options}
                    triggerTheme={theme}
                    triggerVariant={variant}
                    placeholder="Select your favorite dessert."
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

const App = () => {
  const previewElements = [ButtonPreview, LinkPreview, SelectPreview];

  return (
    <div className="preview-parent">
      {previewElements.map((Element, ind) => {
        return <Element key={ind} />;
      })}
    </div>
  );
};

export default App;
