import { Armchair, Mail } from "lucide-react";
import { useState } from "react";
import { Input, InputButton } from "../../components/Input";

export const RenderInput = ({
    isInvalid,
    isDisabled,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
}) => {
    const [val, setVal] = useState("");
    return (
        <Input
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
        <div className="items">
            <RenderInput />

            <RenderInput isInvalid />

            <RenderInput isDisabled />

            <RenderInput isInvalid isDisabled />
        </div>
    );
};

export default InputPreview;
