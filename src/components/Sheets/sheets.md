# Sheets

## Configurable CSS Tokens

### Side Sheet
| Token | Default Value | Description |
|-------|---------------|-------------|
| `--md-side-sheet-background` | `var(--md-sys-color-surface-container-low)` | Background color of the side sheet. |
| `--md-side-sheet-color` | `var(--md-sys-color-on-surface)` | Text color of the side sheet. |
| `--md-side-sheet-headline-color` | `var(--md-sys-color-on-surface-variant)` | Color of the side sheet headline. |

### Bottom Sheet
| Token | Default Value | Description |
|-------|---------------|-------------|
| `--md-bottom-sheet-background` | `var(--md-sys-color-surface-container-low)` | Background color of the bottom sheet. |
| `--md-bottom-sheet-color` | `var(--md-sys-color-on-surface)` | Text color of the bottom sheet. |

Sheets are implementations of [Material 3 Side Sheets](https://m3.material.io/components/side-sheets/overview) and [Material 3 Bottom Sheets](https://m3.material.io/components/bottom-sheets/overview). They provide supplementary content and actions.

## Components

The Sheets system consists of:

- `SideSheet`: The content container for side sheets, including header and optional actions.
- `SideSheetDialog`: A low-level dialog container for side sheets, useful for custom layout structures.
- `SideSheetModal`: A modal container for a `SideSheet` or `SideSheetDialog`.
- `BottomSheet`: The content container for bottom sheets.
- `BottomSheetModal`: A modal container for a `BottomSheet`.
- `ModalOverlay`: The backdrop that appears behind the modal (shared with Dialog).

## Props

### `SideSheet`
| Prop | Type | Description |
|------|------|-------------|
| `headline` | `ReactNode` | Optional headline text/element. |
| `actions` | `ReactElement[] \| ((renderProps: DialogRenderProps) => ReactElement[])` | Optional action buttons. |

Extends [React Aria Components Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html).

### `SideSheetDialog`
Extends [React Aria Components Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html).

### `SideSheetModal`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `alignment` | `"start" \| "end"` | `"end"` | Side of the screen where the sheet appears. |
| `layout` | `"standard" \| "detached"` | `"standard"` | Layout style of the sheet. |

Extends [React Aria Components Modal](https://react-spectrum.adobe.com/react-aria/Modal.html).

### `BottomSheet`
Extends [React Aria Components Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html).

### `BottomSheetModal`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `layout` | `"standard" \| "detached"` | `"standard"` | Layout style of the sheet. |

Extends [React Aria Components Modal](https://react-spectrum.adobe.com/react-aria/Modal.html).

## Usage

### Side Sheet

```tsx
import { DialogTrigger } from 'react-aria-components';
import { 
  SideSheet, 
  SideSheetModal, 
  ModalOverlay, 
  Button 
} from '@adgytec/web-ui-components';

<DialogTrigger>
  <Button label="Open Side Sheet" />
  <ModalOverlay>
    <SideSheetModal alignment="end" layout="standard">
      <SideSheet 
        headline="Side Sheet Title"
        actions={[
          <Button key="save" label="Save" onPress={() => {}} />,
          <Button key="cancel" label="Cancel" variant="outline" onPress={() => {}} />
        ]}
      >
        <p>This is the side sheet content.</p>
      </SideSheet>
    </SideSheetModal>
  </ModalOverlay>
</DialogTrigger>
```

### Side Sheet with Custom Dialog

For cases where you need a custom layout (e.g. customized headers, scrollable areas, or footers), you can use `SideSheetDialog` directly instead of `SideSheet`.

```tsx
import { DialogTrigger, Heading, Header } from 'react-aria-components';
import { 
  SideSheetDialog, 
  SideSheetModal, 
  ModalOverlay, 
  Button,
  IconButton
} from '@adgytec/web-ui-components';
import { X } from 'lucide-react';

<DialogTrigger>
  <Button label="Open Custom Side Sheet" />
  <ModalOverlay>
    <SideSheetModal alignment="end" layout="standard">
      <SideSheetDialog>
        {({ close }) => (
          <>
            <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
              <Heading slot="title">Custom Title</Heading>
              <IconButton icon={X} onPress={close} aria-label="Close" />
            </Header>
            <div style={{ padding: '16px', flex: 1, overflowY: 'auto' }}>
              <p>Custom content goes here.</p>
            </div>
          </>
        )}
      </SideSheetDialog>
    </SideSheetModal>
  </ModalOverlay>
</DialogTrigger>
```

### Bottom Sheet

```tsx
import { DialogTrigger } from 'react-aria-components';
import { 
  BottomSheet, 
  BottomSheetModal, 
  ModalOverlay, 
  Button 
} from '@adgytec/web-ui-components';

<DialogTrigger>
  <Button label="Open Bottom Sheet" />
  <ModalOverlay>
    <BottomSheetModal layout="standard">
      <BottomSheet>
        <p>This is the bottom sheet content.</p>
      </BottomSheet>
    </BottomSheetModal>
  </ModalOverlay>
</DialogTrigger>
```

### Layouts

Both `SideSheet` and `BottomSheet` support two layouts:
- `standard`: The sheet is attached to the edges of the screen.
- `detached`: The sheet has margins and rounded corners on all sides, appearing floating.

Generated by Gemini
