import { z } from "zod/v4";
/**
 * Confidence and dispute state of a field-level provenance row
 *
 * @openapiSchema DatasourceProvenanceStatus
 * @endpoint GET /v1/provenance/history
 * @endpoint PATCH /v1/provenance/{id}/status
 * @usedBySchema DatasourceFieldProvenanceSchema
 * @contractShape datasource.provenance-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/Provenance.kt
 */
export declare const DatasourceProvenanceStatusSchema: z.ZodEnum<{
    confirmed: "confirmed";
    disputedAnonymous: "disputedAnonymous";
    disputedFirstParty: "disputedFirstParty";
    disputedRelatedParty: "disputedRelatedParty";
    disputedThirdParty: "disputedThirdParty";
    unconfirmed: "unconfirmed";
}>;
export type DatasourceProvenanceStatus = z.infer<typeof DatasourceProvenanceStatusSchema>;
//# sourceMappingURL=provenance-status.d.ts.map