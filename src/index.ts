export { Change, diff, presentableDiff, type DiffConfig } from "./diff";

export { getChunks, goToNextChunk, goToPreviousChunk } from "./merge";

export { type MergeConfig, type DirectMergeConfig, MergeView } from "./mergeview";

export {
  unifiedMergeView,
  acceptChunk,
  rejectChunk,
  getOriginalDoc,
  originalDocChangeEffect,
  updateOriginalDoc,
} from "./unified";

export { Chunk } from "./chunk";
