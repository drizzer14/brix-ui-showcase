export interface TabProps {
  children: string;
  isSelected: boolean;
  register(option: string): void;
  select(option: string): void;
}
