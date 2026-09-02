import { z } from "zod/v4";
declare const EntityLetterCountsSchemaDefinition: z.ZodObject<{
    counts: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
type EntityLetterCountsDefinition = z.infer<typeof EntityLetterCountsSchemaDefinition>;
/**
 * Per-letter visible entity counts. Keys are uppercase A–Z initials of the entity name; values are the visible entity total for that initial within the requested typeRecord scope.
 *
 * @openapiSchema EntityLetterCounts
 * @endpoint GET /v1/entities/letter-counts
 * @contractShape entity.letter-counts
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityLetterCounts.kt
 */
export declare const EntityLetterCountsSchema: z.ZodType<EntityLetterCountsDefinition>;
export type EntityLetterCounts = z.infer<typeof EntityLetterCountsSchema>;
export {};
//# sourceMappingURL=letter-counts.d.ts.map