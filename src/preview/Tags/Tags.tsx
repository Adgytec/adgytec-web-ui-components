import { Gamepad, Newspaper, PlaneTakeoff, ShoppingCart } from "lucide-react";
import { TagGroup, TagList } from "react-aria-components";
import { useListData } from "react-aria-components/useListData";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";

export const TagsPreview = () => {
    const items = [
        { id: 1, label: "News", icon: Newspaper },
        { id: 2, label: "Travel", icon: PlaneTakeoff },
        { id: 3, label: "Gaming", icon: Gamepad },
        { id: 4, label: "Shopping", icon: ShoppingCart },
    ];

    const itemKeys = items.map((item) => item.id);

    const list1 = useListData({
        initialItems: items,
    });

    const list2 = useListData({
        initialItems: items,
    });

    return (
        <div
            className="items-grid"
            style={{
                justifyItems: "center",
            }}
        >
            <Button
                color="tonal"
                onPress={() => {
                    list1.remove(...itemKeys);
                    list2.remove(...itemKeys);

                    list1.append(...items);
                    list2.append(...items);
                }}
            >
                reset lists
            </Button>

            <TagGroup
                aria-label="Demo"
                selectionMode="multiple"
                disabledKeys={["Travel"]}
                shouldSelectOnPressUp
            >
                <TagList items={items} className="tag-list">
                    {(item) => (
                        <Tag
                            id={item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    )}
                </TagList>
            </TagGroup>

            <TagGroup onAction={(key) => alert(key)} aria-label="Demo">
                <TagList items={items} className="tag-list">
                    {(item) => (
                        <Tag
                            id={item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    )}
                </TagList>
            </TagGroup>

            <TagGroup
                onRemove={(keys) => list1.remove(...keys)}
                aria-label="Demo"
            >
                <TagList
                    className="tag-list"
                    items={list1.items}
                    renderEmptyState={() => <div>No categories</div>}
                >
                    {(item) => <Tag label={item.label} icon={item.icon} />}
                </TagList>
            </TagGroup>

            <TagGroup
                aria-label="Demo"
                selectionMode="multiple"
                onRemove={(keys) => list2.remove(...keys)}
            >
                <TagList
                    className="tag-list"
                    items={list2.items}
                    renderEmptyState={() => <div>No categories</div>}
                >
                    {(item) => <Tag label={item.label} icon={item.icon} />}
                </TagList>
            </TagGroup>

            <TagGroup aria-label="Demo">
                <TagList className="tag-list">
                    <Tag
                        label="avatar"
                        avatar={
                            <img
                                src="https://picsum.photos/seed/avatar/24"
                                alt="random"
                            />
                        }
                    />

                    <Tag
                        label="avatar overflow"
                        avatar={<div className="avatar">RRRRRRRRRRRR</div>}
                    />
                </TagList>
            </TagGroup>

            <TagGroup disabledKeys={["avatar", "avatar-2"]} aria-label="Demo">
                <TagList className="tag-list">
                    <Tag
                        id="avatar"
                        label="avatar"
                        avatar={
                            <img
                                src="https://picsum.photos/seed/disabled/24"
                                alt="random"
                            />
                        }
                    />

                    <Tag
                        id="avatar-2"
                        label="avatar"
                        avatar={
                            <img
                                src="https://picsum.photos/seed/disabled-2/24"
                                alt="random"
                            />
                        }
                    />
                </TagList>
            </TagGroup>
        </div>
    );
};

export default TagsPreview;
