import { z } from "zod/v4";
/**
 * Write operation captured by a provenance event row
 *
 * @openapiSchema DatasourceProvenanceOperation
 * @endpoint GET /v1/provenance/history
 * @usedBySchema DatasourceFieldProvenanceSchema
 * @contractShape datasource.provenance-operation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/Provenance.kt
 */
export declare const DatasourceProvenanceOperationSchema: z.ZodEnum<{
    delete: "delete";
    insert: "insert";
    update: "update";
}>;
export type DatasourceProvenanceOperation = z.infer<typeof DatasourceProvenanceOperationSchema>;
//# sourceMappingURL=provenance-operation.d.ts.map