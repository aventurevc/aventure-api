import { z } from "zod/v4";
declare const CompletionGateTypeSchemaDefinition: z.ZodObject<{
    appliesToType: z.ZodArray<z.ZodString>;
    floor: z.ZodBoolean;
    gateId: z.ZodString;
    indexed: z.ZodEnum<{
        NONE: "NONE";
        PERSON: "PERSON";
        PRODUCT_SERVICE: "PRODUCT_SERVICE";
    }>;
    label: z.ZodString;
    minCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    owningRead: z.ZodString;
    passCriteria: z.ZodString;
    slotRef: z.ZodString;
    unobtainableAllowed: z.ZodBoolean;
}, z.core.$strip>;
type CompletionGateTypeDefinition = z.infer<typeof CompletionGateTypeSchemaDefinition>;
/**
 * Canonical completion gate definition: what an enrichment run must satisfy, which read proves it, and whether it is part of the mandatory floor.
 *
 * @openapiSchema CompletionGateType
 * @endpoint GET /v1/entities/research/completion/gates
 * @contractShape completion.gate-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/completion/CompletionGateType.kt
 */
export declare const CompletionGateTypeSchema: z.ZodType<CompletionGateTypeDefinition>;
export type CompletionGateType = z.infer<typeof CompletionGateTypeSchema>;
export {};
//# sourceMappingURL=gate-type.d.ts.map