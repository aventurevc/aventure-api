import { z } from "zod/v4";
declare const ClassificationAuditFilterSchemaDefinition: z.ZodObject<{
    ancestorChain: z.ZodOptional<z.ZodBoolean>;
    category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    includePrivate: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    minCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    multiplePrimary: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "Business Line": "Business Line";
        Company: "Company";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        Organization: "Organization";
        Product: "Product";
        Service: "Service";
    }>>>;
}, z.core.$strip>;
type ClassificationAuditFilterDefinition = z.infer<typeof ClassificationAuditFilterSchemaDefinition>;
/**
 * Filters for the standardized classification audit. Omit every field to page the full visible entity fleet, including entities with no standardized joins.
 *
 * @openapiSchema ClassificationAuditFilter
 * @endpoint POST /v1/entities/classifications/audit
 * @endpoint POST /v1/entities/classifications/audit/fleet
 * @contractShape classification.audit-filter
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationAuditFilter.kt
 */
export declare const ClassificationAuditFilterSchema: z.ZodType<ClassificationAuditFilterDefinition>;
export type ClassificationAuditFilter = z.infer<typeof ClassificationAuditFilterSchema>;
export {};
//# sourceMappingURL=audit-filter.d.ts.map