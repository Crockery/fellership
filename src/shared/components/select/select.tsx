import { Select as SelectBase } from "@base-ui/react/select";
import { Toolbar } from "@base-ui/react/toolbar";
import cx from "classnames";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import { useMemo } from "react";
import type { ButtonColors } from "../shared/types";
import {
	popup_variants,
	select_icon,
	select_item,
	select_item_indicator,
	select_item_text,
	select_list,
	select_positioner,
	select_trigger_variants,
} from "./select.css";

export interface SelectOption<T extends string | number> {
	label: string;
	value: T;
}

interface SelectProps<T extends string | number> {
	options: SelectOption<T>[];
	color: ButtonColors;
	in_toolbar?: boolean;
	align_with_trigger?: boolean;
	defaultValue?: T;
	value?: T;
	onValueChange?: (
		value: T | null,
		eventDetails: SelectBase.Root.ChangeEventDetails,
	) => void;
	triggerClassName?: string;
}

export const Select = <T extends string | number>({
	options,
	in_toolbar,
	color,
	triggerClassName,
	defaultValue,
	value,
	onValueChange,
	align_with_trigger,
}: SelectProps<T>) => {
	const trigger_inner = useMemo(
		() => (
			<>
				<SelectBase.Value />
				<SelectBase.Icon className={select_icon}>
					<ChevronsUpDown size={16} />
				</SelectBase.Icon>
			</>
		),
		[],
	);

	return (
		<SelectBase.Root
			value={value}
			onValueChange={onValueChange}
			modal={false}
			defaultValue={defaultValue}
			items={options}
		>
			{in_toolbar ? (
				<Toolbar.Button
					render={
						<SelectBase.Trigger
							className={cx(select_trigger_variants[color], triggerClassName)}
						/>
					}
				>
					{trigger_inner}
				</Toolbar.Button>
			) : (
				<SelectBase.Trigger
					className={cx(select_trigger_variants[color], triggerClassName)}
				>
					{trigger_inner}
				</SelectBase.Trigger>
			)}
			<SelectBase.Portal>
				<SelectBase.Positioner
					alignItemWithTrigger={!!align_with_trigger}
					className={select_positioner}
					sideOffset={8}
				>
					<SelectBase.Popup className={popup_variants[color]}>
						{/* <SelectBase.ScrollUpArrow /> */}
						<SelectBase.List className={select_list}>
							{options.map(({ label, value }) => (
								<SelectBase.Item
									key={label}
									value={value}
									className={select_item}
								>
									<SelectBase.ItemIndicator className={select_item_indicator}>
										<CheckIcon size={12} />
									</SelectBase.ItemIndicator>
									<SelectBase.ItemText className={select_item_text}>
										{label}
									</SelectBase.ItemText>
								</SelectBase.Item>
							))}
						</SelectBase.List>
						{/* <SelectBase.ScrollDownArrow /> */}
					</SelectBase.Popup>
				</SelectBase.Positioner>
			</SelectBase.Portal>
		</SelectBase.Root>
	);
};
