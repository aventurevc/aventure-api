import { z } from "zod/v4";
declare const ContentBatchReplaceEntrySchemaDefinition: z.ZodObject<{
    result: z.ZodArray<z.ZodType<{
        aggregateCosineScore?: number | null | undefined;
        compositeScore: number;
        cosineScore: number;
        coverageScore?: number | null | undefined;
        matchedSectionWeight?: number | null | undefined;
        rank: number;
        sectionScore?: number | null | undefined;
        sharedSectionCount?: number | null | undefined;
        targetId: string;
    }, unknown, z.core.$ZodTypeInternals<{
        aggregateCosineScore?: number | null | undefined;
        compositeScore: number;
        cosineScore: number;
        coverageScore?: number | null | undefined;
        matchedSectionWeight?: number | null | undefined;
        rank: number;
        sectionScore?: number | null | undefined;
        sharedSectionCount?: number | null | undefined;
        targetId: string;
    }, unknown>>>;
    sourceId: z.ZodString;
    sourceType: z.ZodString;
    targetType: z.ZodString;
}, z.core.$strip>;
type ContentBatchReplaceEntryDefinition = z.infer<typeof ContentBatchReplaceEntrySchemaDefinition>;
/**
 * @openapiSchema ContentBatchReplaceEntry
 * @endpoint PUT /v1/content/similarity/batch
 * @contractShape content.batch-replace-entry
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/adapters/inbound/web/content/controller/SemanticSimilarityController.kt
 */
export declare const ContentBatchReplaceEntrySchema: z.ZodType<ContentBatchReplaceEntryDefinition>;
export type ContentBatchReplaceEntry = z.infer<typeof ContentBatchReplaceEntrySchema>;
export {};
//# sourceMappingURL=batch-replace-entry.d.ts.map