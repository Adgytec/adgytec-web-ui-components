import FilledButton from "./components/Button/FilledButton";
import OutlinedButton from "./components/Button/OutlinedButton";
import TextButton from "./components/Button/TextButton";
import { ButtonTheme } from "./components/button/types";

const App = () => {
  const buttonTheme = [
    ButtonTheme.primary,
    ButtonTheme.primaryVariant,
    ButtonTheme.secondary,
    ButtonTheme.error,
  ];

  const onPress = () => {};

  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
      }}
    >
      {buttonTheme.map((theme) => {
        return (
          <div
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            key={theme}
          >
            <FilledButton onPress={onPress} disabled={false} theme={theme}>
              really really really long long long long button button
            </FilledButton>

            <FilledButton onPress={onPress} disabled={true} theme={theme}>
              Filled Button
            </FilledButton>

            <OutlinedButton onPress={onPress} disabled={false} theme={theme}>
              Outlined Button
            </OutlinedButton>

            <OutlinedButton onPress={onPress} disabled={true} theme={theme}>
              Outlined Button
            </OutlinedButton>

            <TextButton onPress={onPress} disabled={false} theme={theme}>
              Text Button
            </TextButton>

            <TextButton onPress={onPress} disabled={true} theme={theme}>
              Text Button
            </TextButton>
          </div>
        );
      })}
    </div>
  );
};

export default App;
