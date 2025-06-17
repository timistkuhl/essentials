import * as SelectPrimitive from '@rn-primitives/select';
import * as React from 'react';
import { Platform, ScrollView, StyleSheet, View, LayoutChangeEvent } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Check } from '@/lib/icons/Check';
import { ChevronDown } from '@/lib/icons/ChevronDown';
import { ChevronUp } from '@/lib/icons/ChevronUp';
import { cn } from '@/lib/utils';

const SelectWidthContext = React.createContext<{
  triggerWidth: number;
  setTriggerWidth: (width: number) => void;
}>({
  triggerWidth: 0,
  setTriggerWidth: () => { },
});

type Option = SelectPrimitive.Option;

const Select = ({ children, ...props }: SelectPrimitive.RootProps) => {
  const [triggerWidth, setTriggerWidth] = React.useState(0);

  return (
    <SelectWidthContext.Provider value={{ triggerWidth, setTriggerWidth }}>
      <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>
    </SelectWidthContext.Provider>
  );
};

const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<SelectPrimitive.TriggerRef, SelectPrimitive.TriggerProps>(
  ({ className, children, onLayout, ...props }, ref) => {
    const { setTriggerWidth } = React.useContext(SelectWidthContext);

    const handleLayout = (e: LayoutChangeEvent) => {
      setTriggerWidth(e.nativeEvent.layout.width);
      onLayout && onLayout(e);
    };

    return (
      <SelectPrimitive.Trigger
        ref={ref}
        onLayout={handleLayout}
        className={cn(
          'flex flex-row h-10 native:h-12 items-center text-sm justify-between rounded-md border border-input bg-background px-3 py-2 web:ring-offset-background text-muted-foreground web:focus:outline-none web:focus:ring-2 web:focus:ring-ring web:focus:ring-offset-2 [&>span]:line-clamp-1',
          props.disabled && 'web:cursor-not-allowed opacity-50',
          className
        )}
        {...props}
      >
        <>{children}</>
        <ChevronDown size={16} aria-hidden={true} className='text-foreground opacity-50' />
      </SelectPrimitive.Trigger>
    );
  }
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = ({ className, ...props }: SelectPrimitive.ScrollUpButtonProps) => {
  if (Platform.OS !== 'web') return null;
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn('flex web:cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronUp size={14} className='text-foreground' />
    </SelectPrimitive.ScrollUpButton>
  );
};

const SelectScrollDownButton = ({ className, ...props }: SelectPrimitive.ScrollDownButtonProps) => {
  if (Platform.OS !== 'web') return null;
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn('flex web:cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronDown size={14} className='text-foreground' />
    </SelectPrimitive.ScrollDownButton>
  );
};

const SelectContent = React.forwardRef<
  SelectPrimitive.ContentRef,
  SelectPrimitive.ContentProps & { portalHost?: string }
>(({ className, children, position = 'popper', portalHost, style, ...props }, ref) => {
  const { triggerWidth } = React.useContext(SelectWidthContext);

  const content = Platform.OS !== 'web' ? (
    <View className={cn('h-[250px] overflow-hidden', className)} pointerEvents="box-none">
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 4 }}
        nestedScrollEnabled
        scrollEnabled
        showsVerticalScrollIndicator
      >
        {children}
      </ScrollView>
    </View>
  ) : (
    <>
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
          'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </>
  );

  return (
    <SelectPrimitive.Portal hostName={portalHost}>
      <SelectPrimitive.Overlay
        style={Platform.OS !== 'web' ? StyleSheet.absoluteFill : undefined}
        pointerEvents="box-none"
      >
        <View pointerEvents="box-none">
          <SelectPrimitive.Content
            ref={ref}
            style={StyleSheet.flatten([
              style,
              triggerWidth ? { width: triggerWidth } : {}
            ])}
            className={cn(
              'relative z-50 max-h-96 min-w-[8rem] rounded-md border border-border bg-popover shadow-md shadow-foreground/10 py-2 px-1',
              position === 'popper' &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
              className
            )}
            position={position}
            {...props}
          >
            {content}
          </SelectPrimitive.Content>
        </View>
      </SelectPrimitive.Overlay>
    </SelectPrimitive.Portal>
  );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<SelectPrimitive.LabelRef, SelectPrimitive.LabelProps>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Label
      ref={ref}
      className={cn(
        'py-1.5 native:pb-2 pl-8 native:pl-10 pr-2 text-popover-foreground text-sm native:text-base font-semibold',
        className
      )}
      {...props}
    />
  )
);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<SelectPrimitive.ItemRef, SelectPrimitive.ItemProps>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        'relative web:group flex flex-row w-full web:cursor-default web:select-none items-center rounded-sm py-1.5 native:py-2 pl-8 native:pl-10 pr-2 web:hover:bg-accent/50 active:bg-accent web:outline-none web:focus:bg-accent',
        props.disabled && 'web:pointer-events-none opacity-50',
        className
      )}
      {...props}
    >
      <View className='absolute left-2 native:left-3.5 flex h-3.5 native:pt-px w-3.5 items-center justify-center'>
        <SelectPrimitive.ItemIndicator>
          <Check size={16} strokeWidth={3} className='text-popover-foreground' />
        </SelectPrimitive.ItemIndicator>
      </View>
      <SelectPrimitive.ItemText className='text-sm native:text-lg text-popover-foreground native:text-base web:group-focus:text-accent-foreground' />
    </SelectPrimitive.Item>
  )
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  SelectPrimitive.SeparatorRef,
  SelectPrimitive.SeparatorProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  type Option,
};