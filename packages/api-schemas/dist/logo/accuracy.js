// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DatasourceSourceMetadataSchema } from "../datasource/source-metadata.js";
import { LogoAccuracyReferenceSchema } from "./accuracy-reference.js";
const LogoAccuracySchemaDefinition = z.object({
    /** Confirmed media-slot provenance that made this a match without a model/reference comparison; null for deterministic hash, vision, and insufficient outcomes */
    approval: DatasourceSourceMetadataSchema.nullish(),
    /** Literal visible description of the candidate mark, when assessed by vision */
    candidateObserved: z.string().nullish(),
    /** Confidence in the outcome */
    confidence: z.enum(["HIGH", "MEDIUM", "LOW"]),
    /** How the outcome was reached */
    method: z.enum(["PERCEPTUAL_HASH", "VISION", "OPERATOR_REVIEW", "REFERENCE_UNAVAILABLE"]),
    /** Whether the candidate mark matches the target's own brand */
    outcome: z.enum(["MATCH", "MISMATCH", "INSUFFICIENT"]),
    /** Reference marks fetched from the target's own surfaces, each with its perceptual-hash distance to the candidate. The deciding deterministic distance is the smallest entry */
    reference: z.array(LogoAccuracyReferenceSchema),
    /** Literal visible description of the reference mark, when assessed by vision */
    referenceObserved: z.string().nullish(),
    /** The specific visible feature shared by candidate and reference that supports a match (shared name text, symbol, or distinctive palette); null when not a match */
    sharedFeature: z.string().nullish(),
});
/**
 * Read-only assessment of whether a stored logo/photo depicts the target's own brand, decided from visible features of the stored mark versus the target's own reference marks
 *
 * @openapiSchema LogoAccuracy
 * @endpoint POST /v1/media/logo-accuracy
 * @contractShape logo.accuracy
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/LogoAccuracy.kt
 */
export const LogoAccuracySchema = LogoAccuracySchemaDefinition;
//# sourceMappingURL=accuracy.js.map