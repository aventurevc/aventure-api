// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentEmbeddingActivitySchema } from "./embedding-activity.js";
import { ContentEmbeddingBacklogTypeCountSchema } from "./embedding-backlog-type-count.js";
import { ContentEmbeddingBacklogWorkSchema } from "./embedding-backlog-work.js";
import { ContentEmbeddingClusterModeSchema } from "./embedding-cluster-mode.js";
const ContentEmbeddingBacklogSchemaDefinition = z.object({
    /** Owner embedding-row creation, embedding recalculation, and semantic-similarity refresh counts by source group. Excludes section and semantic-similarity fanout rows. */
    activity: z.array(ContentEmbeddingActivitySchema),
    /** Effective max items submitted by the reconciler per recurring tick */
    batchSize: z.int(),
    /** Active durable cluster admission mode. The value is never substituted with a configuration default. */
    clusterMode: ContentEmbeddingClusterModeSchema,
    /** Whether profile configuration permits live execution of both recurring embedding jobs. This is a runtime gate, not only a startup default. */
    configuredDefaultEnabled: z.boolean(),
    /** Effective max simultaneous refresh-lane tasks */
    maxConcurrent: z.int(),
    /** Owners with no embedding row, broken out by embedding source-type. The entity bucket is broken down further by typeRecord (Company, Investment Firm, Fund, etc.); product, service, person, and article are single rows. Excludes owners whose embedding exists with a stale model_version or regime; those source rows surface under work.previousEmbedding. Owner reconciliation reports this missing-owner component whether updatedOwnerScanEnabled is false or true. */
    outstanding: z.array(ContentEmbeddingBacklogTypeCountSchema),
    /** Configured owner-reconcile interval as an ISO-8601 duration */
    ownerReconcileInterval: z.string(),
    /** Whether the persisted JobRunr row for owner reconciliation is enabled. It repairs missing owners and removes absent or ineligible embedding rows independently of updatedOwnerScanEnabled. */
    ownerReconcileScheduled: z.boolean(),
    /** Current in-memory refresh-lane item count (work already submitted) */
    pendingSize: z.int(),
    /** Effective max pending backlog target for recurring runs */
    pendingTargetSize: z.int(),
    /** Pending notification-driven refresh items still persisted in the control-plane work queue. This is the true outstanding backlog the recurring reconciler must drain, distinct from the in-memory `pendingSize` lane depth. */
    queuedWorkSize: z.int(),
    /** Configured primary reconcile interval as an ISO-8601 duration */
    reconcileInterval: z.string(),
    /** Whether the persisted JobRunr row for primary stale-source reconciliation is enabled. */
    reconcileScheduled: z.boolean(),
    /** Whether embedding refresh execution is globally enabled */
    refreshEnabled: z.boolean(),
    /** Whether the expensive updated-owner child-pulse scan is enabled. Owner reconciliation continues independently. */
    updatedOwnerScanEnabled: z.boolean(),
    /** Exact refresh-work counts from embedding rows. Includes stale model/regime embeddings and stale semantic-similarity watermarks; excludes refresh-check cadence because it is continuous rotation rather than finite backlog. */
    work: z.array(ContentEmbeddingBacklogWorkSchema),
});
/**
 * Content embedding primary and owner reconciliation status, updated-owner scan state, refresh-work counts, and recent owner embedding activity.
 *
 * @openapiSchema ContentEmbeddingBacklog
 * @endpoint GET /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog/mode
 * @endpoint DELETE /v1/content/embedding/backlog
 * @contractShape content.embedding-backlog
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentEmbeddingBacklog.kt
 */
export const ContentEmbeddingBacklogSchema = ContentEmbeddingBacklogSchemaDefinition;
//# sourceMappingURL=embedding-backlog.js.map