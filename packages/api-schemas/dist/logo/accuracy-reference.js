// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const LogoAccuracyReferenceSchemaDefinition = z.object({
    /** Perceptual-hash distance between the candidate and this reference */
    hammingDistance: z.int(),
    /** Direct URL of the reference mark fetched from the target's surface */
    url: z.string(),
});
/**
 * A reference mark from the target's own surface and its distance to the candidate
 *
 * @openapiSchema LogoAccuracyReference
 * @endpoint POST /v1/media/logo-accuracy
 * @usedBySchema LogoAccuracySchema
 * @contractShape logo.accuracy-reference
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/LogoAccuracy.kt
 */
export const LogoAccuracyReferenceSchema = LogoAccuracyReferenceSchemaDefinition;
//# sourceMappingURL=accuracy-reference.js.map