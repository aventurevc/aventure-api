import { z } from "zod/v4";
declare const NewsDuplicateCheckSchemaDefinition: z.ZodObject<{
    excludeId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publication: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    qwen4bFp16Embedding: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
    search: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    urlDomain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    urlMatchMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        domain: "domain";
        hostPath: "hostPath";
    }>>>;
}, z.core.$strip>;
type NewsDuplicateCheckDefinition = z.infer<typeof NewsDuplicateCheckSchemaDefinition>;
/**
 * Canonical news duplicate-check criteria
 *
 * @openapiSchema NewsDuplicateCheck
 * @endpoint GET /v1/jobs/news/duplicate-check
 * @endpoint GET /v1/jobs/news/duplicate-check/{jobId}
 * @endpoint POST /v1/news/duplicate-check
 * @endpoint POST /v1/news/duplicate-check/candidates
 * @usedBySchema NewsDuplicateCheckJobSchema
 * @contractShape news.duplicate-check
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/news/NewsDuplicateCheck.kt
 */
export declare const NewsDuplicateCheckSchema: z.ZodType<NewsDuplicateCheckDefinition>;
export type NewsDuplicateCheck = z.infer<typeof NewsDuplicateCheckSchema>;
export {};
//# sourceMappingURL=duplicate-check.d.ts.map