import { ABTest } from '../types/abTest';

const ABTestComponent = ({ test }: { test: ABTest }) => {
  const activeVariant = test.variants.find((v) => v.id === test.activeVariant);
  return <div>{activeVariant?.component}</div>;
};

export default ABTestComponent;
