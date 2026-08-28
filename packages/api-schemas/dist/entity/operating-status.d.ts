import { z } from "zod/v4";
/**
 * Operating state accepted by entity mutation endpoints. Acquired Subsidiary means the entity was acquired and still operates; Acquired means the entity is terminal, folded into the buyer, or closed.
 *
 * @openapiSchema EntityOperatingStatus
 * @endpoint GET /v1/entities/{entityId}/operating-status
 * @endpoint GET /v1/entities/{entityId}/operating-status/signal
 * @endpoint POST /v1/entities/{entityId}/operating-status
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/merge
 * @endpoint PATCH /v1/entities/{entityId}/operating-status
 * @endpoint PATCH /v1/entities/{entityId}/type-record
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/{entityId}/operating-status
 * @endpoint PUT /v1/entities/detail
 * @usedBySchema EntityMutationSchema
 * @usedBySchema EntityOperatingStatusSignalSchema
 * @contractShape entity.operating-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityOperatingStatus.kt
 */
export declare const EntityOperatingStatusSchema: z.ZodEnum<{
    Acquired: "Acquired";
    "Acquired Subsidiary": "Acquired Subsidiary";
    Closed: "Closed";
    Inactive: "Inactive";
    Operating: "Operating";
}>;
export type EntityOperatingStatus = z.infer<typeof EntityOperatingStatusSchema>;
//# sourceMappingURL=operating-status.d.ts.map