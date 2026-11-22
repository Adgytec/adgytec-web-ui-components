import { useState } from "react";
import type { Variant } from "@/components/Input/core";
import { TextArea } from "../../components/Input";

export const RenderTextArea = ({
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
        <TextArea
            variant={variant}
            label="Issue"
            maxLength={1024}
            rows={4}
            description="Describe your issue"
            showCharacterCount
            value={val}
            onChange={setVal}
            isInvalid={isInvalid}
            showDescriptionOnInvalid={isInvalid}
            isDisabled={isDisabled}
            placeholder="Define your issue..."
        />
    );
};

export const TextAreaPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <RenderTextArea />
                <RenderTextArea variant="outlined" />
            </div>

            <div className="items">
                <RenderTextArea isInvalid />
                <RenderTextArea isInvalid variant="outlined" />
            </div>

            <div className="items">
                <RenderTextArea isDisabled />
                <RenderTextArea isDisabled variant="outlined" />
            </div>

            <div className="items">
                <RenderTextArea isInvalid isDisabled />
                <RenderTextArea isInvalid isDisabled variant="outlined" />
            </div>
        </div>
    );
};

export default TextAreaPreview;
