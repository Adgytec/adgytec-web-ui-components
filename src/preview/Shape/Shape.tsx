import { clsx } from "clsx";
import { Heading } from "react-aria-components";
import { Shape, ShapeNames } from "@/components/Shape";
import { typography } from "@/utils";

export const ShapePreview = () => {
    return (
        <div className="items-grid">
            {ShapeNames.map((name) => (
                <div key={name} className="items-grid">
                    <Heading
                        className={clsx(typography.titleLarge)}
                        style={{
                            textAlign: "center",
                        }}
                    >
                        {name}
                    </Heading>

                    <div className="items shapes">
                        <Shape name={name}>
                            <div
                                style={{
                                    inlineSize: "56px",
                                    blockSize: "56px",
                                }}
                            />
                        </Shape>

                        <Shape name={name} data-image>
                            <img
                                src="https://picsum.photos/56"
                                alt="sample"
                                width={56}
                                height={56}
                            />
                        </Shape>

                        <Shape name={name}>
                            <div
                                style={{
                                    inlineSize: "200px",
                                    blockSize: "200px",
                                }}
                            />
                        </Shape>

                        <Shape name={name} data-image>
                            <img
                                src="https://picsum.photos/200"
                                alt="sample"
                                width={200}
                                height={200}
                            />
                        </Shape>
                    </div>
                </div>
            ))}
        </div>
    );
};
