import { z } from "zod/v4";
declare const NewsDuplicateCheckResultSchemaDefinition: z.ZodObject<{
    matchedNewsId: z.ZodArray<z.ZodInt>;
    totalMatches: z.ZodInt;
}, z.core.$strip>;
type NewsDuplicateCheckResultDefinition = z.infer<typeof NewsDuplicateCheckResultSchemaDefinition>;
/**
 * News duplicate-check result payload
 *
 * @openapiSchema NewsDuplicateCheckResult
 * @endpoint GET /v1/jobs/news/duplicate-check
 * @endpoint GET /v1/jobs/news/duplicate-check/{jobId}
 * @usedBySchema NewsDuplicateCheckJobSchema
 * @contractShape news.duplicate-check-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/duplicatecheck/DuplicateCheckResult.kt
 */
export declare const NewsDuplicateCheckResultSchema: z.ZodType<NewsDuplicateCheckResultDefinition>;
export type NewsDuplicateCheckResult = z.infer<typeof NewsDuplicateCheckResultSchema>;
export {};
//# sourceMappingURL=duplicate-check-result.d.ts.map