import { z } from "zod/v4";
declare const SecIdentifierMappingSchemaDefinition: z.ZodObject<{
    alreadyPresent: z.ZodArray<z.ZodType<{
        createdAt: string;
        id: number;
        identifier: string;
        idType: "crd" | "cusip" | "duns" | "ein" | "isin" | "lei" | "orcid" | "secCik" | "ticker";
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        source?: string | null | undefined;
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt: string;
        id: number;
        identifier: string;
        idType: "crd" | "cusip" | "duns" | "ein" | "isin" | "lei" | "orcid" | "secCik" | "ticker";
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        source?: string | null | undefined;
        updatedAt: string;
    }, unknown>>>;
    attached: z.ZodArray<z.ZodType<{
        createdAt: string;
        id: number;
        identifier: string;
        idType: "crd" | "cusip" | "duns" | "ein" | "isin" | "lei" | "orcid" | "secCik" | "ticker";
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        source?: string | null | undefined;
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt: string;
        id: number;
        identifier: string;
        idType: "crd" | "cusip" | "duns" | "ein" | "isin" | "lei" | "orcid" | "secCik" | "ticker";
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        source?: string | null | undefined;
        updatedAt: string;
    }, unknown>>>;
    cik: z.ZodString;
}, z.core.$strip>;
type SecIdentifierMappingDefinition = z.infer<typeof SecIdentifierMappingSchemaDefinition>;
/**
 * Outcome of mapping SEC external identifiers onto an entity: the newly attached unique-id rows plus any that were already present.
 *
 * @openapiSchema SecIdentifierMapping
 * @endpoint POST /v1/sec/entities/{entityId}/identifiers
 * @contractShape sec.identifier-mapping
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sec/SecIdentifierMapping.kt
 */
export declare const SecIdentifierMappingSchema: z.ZodType<SecIdentifierMappingDefinition>;
export type SecIdentifierMapping = z.infer<typeof SecIdentifierMappingSchema>;
export {};
//# sourceMappingURL=identifier-mapping.d.ts.map