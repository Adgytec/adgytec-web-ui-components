# Date Picker

## Configurable CSS Tokens

| Token                              | Default Value                                   | Description                                           |
| ---------------------------------- | ----------------------------------------------- | ----------------------------------------------------- |
| `--md-field-color`                 | `var(--md-sys-color-on-surface)`                | Primary text and segment color within the field.      |
| `--md-field-infix-color`           | `var(--md-sys-color-on-surface-variant)`        | Color of icons, buttons, and placeholder segments.    |
| `--md-field-background-color`      | `var(--md-sys-color-surface-container-highest)` | Background color for the filled variant.              |
| `--md-field-focused-outline-color` | `var(--md-sys-color-primary)`                   | Color of the outline when focused.                    |
| `--md-field-group-color`           | `var(--md-sys-color-on-surface-variant)`        | Color of supporting text (label, description, error). |

The `DatePicker` and `DateRangePicker` components combine keyboard date inputs with calendar popover dialogs, allowing users to select single dates or date ranges either via keyboard typing or visual calendar picking.

## Components

- `DatePicker`: Combines a date input with a popover for selecting a single date.
- `DateRangePicker`: Combines start and end date inputs with a popover for selecting date ranges.
- `DatePickerPopover`: Popover container component optimized for displaying calendars inside date pickers.

## Props

### DatePicker Props

Extends [React Aria Components DatePicker](https://react-spectrum.adobe.com/react-aria/DatePicker.html).

| Prop           | Type                                                | Default    | Description                                                 |
| -------------- | --------------------------------------------------- | ---------- | ----------------------------------------------------------- |
| `label`        | `ReactNode`                                         | —          | The accessible label displayed above the input.             |
| `description`  | `ReactNode`                                         | —          | Informative supporting text displayed below the input.      |
| `errorMessage` | `ReactNode \| ((v: ValidationResult) => ReactNode)` | —          | Error message displayed when validation fails.              |
| `variant`      | `"filled" \| "outlined"`                            | `"filled"` | Visual styling variant of the input container.              |
| `trailing`     | `ReactNode`                                         | —          | Custom trailing trigger button (defaults to calendar icon). |
| `dateInputRef` | `Ref<HTMLDivElement>`                               | —          | Ref passed directly to the `DateInput` container.           |

### DateRangePicker Props

Extends [React Aria Components DateRangePicker](https://react-spectrum.adobe.com/react-aria/DateRangePicker.html).

| Prop           | Type                                                | Default    | Description                                                  |
| -------------- | --------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| `label`        | `ReactNode`                                         | —          | The accessible label displayed above the range input.        |
| `description`  | `ReactNode`                                         | —          | Informative supporting text displayed below the range input. |
| `errorMessage` | `ReactNode \| ((v: ValidationResult) => ReactNode)` | —          | Error message displayed when validation fails.               |
| `variant`      | `"filled" \| "outlined"`                            | `"filled"` | Visual styling variant of the input container.               |
| `trailing`     | `ReactNode`                                         | —          | Custom trailing trigger button (defaults to calendar icon).  |
| `dateInputRef` | `Ref<HTMLDivElement>`                               | —          | Ref passed directly to the `DateInput` containers.           |

## Usage

### Single Date Picker

```tsx
import { DatePicker, DatePickerPopover } from "@adgytec/web-ui-components";
import { Calendar } from "@/components/Calendar";

// Filled variant (default)
<DatePicker label="Event Date" description="Select the date of your event">
    <DatePickerPopover>
        <Calendar />
    </DatePickerPopover>
</DatePicker>;

// Outlined variant
<DatePicker
    variant="outlined"
    label="Event Date"
    description="Select the date of your event"
>
    <DatePickerPopover>
        <Calendar />
    </DatePickerPopover>
</DatePicker>;
```

### Date Range Picker

```tsx
import { DateRangePicker, DatePickerPopover } from "@adgytec/web-ui-components";
import { RangeCalendar } from "@/components/Calendar";

<DateRangePicker
    label="Reservation Dates"
    description="Select check-in and check-out dates"
>
    <DatePickerPopover>
        <RangeCalendar />
    </DatePickerPopover>
</DateRangePicker>;
```

## Internal Structure

`DatePicker` and `DateRangePicker` integrate:
- `FieldGroup`: Coordinates label, error, and description layout.
- `Field`: Renders container styling and trailing calendar trigger button.
- `DateInput` & `DateSegment`: Keyboard navigation and date segment rendering.
- `DatePickerPopover`: Popover container for calendar dialogs.


Generated by Gemini
