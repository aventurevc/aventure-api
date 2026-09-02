import { z } from "zod/v4";
declare const FrontendCacheEpochSchemaDefinition: z.ZodObject<{
    epochs: z.ZodType<{
        blog: string;
        entity: string;
        news: string;
        person: string;
    }, unknown, z.core.$ZodTypeInternals<{
        blog: string;
        entity: string;
        news: string;
        person: string;
    }, unknown>>;
}, z.core.$strip>;
type FrontendCacheEpochDefinition = z.infer<typeof FrontendCacheEpochSchemaDefinition>;
/**
 * @openapiSchema FrontendCacheEpoch
 * @endpoint GET /internal/frontend-cache/epoch
 * @contractShape system.frontend-cache-epoch
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/cache/FrontendCacheEpoch.kt
 */
export declare const FrontendCacheEpochSchema: z.ZodType<FrontendCacheEpochDefinition>;
export type FrontendCacheEpoch = z.infer<typeof FrontendCacheEpochSchema>;
export {};
//# sourceMappingURL=frontend-cache-epoch.d.ts.map