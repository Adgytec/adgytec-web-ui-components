import { Fragment, type ReactNode } from "react";
import FilledButton from "./components/Button/FilledButton";
import OutlinedButton from "./components/Button/OutlinedButton";
import TextButton from "./components/Button/TextButton";
import { ButtonTheme } from "./components/Button/types";
import { LinkTheme } from "./components/Link/types";
import Link from "./components/Link/Link";

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
    ButtonTheme.primary,
    ButtonTheme.primaryVariant,
    ButtonTheme.secondary,
    ButtonTheme.error,
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
    {
      label: "Primary link",
      theme: LinkTheme.primary,
    },
    {
      label: "Primary Variant link",
      theme: LinkTheme.primaryVariant,
    },
    {
      label: "Secondary link",
      theme: LinkTheme.secondary,
    },
  ];

  return (
    <PreviewContainer label="Links">
      <div className="item-container">
        {linkTheme.map((theme) => {
          return (
            <Fragment key={theme.label}>
              <Link href="/" theme={theme.theme}>
                {theme.label}
              </Link>

              <Link href="/" theme={theme.theme} disabled>
                {theme.label}
              </Link>
            </Fragment>
          );
        })}
      </div>
    </PreviewContainer>
  );
};

const App = () => {
  const previewElements = [ButtonPreview, LinkPreview];

  return (
    <div className="preview-parent">
      {previewElements.map((Element, ind) => {
        return <Element key={ind} />;
      })}
    </div>
  );
};

export default App;
