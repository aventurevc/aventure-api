import { z } from "zod/v4";
declare const ClassificationAuditSchemaDefinition: z.ZodObject<{
    nextCursor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    row: z.ZodArray<z.ZodType<{
        ancestorChainCategory: string[];
        entityId: string;
        expectedHash: string;
        join: ({
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
        })[];
        joinCount: number;
        multiplePrimaryCategory: string[];
        name?: string | null | undefined;
        publicRoute?: string | null | undefined;
        publicVisible: boolean;
        slug?: string | null | undefined;
        type?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        ancestorChainCategory: string[];
        entityId: string;
        expectedHash: string;
        join: ({
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
        })[];
        joinCount: number;
        multiplePrimaryCategory: string[];
        name?: string | null | undefined;
        publicRoute?: string | null | undefined;
        publicVisible: boolean;
        slug?: string | null | undefined;
        type?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }, unknown>>>;
    total: z.ZodInt;
}, z.core.$strip>;
type ClassificationAuditDefinition = z.infer<typeof ClassificationAuditSchemaDefinition>;
/**
 * Standardized classification audit page. Continue with the nextCursor value until it is null.
 *
 * @openapiSchema ClassificationAudit
 * @endpoint POST /v1/entities/classifications/audit
 * @endpoint POST /v1/entities/classifications/audit/fleet
 * @contractShape classification.audit
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationAudit.kt
 */
export declare const ClassificationAuditSchema: z.ZodType<ClassificationAuditDefinition>;
export type ClassificationAudit = z.infer<typeof ClassificationAuditSchema>;
export {};
//# sourceMappingURL=audit.d.ts.map