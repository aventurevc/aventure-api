// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityOperatingStatusSchema } from "./operating-status.js";
import { EntityUrlCrawlCdnProviderSchema } from "./url-crawl-cdn-provider.js";
import { OperatingStatusSignalConfidenceSchema } from "../operating/status-signal-confidence.js";
import { OperatingStatusSignalVerdictSchema } from "../operating/status-signal-verdict.js";
const EntityOperatingStatusSignalSchemaDefinition = z.object({
    /** CDN or edge provider inferred from the probe. */
    cdnProvider: EntityUrlCrawlCdnProviderSchema.nullish(),
    /** Instant when this live check completed. */
    checkedAt: z.iso.datetime({ offset: true }),
    /** Classifier confidence for the verdict. */
    confidence: OperatingStatusSignalConfidenceSchema,
    /** Current persisted operating status. */
    currentOperatingStatus: EntityOperatingStatusSchema.nullish(),
    /** Entity whose website was checked. */
    entityId: z.uuid(),
    /** Classifier evidence strings. */
    evidence: z.array(z.string()),
    /** HTTP status observed at the final URL. */
    httpStatus: z.int().nullish(),
    /** Entity website URL that was probed. */
    probedUrl: z.string().nullish(),
    /** Final URL reached after redirects. */
    resolvedUrl: z.string().nullish(),
    /** Suggested status when the signal is strong enough to propose one. */
    suggestedOperatingStatus: EntityOperatingStatusSchema.nullish(),
    /** Classifier verdict for the current website. */
    verdict: OperatingStatusSignalVerdictSchema,
});
/**
 * Read-only live-site signal for an entity's operating status.
 *
 * @openapiSchema EntityOperatingStatusSignal
 * @endpoint GET /v1/entities/{entityId}/operating-status/signal
 * @contractShape entity.operating-status-signal
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityOperatingStatusSignal.kt
 */
export const EntityOperatingStatusSignalSchema = EntityOperatingStatusSignalSchemaDefinition;
//# sourceMappingURL=operating-status-signal.js.map