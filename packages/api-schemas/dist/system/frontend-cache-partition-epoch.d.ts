import { z } from "zod/v4";
declare const FrontendCachePartitionEpochSchemaDefinition: z.ZodObject<{
    blog: z.ZodString;
    entity: z.ZodString;
    news: z.ZodString;
    person: z.ZodString;
}, z.core.$strip>;
type FrontendCachePartitionEpochDefinition = z.infer<typeof FrontendCachePartitionEpochSchemaDefinition>;
/**
 * @openapiSchema FrontendCachePartitionEpoch
 * @endpoint GET /internal/frontend-cache/epoch
 * @usedBySchema FrontendCacheEpochSchema
 * @contractShape system.frontend-cache-partition-epoch
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/cache/FrontendCacheEpoch.kt
 */
export declare const FrontendCachePartitionEpochSchema: z.ZodType<FrontendCachePartitionEpochDefinition>;
export type FrontendCachePartitionEpoch = z.infer<typeof FrontendCachePartitionEpochSchema>;
export {};
//# sourceMappingURL=frontend-cache-partition-epoch.d.ts.map