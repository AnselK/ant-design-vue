import type { Key, VueNode } from '../../_util/type';
import type { TabPaneProps } from './TabPanelList/TabPane';

export type TabSizeMap = Map<Key, { width: number; height: number; left: number; top: number }>;

export interface TabOffset {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
}
export type TabOffsetMap = Map<Key, TabOffset>;

export type TabPosition = 'left' | 'right' | 'top' | 'bottom';

export interface Tab extends TabPaneProps {
  key: string;
  node: VueNode;
}

export type RenderTabBar = (props: any, DefaultTabBar: any) => VueNode;

export interface TabsLocale {
  dropdownAriaLabel?: string;
  removeAriaLabel?: string;
  addAriaLabel?: string;
}

export interface EditableConfig {
  onEdit: (
    type: 'add' | 'remove',
    info: { key?: string; event: MouseEvent | KeyboardEvent },
  ) => void;
  showAdd?: boolean;
  removeIcon?: () => VueNode;
  addIcon?: () => VueNode;
}

export interface AnimatedConfig {
  inkBar?: boolean;
  tabPane?: boolean;
}

export type OnTabScroll = (info: { direction: 'left' | 'right' | 'top' | 'bottom' }) => void;

export type TabBarExtraPosition = 'left' | 'right';

export type TabBarExtraMap = Partial<Record<TabBarExtraPosition, any>>;

export type TabBarExtraContent = VueNode;
