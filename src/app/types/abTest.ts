export type Variant = {
  id: string;
  name: string;
  component: React.ReactNode;
};

export type ABTest = {
  id: string;
  name: string;
  description: string;
  hypothesis: string;
  methodology: string;
  results: string;
  date: string;
  controlComponent?: React.ReactNode;
  buildCode?: () => void;
  variants: {
    name: string;
    description: string;
    screenshot?: string;
  }[];
};
