
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = ({ ...props }) => {
  return <Skeleton {...props} />;
};

export { SkeletonTheme };
export default SkeletonLoader;
