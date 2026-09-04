import { z } from "zod/v4";
/**
 * Read projection: person visibility state
 *
 * @openapiSchema PersonVisibilityStatus
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/people/duplicate-check
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/duplicate-check
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/people/detail
 * @usedBySchema PersonSchema
 * @contractShape person.visibility-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonFragments.kt
 */
export declare const PersonVisibilityStatusSchema: z.ZodObject<{
    isHidden: z.ZodBoolean;
    showOnSitemap: z.ZodBoolean;
}, z.core.$strip>;
export type PersonVisibilityStatus = z.infer<typeof PersonVisibilityStatusSchema>;
//# sourceMappingURL=visibility-status.d.ts.map