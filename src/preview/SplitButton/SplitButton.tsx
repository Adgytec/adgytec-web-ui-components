import { Download, Eye, GlobeLock, Share2 } from "lucide-react";
import { SubmenuTrigger } from "react-aria-components";
import {
    type ButtonSize,
    SplitButton,
    type SplitButtonColor,
    SplitButtonPrimary,
    SplitButtonTrigger,
} from "../../components/Button";
import { Divider } from "../../components/Divider";
import {
    Menu,
    MenuItem,
    MenuSection,
    MenuSectionHeader,
    MenuTrigger,
    SubmenuPopover,
} from "../../components/Menu";
import { Popover } from "../../components/Popover";
import { typography } from "../../utils/typography";

export const RenderSplitButton = ({
    size,
    color,
    isDisabled,
    isPending,
    label = true,
}: {
    size: ButtonSize;
    color: SplitButtonColor;
    isPending?: boolean;
    isDisabled?: boolean;
    label?: boolean;
}) => {
    return (
        <SplitButton
            color={color}
            size={size}
            isDisabled={isDisabled}
            isPending={isPending}
        >
            <SplitButtonPrimary tooltip="download" icon={Download}>
                {label && "Download"}
            </SplitButtonPrimary>

            <MenuTrigger
                color={!label ? "standard" : "vibrant"}
                layout={!label ? "standard" : "grouped"}
            >
                <SplitButtonTrigger tooltip="more actions" />
                <Popover>
                    <Menu>
                        <MenuSection>
                            <MenuSectionHeader>Quick Actions</MenuSectionHeader>

                            <MenuItem trailingIcon={Eye} label="Preview" />

                            <MenuItem trailingIcon={Share2} label="Share" />
                        </MenuSection>

                        {!label && <Divider />}

                        <MenuSection>
                            <MenuSectionHeader>Security</MenuSectionHeader>

                            <MenuItem
                                trailingIcon={GlobeLock}
                                supportingText="Make item private"
                                label="Private"
                            />

                            <SubmenuTrigger>
                                <MenuItem
                                    trailingIcon={GlobeLock}
                                    supportingText="Make item private"
                                    label="More"
                                />

                                <SubmenuPopover>
                                    <Menu>
                                        <MenuSection>
                                            <MenuItem label="Lock" />

                                            <MenuItem label="Archive" />
                                        </MenuSection>
                                    </Menu>
                                </SubmenuPopover>
                            </SubmenuTrigger>
                        </MenuSection>
                    </Menu>
                </Popover>
            </MenuTrigger>
        </SplitButton>
    );
};

export const SplitButtonPreview = () => {
    const sizes: ButtonSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];

    const colors: SplitButtonColor[] = [
        "filled",
        "tonal",
        "outlined",
        "elevated",
    ];

    return (
        <>
            {colors.map((color) => (
                <div className="button-color" key={`button-${color}`}>
                    <h3 className={typography.headlineMediumEmphasized}>
                        {color}
                    </h3>

                    {sizes.map((size) => (
                        <div className="button-size" key={size}>
                            <h4 className={typography.headlineSmall}>{size}</h4>

                            <div className="items">
                                <RenderSplitButton size={size} color={color} />

                                <RenderSplitButton
                                    size={size}
                                    color={color}
                                    isPending
                                />

                                <RenderSplitButton
                                    size={size}
                                    color={color}
                                    isDisabled
                                />

                                <RenderSplitButton
                                    size={size}
                                    color={color}
                                    label={false}
                                />

                                <RenderSplitButton
                                    size={size}
                                    color={color}
                                    label={false}
                                    isPending
                                />

                                <RenderSplitButton
                                    size={size}
                                    color={color}
                                    label={false}
                                    isDisabled
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default SplitButtonPreview;
