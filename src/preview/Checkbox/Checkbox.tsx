import { Checkbox, CheckboxGroup } from "../../components/Input";

export const CheckboxPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <Checkbox />

                <Checkbox isInvalid />

                <Checkbox isIndeterminate />

                <Checkbox isDisabled />

                <Checkbox isDisabled isSelected />
            </div>

            <CheckboxGroup
                label="lorem ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia laoreet arcu, sit amet auctor ligula ultricies tincidunt. "
            >
                <Checkbox value="one">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Checkbox>

                <Checkbox value="two">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                </Checkbox>

                <Checkbox value="three">
                    Lorem ipsum dolor sit amet, consectetur.
                </Checkbox>
            </CheckboxGroup>
        </div>
    );
};

export default CheckboxPreview;
