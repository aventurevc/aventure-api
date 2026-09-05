import { z } from "zod/v4";
/**
 * Exactly one of entityId or personId is set; ids only, no name fields. Resolve display names with GET /v1/entities/detail or GET /v1/people/detail.
 *
 * @openapiSchema EntityPersonOwner
 * @standardProblemResponse
 * @usedBySchema AddressLookupContextSchema
 * @usedBySchema BlogPostSchema
 * @usedBySchema CrawlRunSchema
 * @usedBySchema EntityFundraiseInvestorJoinSchema
 * @usedBySchema EntityTextSchema
 * @usedBySchema EntityUrlLinkSchema
 * @usedBySchema ExternalSocialPostMutationSchema
 * @usedBySchema ExternalSocialPostSchema
 * @usedBySchema MediaScreenshotSchema
 * @usedBySchema NewsFilterSchema
 * @usedBySchema ResolvedHandleSchema
 * @usedBySchema UniqueIdSchema
 * @usedBySchema UrlDuplicateConflictSchema
 * @usedBySchema UrlDuplicateJoinSchema
 * @usedBySchema WebSiteSchema
 * @contractShape entity.person-owner
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/identity/EntityPersonOwner.kt
 */
export declare const EntityPersonOwnerSchema: z.ZodObject<{
    entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
}, z.core.$strip>;
export type EntityPersonOwner = z.infer<typeof EntityPersonOwnerSchema>;
//# sourceMappingURL=person-owner.d.ts.map