import { z } from "zod/v4";
/**
 * Manual entity logo source used instead of website auto-discovery.
 *
 * @openapiSchema EntityManualLogo
 * @endpoint POST /v1/entities/detail/full
 * @usedBySchema EntityFullMutationSchema
 * @contractShape entity.manual-logo
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityFullMutation.kt
 */
export declare const EntityManualLogoSchema: z.ZodObject<{
    imageUrl: z.ZodString;
}, z.core.$strip>;
export type EntityManualLogo = z.infer<typeof EntityManualLogoSchema>;
//# sourceMappingURL=manual-logo.d.ts.map