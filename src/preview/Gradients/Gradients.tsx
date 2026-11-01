import clsx from "clsx";
import { gradientStyles } from "../../utils/gradients";
import { typography } from "../../utils/typography";

export const GradientRender = ({
    className,
    heading,
}: {
    heading: string;
    className: string;
}) => {
    return (
        <div
            className={className}
            style={{
                inlineSize: "min(80vi, 30rem)",
                blockSize: "30rem",
                borderRadius: "1rem",
                textAlign: "center",
                boxShadow: "var(--md-sys-elevation-shadow-2)",
                padding: "2rem",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid var(--md-sys-color-outline-variant)",
            }}
        >
            <h3 className={clsx(typography.titleMediumEmphasized)}>
                {heading}
            </h3>
        </div>
    );
};

export const GradientsPreview = () => {
    const gradients = Object.entries(gradientStyles);
    return (
        <div className="items">
            {gradients.map(([key, value]) => (
                <GradientRender key={key} className={value} heading={key} />
            ))}
        </div>
    );
};

export default GradientsPreview;
