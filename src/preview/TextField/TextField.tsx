import { Armchair, Mail } from "lucide-react";
import { useState } from "react";
import {
    FieldButton,
    FieldIcon,
    type FieldVariant,
    TextField,
} from "../../components/Input";

export const RenderTextField = ({
    isInvalid,
    isDisabled,
    variant,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
    variant?: FieldVariant;
}) => {
    const [val, setVal] = useState("");
    return (
        <TextField
            variant={variant}
            label="Email"
            type="text"
            description="Enter your Adgytec work email"
            placeholder="username"
            suffix={"@adgytec.in"}
            // editorDir="rtl"
            leading={<FieldIcon icon={Mail} />}
            trailing={
                <FieldButton icon={Armchair} onPress={() => setVal("hello")} />
            }
            showCharacterCount
            value={val}
            onChange={setVal}
            maxLength={64}
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            errorMessage={isInvalid ? "Invalid message sample" : undefined}
        />
    );
};

export const TextFieldPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <RenderTextField />
                <RenderTextField variant="outlined" />
            </div>

            <div className="items">
                <RenderTextField isInvalid />
                <RenderTextField isInvalid variant="outlined" />
            </div>

            <div className="items">
                <RenderTextField isDisabled />
                <RenderTextField isDisabled variant="outlined" />
            </div>

            <div className="items">
                <RenderTextField isInvalid isDisabled />
                <RenderTextField isInvalid isDisabled variant="outlined" />
            </div>
        </div>
    );
};

export default TextFieldPreview;
