import { z } from "zod/v4";
declare const EntityDuplicateCheckResultSchemaDefinition: z.ZodObject<{
    matchedEntityId: z.ZodArray<z.ZodUUID>;
    totalMatches: z.ZodInt;
}, z.core.$strip>;
type EntityDuplicateCheckResultDefinition = z.infer<typeof EntityDuplicateCheckResultSchemaDefinition>;
/**
 * Entity duplicate-check result payload
 *
 * @openapiSchema EntityDuplicateCheckResult
 * @endpoint GET /v1/jobs/entities/duplicate-check
 * @endpoint GET /v1/jobs/entities/duplicate-check/{jobId}
 * @usedBySchema EntityDuplicateCheckJobSchema
 * @contractShape entity.duplicate-check-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/duplicatecheck/DuplicateCheckResult.kt
 */
export declare const EntityDuplicateCheckResultSchema: z.ZodType<EntityDuplicateCheckResultDefinition>;
export type EntityDuplicateCheckResult = z.infer<typeof EntityDuplicateCheckResultSchema>;
export {};
//# sourceMappingURL=duplicate-check-result.d.ts.map