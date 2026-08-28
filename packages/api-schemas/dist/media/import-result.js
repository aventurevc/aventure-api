// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { MediaUploadSchema } from "./upload.js";
const MediaImportResultSchemaDefinition = z.object({
    /** Candidate count considered before selection */
    candidateCount: z.int().nullish(),
    /** Confidence assigned to the winning candidate */
    confidence: z.string().nullish(),
    /** Managed Cloudflare R2/images-v2 media asset after import; absent for preview. When news id/slug is omitted, use media.path as newsImageThumbnail on create. */
    media: MediaUploadSchema.nullish(),
    /** External image URL selected by the discovery process after redirects. */
    sourceImageUrl: z.string(),
    /** Winning discovery signal such as JSON_LD_IMAGE or OPEN_GRAPH */
    winningSignal: z.string().nullish(),
});
/**
 * Automatic media discovery result. Preview returns the selected external source image URL; import returns the attached managed media asset as well.
 *
 * @openapiSchema MediaImportResult
 * @endpoint POST /v1/media/entity-logo/import
 * @endpoint POST /v1/media/news-thumbnail/import
 * @contractShape media.import-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/MediaImportResult.kt
 */
export const MediaImportResultSchema = MediaImportResultSchemaDefinition;
//# sourceMappingURL=import-result.js.map