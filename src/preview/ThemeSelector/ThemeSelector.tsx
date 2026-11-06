import clsx from "clsx";
import { Heading } from "react-aria-components";
import { ThemeSelector } from "../../components/ThemeSelector";
import { typography } from "../../utils";

export const ThemeSelectorPreview = () => {
    return (
        <div className="items-grid">
            <div className="items-grid">
                <Heading className={clsx(typography.titleLarge)}>
                    Default
                </Heading>

                <ThemeSelector />
            </div>

            <div className="items-grid">
                <Heading className={clsx(typography.titleLarge)}>
                    With Dividers
                </Heading>

                <ThemeSelector showDividers />
            </div>
        </div>
    );
};

export default ThemeSelectorPreview;
