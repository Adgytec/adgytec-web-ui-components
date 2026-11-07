# Bottom Sheet

## Configurable CSS Tokens

| Token                          | Default Value                               | Description                                     |
| ------------------------------ | ------------------------------------------- | ----------------------------------------------- |
| `--md-bottom-sheet-background` | `var(--md-sys-color-surface-container-low)` | Background color of the bottom sheet container. |
| `--md-bottom-sheet-color`      | `var(--md-sys-color-on-surface)`            | Text and foreground color of the bottom sheet.  |

The `BottomSheet` component is an implementation of [Material 3 Bottom Sheets](https://m3.material.io/components/bottom-sheets/overview). Bottom sheets display supplementary content anchored to the bottom of the screen, providing users with contextual options, actions, or details without navigating away from the current view.

---

## Components

The Bottom Sheet module consists of:

1. **`BottomSheet`**: The content container rendering inside a React Aria `Dialog` within `DialogContext`. Anchors to the bottom of the viewport with a responsive maximum inline width (`640px`) and scrollable content area. Consumes `BottomSheetContext` to adapt styling for standard or detached layouts.
2. **`BottomSheetModal`**: The modal container built on React Aria Components `Modal`. Manages slide-up entry and exit animations, viewport constraints, and provides layout configuration to child sheet components via `BottomSheetContext`.

---

## Props

### `BottomSheet`

Extends the [React Aria Components Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html) component (`React.ComponentPropsWithRef<typeof Dialog>`) and accepts all of its props, including `children`, `className`, `aria-label`, and render prop functions.

| Prop        | Type                                                      | Default     | Description                                                                                                    |
| ----------- | --------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| `children`  | `ReactNode \| ((values: DialogRenderProps) => ReactNode)` | `undefined` | The content rendered inside the bottom sheet. Accepts a render function receiving dialog props (e.g. `close`). |
| `className` | `string`                                                  | `undefined` | Custom CSS class name applied to the bottom sheet dialog element.                                              |

### `BottomSheetModal`

Extends the [React Aria Components Modal](https://react-spectrum.adobe.com/react-aria/Modal.html) component (`React.ComponentPropsWithRef<typeof Modal>`) and accepts all of its props.

| Prop        | Type                                                                                           | Default      | Description                                              |
| ----------- | ---------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------- |
| `layout`    | `"standard" \| "detached"`                                                                     | `"standard"` | Visual layout style of the sheet container.              |
| `className` | `string \| ((values: ModalRenderProps & { defaultClassName: string \| undefined }) => string)` | `undefined`  | CSS class name or render function for the modal element. |

---

## Layouts

Material 3 bottom sheets support two visual layout variants configured via the `layout` prop:

| Layout     | Description                                                                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `standard` | **Default**. The sheet is attached flush against the bottom edge of the viewport. Bottom corners have zero border-radius (`border-end-start-radius: 0`, `border-end-end-radius: 0`). |
| `detached` | The sheet floats above the bottom edge separated by an outer margin (`--md-sys-layout-space-16`). Features rounded corners on all edges (`--md-sys-shape-corner-radius-large`).      |

---

## Motion and Accessibility

- **Slide Transitions**: Slides up smoothly from the bottom on entry (`translate: -50% 100%` to `translate: -50% 0`) and slides down on exit.
- **Motion Durations**: Uses fast effects easing for standard layouts and fast spatial curves for detached layouts.
- **Reduced Motion**: Respects `@media (prefers-reduced-motion)` by disabling translate transitions.
- **Keyboard Navigation**: Pressing <kbd>Esc</kbd> dismisses the sheet when wrapped in an accessible overlay (`ModalOverlay isDismissable`).
- **Focus Management**: Focus is trapped inside the bottom sheet dialog while open and automatically returned to the triggering element upon closure.

---

## Usage

### 1. Standard Bottom Sheet

The standard bottom sheet attaches directly to the bottom of the viewport:

```tsx
import { DialogTrigger } from "react-aria-components";
import {
    BottomSheet,
    BottomSheetModal,
    Button,
    ModalOverlay,
} from "@adgytec/web-ui-components";

export function BottomSheetExample() {
    return (
        <DialogTrigger>
            <Button color="outlined">Open Standard Sheet</Button>
            <ModalOverlay isDismissable>
                <BottomSheetModal layout="standard">
                    <BottomSheet>
                        <h3>Bottom Sheet Title</h3>
                        <p>
                            This is the content of the bottom sheet. You can
                            place forms, navigation links, or supplementary
                            information here.
                        </p>
                    </BottomSheet>
                </BottomSheetModal>
            </ModalOverlay>
        </DialogTrigger>
    );
}
```

### 2. Detached Bottom Sheet with Actions

Use `layout="detached"` for a floating card appearance with action buttons:

```tsx
import { DialogTrigger } from "react-aria-components";
import {
    BottomSheet,
    BottomSheetModal,
    Button,
    ModalOverlay,
} from "@adgytec/web-ui-components";

export function DetachedBottomSheetExample() {
    return (
        <DialogTrigger>
            <Button color="filled">Open Detached Sheet</Button>
            <ModalOverlay isDismissable>
                <BottomSheetModal layout="detached">
                    <BottomSheet>
                        <h3>Quick Action</h3>
                        <p>
                            Perform quick actions or review details in a
                            floating sheet container.
                        </p>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "end",
                                gap: "12px",
                                marginTop: "16px",
                            }}
                        >
                            <Button color="text" slot="close">
                                Cancel
                            </Button>
                            <Button color="filled">Confirm</Button>
                        </div>
                    </BottomSheet>
                </BottomSheetModal>
            </ModalOverlay>
        </DialogTrigger>
    );
}
```

### 3. Using Render Props for Programmatic Close

You can use the render props pattern to access the `close` function inside sheet content:

```tsx
import { DialogTrigger } from "react-aria-components";
import {
    BottomSheet,
    BottomSheetModal,
    Button,
    ModalOverlay,
} from "@adgytec/web-ui-components";

export function RenderPropExample() {
    return (
        <DialogTrigger>
            <Button>Open Options</Button>
            <ModalOverlay isDismissable>
                <BottomSheetModal>
                    <BottomSheet>
                        {({ close }) => (
                            <div>
                                <h3>Select an Option</h3>
                                <ul>
                                    <li onClick={close}>Option 1</li>
                                    <li onClick={close}>Option 2</li>
                                </ul>
                                <Button color="text" onPress={close}>
                                    Dismiss
                                </Button>
                            </div>
                        )}
                    </BottomSheet>
                </BottomSheetModal>
            </ModalOverlay>
        </DialogTrigger>
    );
}
```
