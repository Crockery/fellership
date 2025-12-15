import { Select as SelectBase } from "@base-ui/react/select";
import { memo, type ReactNode } from "react";

export interface SelectOption {
	label: string;
	value: string;
}

interface SelectProps {
	options: SelectOption[];
	trigger?: ReactNode;
}

export const Select = memo<SelectProps>(({ options }) => {
	return (
		<SelectBase.Root items={options}>
			<SelectBase.Trigger>
				<SelectBase.Value />
				<SelectBase.Icon>{/* <ChevronUpDownIcon /> */}</SelectBase.Icon>
			</SelectBase.Trigger>
			<SelectBase.Portal>
				<SelectBase.Positioner sideOffset={8}>
					<SelectBase.Popup>
						<SelectBase.ScrollUpArrow />
						<SelectBase.List>
							{options.map(({ label, value }) => (
								<SelectBase.Item
									key={label}
									value={value}
									// className={styles.Item}
								>
									<SelectBase.ItemIndicator>
										{/* <CheckIcon className={styles.ItemIndicatorIcon} /> */}
									</SelectBase.ItemIndicator>
									<SelectBase.ItemText>{label}</SelectBase.ItemText>
								</SelectBase.Item>
							))}
						</SelectBase.List>
						<SelectBase.ScrollDownArrow />
					</SelectBase.Popup>
				</SelectBase.Positioner>
			</SelectBase.Portal>
		</SelectBase.Root>
	);
});
