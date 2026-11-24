import clsx from "clsx";
import { typography } from "@/utils";
import { Divider } from "../../components/Divider";
import {
    ComboBox,
    ComboBoxTrigger,
    type InputVariant,
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
    variant?: InputVariant;
}) => {
    return (
        <Select
            label="Icecream"
            description="Flavors of icecream"
            placeholder="Select Icecream"
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            selectionMode="multiple"
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
    multiple = false,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
    variant?: InputVariant;
    multiple?: boolean;
}) => {
    return (
        <ComboBox
            label="Icecream"
            description="Flavors of icecream"
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            selectionMode={multiple ? "multiple" : "single"}
        >
            <ComboBoxTrigger placeholder="Select Icecream" variant={variant} />

            <SelectPopover>
                <SelectList>
                    <SelectItem label="Strawberry" />
                    <SelectItem label="Mango" />
                    <Divider />
                    <SelectItem label="Chocolate" />
                    <SelectItem label="Cherry" />
                </SelectList>
            </SelectPopover>
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
                <RenderComboBox multiple />
                <RenderComboBox variant="outlined" />
            </div>

            <div className="items">
                <RenderComboBox isInvalid />
                <RenderComboBox isInvalid variant="outlined" multiple />
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
