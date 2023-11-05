import { Plugin } from '@rsbuild/doctor-types';
import { chunkTransform as transform } from '@/common/chunks';

export function chunkTransform(
  assetMap: Map<string, { content: string }>,
  bundleStats: Plugin.StatsCompilation,
) {
  return transform(assetMap, bundleStats);
}
