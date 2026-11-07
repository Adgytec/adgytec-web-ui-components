# Side Sheet

## Configurable CSS Tokens

| Token                            | Default Value                               | Description                                   |
| -------------------------------- | ------------------------------------------- | --------------------------------------------- |
| `--md-side-sheet-background`     | `var(--md-sys-color-surface-container-low)` | Background color of the side sheet container. |
| `--md-side-sheet-color`          | `var(--md-sys-color-on-surface)`            | Text color of the side sheet container.       |
| `--md-side-sheet-headline-color` | `var(--md-sys-color-on-surface-variant)`    | Color of the side sheet headline title text.  |

The `SideSheet` component is an implementation of [Material 3 Side Sheets](https://m3.material.io/components/side-sheets/overview). Side sheets show supplementary content anchored to the left or right edge of the screen, such as detailed item properties, contextual filters, sub-navigation, or multi-step forms.

---

## Components

The Side Sheet module consists of:

1. **`SideSheet`**: High-level content container providing a structured layout with a top header (optional `headline` in `typography.titleLarge` and built-in close `IconButton`), scrollable content body, and optional bottom `actions` footer.
2. **`SideSheetDialog`**: Low-level dialog container extending React Aria `Dialog`. Directly consumes `SideSheetContext` for `alignment` and `layout`, making it ideal for fully customized side sheet layouts (e.g. search fields, tabs, or custom headers).
3. **`SideSheetModal`**: The modal container built on React Aria Components `Modal`. Manages slide-in and slide-out animations from either screen edge, sets positioning, and passes layout/alignment state down via `SideSheetContext`.

---

## Props

### `SideSheet`

Extends `SideSheetDialogProps` (which extends [React Aria Components Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html)).

| Prop        | Type                                                               | Default     | Description                                                                                                          |
| ----------- | ------------------------------------------------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| `headline`  | `ReactNode`                                                        | `undefined` | Optional headline text or element displayed in the side sheet header. Rendered using `typography.titleLarge`.        |
| `actions`   | `ReactNode[] \| ((renderProps: DialogRenderProps) => ReactNode[])` | `undefined` | Optional action buttons rendered in the bottom action bar. Receives dialog render props when provided as a function. |
| `children`  | `ReactNode \| ((renderProps: DialogRenderProps) => ReactNode)`     | `undefined` | Main content rendered within the scrollable content area.                                                            |
| `className` | `string`                                                           | `undefined` | Custom CSS class name applied to the side sheet element.                                                             |

### `SideSheetDialog`

Extends [React Aria Components Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html) (`React.ComponentPropsWithRef<typeof Dialog>`) and accepts all standard dialog props.

| Prop        | Type                                                           | Default     | Description                                     |
| ----------- | -------------------------------------------------------------- | ----------- | ----------------------------------------------- |
| `children`  | `ReactNode \| ((renderProps: DialogRenderProps) => ReactNode)` | `undefined` | Content rendered inside the dialog container.   |
| `className` | `string`                                                       | `undefined` | Custom CSS class name applied to the container. |

### `SideSheetModal`

Extends [React Aria Components Modal](https://react-spectrum.adobe.com/react-aria/Modal.html) (`React.ComponentPropsWithRef<typeof Modal>`).

| Prop        | Type                                                                                           | Default      | Description                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------ |
| `alignment` | `"start" \| "end"`                                                                             | `"end"`      | Viewport edge where the sheet appears (`"start"` for left edge in LTR, `"end"` for right edge in LTR). |
| `layout`    | `"standard" \| "detached"`                                                                     | `"standard"` | Visual layout style of the sheet container.                                                            |
| `className` | `string \| ((values: ModalRenderProps & { defaultClassName: string \| undefined }) => string)` | `undefined`  | CSS class name or render function for the modal element.                                               |

---

## Alignments and Layouts

### Alignment (`alignment`)

- **`"end"` (Default)**: Anchors to the inline-end edge of the screen (right side in LTR). Footer action buttons align to the inline-start edge.
- **`"start"`**: Anchors to the inline-start edge of the screen (left side in LTR). Footer action buttons align to the inline-end edge.

### Layout (`layout`)

- **`"standard"` (Default)**: Attached flush against the edge of the viewport spanning full viewport height (`100dvb`). Attachment corners have straight edges (`0` border-radius).
- **`"detached"`**: Floats inside the viewport with outer margins (`--md-sys-layout-space-16`) and rounded corners on all edges (`--md-sys-shape-corner-radius-large`).

---

## Motion and Accessibility

- **Slide Transitions**: Slides in horizontally from the configured edge (`translate: -100%` for start alignment, `translate: 100%` for end alignment) and slides back out when closed.
- **Reduced Motion**: Disables translate animations automatically under `@media (prefers-reduced-motion)`.
- **Keyboard Dismiss**: Pressing <kbd>Esc</kbd> automatically dismisses the sheet when wrapped in an accessible overlay (`ModalOverlay isDismissable`).
- **Built-in Close Button**: `SideSheet` includes a pre-configured header close `IconButton` (`X`) with `slot="close"`, enabling dismissal without writing boilerplate state handlers.

---

## Usage

### 1. Standard Side Sheet with Actions

```tsx
import { DialogTrigger } from "react-aria-components";
import {
    Button,
    ModalOverlay,
    SideSheet,
    SideSheetModal,
} from "@adgytec/web-ui-components";

export function SideSheetExample() {
    return (
        <DialogTrigger>
            <Button color="outlined">Open Side Sheet</Button>
            <ModalOverlay isDismissable>
                <SideSheetModal alignment="end" layout="standard">
                    <SideSheet
                        headline="Filter Products"
                        actions={[
                            <Button key="apply" color="filled">
                                Apply Filters
                            </Button>,
                            <Button key="cancel" color="text" slot="close">
                                Cancel
                            </Button>,
                        ]}
                    >
                        <p>Configure filter parameters and preferences here.</p>
                    </SideSheet>
                </SideSheetModal>
            </ModalOverlay>
        </DialogTrigger>
    );
}
```

### 2. Start-Aligned Detached Side Sheet

Anchor the sheet to the left edge with a floating appearance:

```tsx
import { DialogTrigger } from "react-aria-components";
import {
    Button,
    ModalOverlay,
    SideSheet,
    SideSheetModal,
} from "@adgytec/web-ui-components";

export function DetachedSideSheetExample() {
    return (
        <DialogTrigger>
            <Button color="tonal">Open Left Sheet</Button>
            <ModalOverlay isDismissable>
                <SideSheetModal alignment="start" layout="detached">
                    <SideSheet
                        headline="Navigation Menu"
                        actions={[
                            <Button key="close" color="text" slot="close">
                                Close
                            </Button>,
                        ]}
                    >
                        <nav>
                            <ul>
                                <li>Dashboard</li>
                                <li>Projects</li>
                                <li>Settings</li>
                            </ul>
                        </nav>
                    </SideSheet>
                </SideSheetModal>
            </ModalOverlay>
        </DialogTrigger>
    );
}
```

### 3. Custom Layout with `SideSheetDialog`

When you need complete layout freedom (e.g. customized headers, inline search bars, or tabs), use `SideSheetDialog` directly:

```tsx
import { DialogTrigger, Header, Heading } from "react-aria-components";
import {
    Button,
    IconButton,
    ModalOverlay,
    SideSheetDialog,
    SideSheetModal,
} from "@adgytec/web-ui-components";
import { X } from "lucide-react";

export function CustomSideSheetDialogExample() {
    return (
        <DialogTrigger>
            <Button color="outlined">Open Custom Layout</Button>
            <ModalOverlay isDismissable>
                <SideSheetModal alignment="end" layout="standard">
                    <SideSheetDialog>
                        {({ close }) => (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                }}
                            >
                                <Header
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "16px",
                                    }}
                                >
                                    <Heading slot="title">
                                        Workspace Details
                                    </Heading>
                                    <IconButton
                                        icon={X}
                                        onPress={close}
                                        aria-label="Close"
                                    />
                                </Header>
                                <div
                                    style={{
                                        flex: 1,
                                        padding: "16px",
                                        overflowY: "auto",
                                    }}
                                >
                                    <p>
                                        Fully customized content without default
                                        header or action constraints.
                                    </p>
                                </div>
                            </div>
                        )}
                    </SideSheetDialog>
                </SideSheetModal>
            </ModalOverlay>
        </DialogTrigger>
    );
}
```
