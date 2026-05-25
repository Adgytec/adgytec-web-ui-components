import type { ComponentRef, Ref } from "react";

export type RefProp<T extends React.ElementType> = {
    ref?: Ref<ComponentRef<T>>;
};
