import { Armchair, Mail } from "lucide-react";
import { useState } from "react";
import type { Variant } from "@/components/Input/core";
import { Input, InputButton } from "../../components/Input";

export const RenderInput = ({
    isInvalid,
    isDisabled,
    variant,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
    variant?: Variant;
}) => {
    const [val, setVal] = useState("");
    return (
        <Input
            variant={variant}
            label="Email"
            type="text"
            description="Enter your Adgytec work email"
            placeholder="username"
            suffix={"@adgytec.in"}
            // editorDir="rtl"
            leadingIcon={Mail}
            trailing={
                <InputButton icon={Armchair} onPress={() => setVal("hello")} />
            }
            showCharacterCount
            value={val}
            onChange={setVal}
            maxLength={64}
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            showDescriptionOnInvalid={isInvalid}
        />
    );
};

export const InputPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <RenderInput />
                <RenderInput variant="outlined" />
            </div>

            <div className="items">
                <RenderInput isInvalid />
                <RenderInput isInvalid variant="outlined" />
            </div>

            <div className="items">
                <RenderInput isDisabled />
                <RenderInput isDisabled variant="outlined" />
            </div>

            <div className="items">
                <RenderInput isInvalid isDisabled />
                <RenderInput isInvalid isDisabled variant="outlined" />
            </div>
        </div>
    );
};

export default InputPreview;
