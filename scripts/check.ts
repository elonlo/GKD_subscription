import subscription from '../src/subscription';
import { checkSubscription, checkApiVersion } from '@gkd-kit/tools';

try {
  await checkApiVersion();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.warn(`Warning: failed to check @gkd-kit/api version: ${message}`);
}

checkSubscription(subscription);

export default subscription;
