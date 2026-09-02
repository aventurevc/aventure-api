import { z } from "zod/v4";
/**
 * URL matching mode for URL-backed filters and duplicate checks.
 *
 * @openapiSchema EntityUrlMatchMode
 * @endpoint GET /v1/app/saved-views
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/duplicate-check
 * @endpoint GET /v1/entities/duplicate-check/candidates
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/jobs/entities/duplicate-check
 * @endpoint GET /v1/jobs/people/duplicate-check
 * @endpoint GET /v1/people/duplicate-check
 * @endpoint GET /v1/people/duplicate-check/candidates
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/app/saved-views/{savedViewId}
 * @endpoint GET /v1/jobs/entities/duplicate-check/{jobId}
 * @endpoint GET /v1/jobs/people/duplicate-check/{jobId}
 * @endpoint POST /v1/app/saved-views
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/duplicate-check
 * @endpoint POST /v1/entities/duplicate-check/candidates
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/jobs/entities/duplicate-check
 * @endpoint POST /v1/jobs/people/duplicate-check
 * @endpoint POST /v1/people/duplicate-check
 * @endpoint POST /v1/people/duplicate-check/candidates
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/app/saved-views/{savedViewId}
 * @endpoint DELETE /v1/app/saved-views/{savedViewId}
 * @usedBySchema EntityDuplicateCriteriaSchema
 * @usedBySchema EntityFilterSchema
 * @usedBySchema PersonDuplicateCriteriaSchema
 * @contractShape entity.url-match-mode
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/url/UrlMatchMode.kt
 */
export declare const EntityUrlMatchModeSchema: z.ZodEnum<{
    domain: "domain";
    hostPath: "hostPath";
}>;
export type EntityUrlMatchMode = z.infer<typeof EntityUrlMatchModeSchema>;
//# sourceMappingURL=url-match-mode.d.ts.map