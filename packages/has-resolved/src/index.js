import hasRejected from './hasRejected';
import hasResolved from './hasResolved';

hasResolved.hasRejected = hasRejected;

export {
  hasResolved as default,
  hasRejected
};
