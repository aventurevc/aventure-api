import { z } from "zod/v4";
declare const EntityDetailCoverageSchemaDefinition: z.ZodObject<{
    entityId: z.ZodUUID;
    slot: z.ZodArray<z.ZodType<{
        count: number;
        coverage: "ABSENT" | "NOT_EVALUABLE" | "PRESENT";
        gateId: string;
        howToObtain: string;
        label: string;
        owningRead: string;
        parentPersonId?: string | null | undefined;
        parentProductServiceId?: string | null | undefined;
        required: boolean;
        unobtainableAllowed: boolean;
    }, unknown, z.core.$ZodTypeInternals<{
        count: number;
        coverage: "ABSENT" | "NOT_EVALUABLE" | "PRESENT";
        gateId: string;
        howToObtain: string;
        label: string;
        owningRead: string;
        parentPersonId?: string | null | undefined;
        parentProductServiceId?: string | null | undefined;
        required: boolean;
        unobtainableAllowed: boolean;
    }, unknown>>>;
}, z.core.$strip>;
type EntityDetailCoverageDefinition = z.infer<typeof EntityDetailCoverageSchemaDefinition>;
/**
 * Per-entity completion-gate coverage: for each evaluated gate, whether the assembled entity detail already satisfies it and how to obtain it when it does not.
 *
 * @openapiSchema EntityDetailCoverage
 * @endpoint GET /v1/entities/{entityId}/detail/coverage
 * @contractShape entity.detail-coverage
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityDetailCoverage.kt
 */
export declare const EntityDetailCoverageSchema: z.ZodType<EntityDetailCoverageDefinition>;
export type EntityDetailCoverage = z.infer<typeof EntityDetailCoverageSchema>;
export {};
//# sourceMappingURL=detail-coverage.d.ts.map