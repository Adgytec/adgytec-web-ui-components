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

                        <Shape name={name}>
                            <img
                                src="https://picsum.photos/100"
                                alt="sample"
                                width={100}
                                height={100}
                            />
                        </Shape>

                        <Shape name={name} rotate>
                            <img
                                src="https://picsum.photos/175"
                                alt="sample"
                                width={150}
                                height={150}
                            />
                        </Shape>

                        <Shape name={name} rotate rotateDuration={10}>
                            <img
                                src="https://picsum.photos/175"
                                alt="sample"
                                width={150}
                                height={150}
                            />
                        </Shape>

                        <Shape name={name}>
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
