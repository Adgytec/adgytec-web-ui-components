import { Divider } from "../../components/Divider";
import {
    ComboBox,
    ComboBoxPopover,
    ComboBoxTrigger,
    Select,
    SelectItem,
    SelectList,
    SelectListSection,
    SelectListSectionHeader,
    SelectPopover,
    SelectTrigger,
} from "../../components/Input";

export const SelectPreview = () => {
    return (
        <div className="items">
            <Select
                label="Icecream"
                description="Flavors of icecream"
                placeholder="Select Icecream"
                isInvalid
                showDescriptionOnInvalid
            >
                <SelectTrigger />

                <SelectPopover>
                    <SelectList>
                        <SelectItem label="Strawberry" />

                        <SelectItem label="Mango" />

                        <Divider />

                        <SelectItem label="Chocalate" />

                        <SelectItem label="Cherry" />
                    </SelectList>
                </SelectPopover>
            </Select>

            <Select
                label="Icecream"
                description="Flavors of icecream"
                placeholder="Select Icecream"
                selectionMode="multiple"
            >
                <SelectTrigger />

                <SelectPopover>
                    <SelectList>
                        <SelectListSection>
                            <SelectListSectionHeader>
                                Specials 😋
                            </SelectListSectionHeader>

                            <SelectItem label="Strawberry" />

                            <SelectItem label="Mango" />
                        </SelectListSection>

                        <Divider />

                        <SelectItem label="Chocalate" />

                        <SelectItem label="Cherry" />
                    </SelectList>
                </SelectPopover>
            </Select>

            <Select
                label="Icecream"
                description="Flavors of icecream"
                placeholder="Select Icecream"
                selectionMode="multiple"
                isDisabled
            >
                <SelectTrigger />

                <SelectPopover>
                    <SelectList>
                        <SelectListSection>
                            <SelectListSectionHeader>
                                Specials 😋
                            </SelectListSectionHeader>

                            <SelectItem label="Strawberry" />

                            <SelectItem label="Mango" />
                        </SelectListSection>

                        <Divider />

                        <SelectItem label="Chocalate" />

                        <SelectItem label="Cherry" />
                    </SelectList>
                </SelectPopover>
            </Select>

            <ComboBox label="Icecream" description="Flavors of icecream">
                <ComboBoxTrigger placeholder="Select Icecream" />

                <ComboBoxPopover>
                    <SelectList>
                        <SelectListSection>
                            <SelectListSectionHeader>
                                Specials 😋
                            </SelectListSectionHeader>

                            <SelectItem label="Strawberry" />

                            <SelectItem label="Mango" />
                        </SelectListSection>

                        <SelectItem label="Chocalate" />

                        <SelectItem label="Cherry" />
                    </SelectList>
                </ComboBoxPopover>
            </ComboBox>

            <ComboBox
                label="Icecream"
                description="Flavors of icecream"
                selectionMode="multiple"
                isInvalid
                showDescriptionOnInvalid
            >
                <ComboBoxTrigger placeholder="Select Icecream" />

                <ComboBoxPopover>
                    <SelectList>
                        <SelectListSection>
                            <SelectListSectionHeader>
                                Specials 😋
                            </SelectListSectionHeader>

                            <SelectItem label="Strawberry" />

                            <SelectItem label="Mango" />
                        </SelectListSection>

                        <SelectItem label="Chocalate" />

                        <SelectItem label="Cherry" />
                    </SelectList>
                </ComboBoxPopover>
            </ComboBox>

            <ComboBox
                label="Icecream"
                description="Flavors of icecream"
                isDisabled
            >
                <ComboBoxTrigger placeholder="Select Icecream" />

                <ComboBoxPopover>
                    <SelectList>
                        <SelectListSection>
                            <SelectListSectionHeader>
                                Specials 😋
                            </SelectListSectionHeader>

                            <SelectItem label="Strawberry" />

                            <SelectItem label="Mango" />
                        </SelectListSection>

                        <SelectItem label="Chocalate" />

                        <SelectItem label="Cherry" />
                    </SelectList>
                </ComboBoxPopover>
            </ComboBox>
        </div>
    );
};

export default SelectPreview;
