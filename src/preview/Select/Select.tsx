import clsx from "clsx";
import type { Variant } from "@/components/Input/core";
import { typography } from "@/utils";
import { Divider } from "../../components/Divider";
import {
    ComboBox,
    ComboBoxPopover,
    ComboBoxTrigger,
    Select,
    SelectItem,
    SelectList,
    SelectPopover,
    SelectTrigger,
} from "../../components/Input";

export const RenderSelect = ({
    isInvalid,
    isDisabled,
    variant,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
    variant?: Variant;
}) => {
    return (
        <Select
            label="Icecream"
            description="Flavors of icecream"
            placeholder="Select Icecream"
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            showDescriptionOnInvalid={isInvalid}
        >
            <SelectTrigger variant={variant} />

            <SelectPopover>
                <SelectList>
                    <SelectItem label="Strawberry" />
                    <SelectItem label="Mango" />
                    <Divider />
                    <SelectItem label="Chocolate" />
                    <SelectItem label="Cherry" />
                </SelectList>
            </SelectPopover>
        </Select>
    );
};

export const RenderComboBox = ({
    isInvalid,
    isDisabled,
    variant,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
    variant?: Variant;
}) => {
    return (
        <ComboBox
            label="Icecream"
            description="Flavors of icecream"
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            showDescriptionOnInvalid={isInvalid}
        >
            <ComboBoxTrigger placeholder="Select Icecream" variant={variant} />

            <ComboBoxPopover>
                <SelectList>
                    <SelectItem label="Strawberry" />
                    <SelectItem label="Mango" />
                    <Divider />
                    <SelectItem label="Chocolate" />
                    <SelectItem label="Cherry" />
                </SelectList>
            </ComboBoxPopover>
        </ComboBox>
    );
};

export const SelectPreview = () => {
    return (
        <div className="items-grid">
            <h3 className={clsx(typography.titleLargeEmphasized)}>Select</h3>

            <div className="items">
                <RenderSelect />
                <RenderSelect variant="outlined" />
            </div>

            <div className="items">
                <RenderSelect isInvalid />
                <RenderSelect isInvalid variant="outlined" />
            </div>

            <div className="items">
                <RenderSelect isDisabled />
                <RenderSelect isDisabled variant="outlined" />
            </div>

            <div className="items">
                <RenderSelect isInvalid isDisabled />
                <RenderSelect isInvalid isDisabled variant="outlined" />
            </div>

            <h3 className={clsx(typography.titleLargeEmphasized)}>Combo Box</h3>

            <div className="items">
                <RenderComboBox />
                <RenderComboBox variant="outlined" />
            </div>

            <div className="items">
                <RenderComboBox isInvalid />
                <RenderComboBox isInvalid variant="outlined" />
            </div>

            <div className="items">
                <RenderComboBox isDisabled />
                <RenderComboBox isDisabled variant="outlined" />
            </div>

            <div className="items">
                <RenderComboBox isInvalid isDisabled />
                <RenderComboBox isInvalid isDisabled variant="outlined" />
            </div>
        </div>
    );
};

export default SelectPreview;
