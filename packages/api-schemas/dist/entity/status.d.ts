import { z } from "zod/v4";
/**
 * Grouped entity visibility and editorial status flags
 *
 * @openapiSchema EntityStatus
 * @endpoint GET /v1/entities/{entityId}/status
 * @endpoint PATCH /v1/entities/{entityId}/status
 * @contractShape entity.status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityStatus.kt
 */
export declare const EntityStatusSchema: z.ZodObject<{
    isFeatured: z.ZodBoolean;
    isHidden: z.ZodBoolean;
    isVerified: z.ZodBoolean;
    showOnSitemap: z.ZodBoolean;
}, z.core.$strip>;
export type EntityStatus = z.infer<typeof EntityStatusSchema>;
//# sourceMappingURL=status.d.ts.map