import { z } from "zod/v4";
declare const PersonLetterCountsSchemaDefinition: z.ZodObject<{
    counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
type PersonLetterCountsDefinition = z.infer<typeof PersonLetterCountsSchemaDefinition>;
/**
 * Per-letter visible person counts. Keys are uppercase A–Z initials of the person's last name; values are the visible person total for that initial.
 *
 * @openapiSchema PersonLetterCounts
 * @endpoint GET /v1/people/letter-counts
 * @contractShape person.letter-counts
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonLetterCounts.kt
 */
export declare const PersonLetterCountsSchema: z.ZodType<PersonLetterCountsDefinition>;
export type PersonLetterCounts = z.infer<typeof PersonLetterCountsSchema>;
export {};
//# sourceMappingURL=letter-counts.d.ts.map