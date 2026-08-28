import { z } from "zod/v4";
declare const ClassificationAuditEntrySchemaDefinition: z.ZodObject<{
    ancestorChainCategory: z.ZodArray<z.ZodString>;
    entityId: z.ZodUUID;
    expectedHash: z.ZodString;
    join: z.ZodArray<z.ZodType<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    } & {
        category: string;
        code?: number | null | undefined;
        creatable: boolean;
        createdAt?: string | null | undefined;
        entityClassificationId?: number | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        level?: number | null | undefined;
        name: string;
        updatedAt?: string | null | undefined;
        writable: boolean;
    }, unknown, z.core.$ZodTypeInternals<{
        creatable: boolean;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name: string;
        writable: boolean;
    } & {
        category: string;
        code?: number | null | undefined;
        creatable: boolean;
        createdAt?: string | null | undefined;
        entityClassificationId?: number | null | undefined;
        id: number;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        level?: number | null | undefined;
        name: string;
        updatedAt?: string | null | undefined;
        writable: boolean;
    }, unknown>>>;
    joinCount: z.ZodInt;
    multiplePrimaryCategory: z.ZodArray<z.ZodString>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publicRoute: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publicVisible: z.ZodBoolean;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
type ClassificationAuditEntryDefinition = z.infer<typeof ClassificationAuditEntrySchemaDefinition>;
/**
 * One audited entity: its full standardized classification join set, deterministic findings, and the set hash reconcile uses as expectedHash.
 *
 * @openapiSchema ClassificationAuditEntry
 * @endpoint POST /v1/entities/classifications/audit
 * @endpoint POST /v1/entities/classifications/audit/fleet
 * @usedBySchema ClassificationAuditSchema
 * @contractShape classification.audit-entry
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationAudit.kt
 */
export declare const ClassificationAuditEntrySchema: z.ZodType<ClassificationAuditEntryDefinition>;
export type ClassificationAuditEntry = z.infer<typeof ClassificationAuditEntrySchema>;
export {};
//# sourceMappingURL=audit-entry.d.ts.map