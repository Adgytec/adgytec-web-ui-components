import { Grip } from "lucide-react";
import {
    DropIndicator,
    GridList,
    Heading,
    Text,
    useDragAndDrop,
} from "react-aria-components";
import { useListData } from "react-aria-components/useListData";
import { IconButton } from "../../components/Button";
import {
    Card,
    type CardVariant,
    PaddingBetweenCards,
} from "../../components/Card";
import { useSnackbarQueue } from "../../components/Snackbar";
import { typography } from "../../utils/typography";

export const CardPreview = () => {
    const queue = useSnackbarQueue();

    const variants: CardVariant[] = ["elevated", "filled", "outlined"];
    const items: {
        variant: CardVariant;
        isDisabled?: boolean;
        id: string;
    }[] = variants.flatMap((variant) => [
        { variant, id: `one-${variant}-active` },
        {
            variant,
            isDisabled: true,
            id: `two-${variant}-disabled`,
        },
        { variant, id: `three-${variant}-active` },
    ]);

    const list = useListData({
        initialItems: items,
    });
    const { dragAndDropHooks } = useDragAndDrop({
        getItems: (_, items: typeof list.items) =>
            items.map((item) => ({
                "text/plain": item.id,
            })),
        onReorder(e) {
            console.log(e);
            if (e.target.dropPosition === "before") {
                list.moveBefore(e.target.key, e.keys);
            } else if (e.target.dropPosition === "after") {
                list.moveAfter(e.target.key, e.keys);
            }
        },
        renderDropIndicator: (target) => {
            return <DropIndicator className="card-preview" target={target} />;
        },
    });

    return (
        <GridList
            className="cards"
            layout="grid"
            style={{
                gap: `calc(${PaddingBetweenCards} * var(--dp, 1px))`,
            }}
            items={list.items}
            dragAndDropHooks={dragAndDropHooks}
            onAction={(key) => {
                const item = list.getItem(key);
                if (!item) return;

                queue.add(
                    {
                        supportingText: item.id,
                    },
                    { timeout: 1000 }
                );
            }}
        >
            {(item) => (
                <Card
                    className="card"
                    variant={item.variant}
                    isDisabled={item.isDisabled}
                    textValue={item.id}
                >
                    {({ allowsDragging }) => {
                        return (
                            <>
                                <img
                                    src={`https://picsum.photos/seed/${item.id}/400/250`}
                                    alt="random"
                                    width={400}
                                    height={250}
                                />

                                <div className="card-content">
                                    <Heading
                                        className={
                                            typography.titleMediumEmphasized
                                        }
                                    >
                                        {item.id}
                                    </Heading>

                                    <Text className={typography.bodyMedium}>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Vivamus non vehicula
                                        arcu, sed suscipit magna. Donec et
                                        mauris nisl. Sed a dui eget enim
                                        facilisis volutpat.
                                    </Text>

                                    {allowsDragging && (
                                        <div className="card-drag">
                                            <IconButton
                                                slot="drag"
                                                icon={Grip}
                                                color="standard"
                                            />
                                        </div>
                                    )}
                                </div>
                            </>
                        );
                    }}
                </Card>
            )}
        </GridList>
    );
};

export default CardPreview;
