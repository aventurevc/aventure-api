import { z } from "zod/v4";
declare const PersonDuplicateCheckResultSchemaDefinition: z.ZodObject<{
    matchedPersonId: z.ZodArray<z.ZodUUID>;
    totalMatches: z.ZodInt;
}, z.core.$strip>;
type PersonDuplicateCheckResultDefinition = z.infer<typeof PersonDuplicateCheckResultSchemaDefinition>;
/**
 * Person duplicate-check result payload
 *
 * @openapiSchema PersonDuplicateCheckResult
 * @endpoint GET /v1/jobs/people/duplicate-check
 * @endpoint GET /v1/jobs/people/duplicate-check/{jobId}
 * @usedBySchema PersonDuplicateCheckJobSchema
 * @contractShape person.duplicate-check-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/duplicatecheck/DuplicateCheckResult.kt
 */
export declare const PersonDuplicateCheckResultSchema: z.ZodType<PersonDuplicateCheckResultDefinition>;
export type PersonDuplicateCheckResult = z.infer<typeof PersonDuplicateCheckResultSchema>;
export {};
//# sourceMappingURL=duplicate-check-result.d.ts.map