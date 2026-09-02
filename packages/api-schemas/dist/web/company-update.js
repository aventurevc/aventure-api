// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebCompanyUpdateSchemaDefinition = z.object({
    /** Comment count */
    commentCount: z.int().nullish(),
    /** Post date (raw ISO-8601 from source) */
    date: z.string().nullish(),
    /** Post image URLs */
    image: z.array(z.string()),
    /** Like count */
    likeCount: z.int().nullish(),
    /** LinkedIn post id */
    postId: z.string().nullish(),
    /** Post URL */
    postUrl: z.string().nullish(),
    /** Post text */
    text: z.string().nullish(),
    /** Post text as HTML */
    textHtml: z.string().nullish(),
    /** Relative time label */
    time: z.string().nullish(),
    /** Post title / lead */
    title: z.string().nullish(),
});
/**
 * A recent company LinkedIn post.
 *
 * @openapiSchema WebCompanyUpdate
 * @endpoint GET /v1/web/profile/company
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCompanyProfileSchema
 * @contractShape web.company-update
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCompanyProfile.kt
 */
export const WebCompanyUpdateSchema = WebCompanyUpdateSchemaDefinition;
//# sourceMappingURL=company-update.js.map