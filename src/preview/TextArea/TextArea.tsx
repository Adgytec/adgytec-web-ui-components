import { TextArea } from "../../components/Input";

export const RenderTextArea = ({
    isInvalid,
    isDisabled,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
}) => {
    return (
        <TextArea
            label="Issue"
            maxLength={1024}
            rows={4}
            description="Describe your issue"
            showCharacterCount
            isInvalid={isInvalid}
            showDescriptionOnInvalid={isInvalid}
            isDisabled={isDisabled}
            placeholder="Define you issue..."
        />
    );
};

export const TextAreaPreview = () => {
    return (
        <div className="items-grid">
            <RenderTextArea />

            <RenderTextArea isInvalid />

            <RenderTextArea isDisabled />

            <RenderTextArea isInvalid isDisabled />
        </div>
    );
};

export default TextAreaPreview;
