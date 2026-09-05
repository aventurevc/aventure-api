import { z } from "zod/v4";
declare const EntityOperatingStatusDetailSchemaDefinition: z.ZodObject<{
    operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Acquired: "Acquired";
        "Acquired Subsidiary": "Acquired Subsidiary";
        Closed: "Closed";
        "Closed (Acquihire)": "Closed (Acquihire)";
        Inactive: "Inactive";
        Operating: "Operating";
    }>>>;
}, z.core.$strip>;
type EntityOperatingStatusDetailDefinition = z.infer<typeof EntityOperatingStatusDetailSchemaDefinition>;
/**
 * Current operating status for one entity.
 *
 * @openapiSchema EntityOperatingStatusDetail
 * @endpoint GET /v1/entities/{entityId}/operating-status
 * @contractShape entity.operating-status-detail
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityOperatingStatus.kt
 */
export declare const EntityOperatingStatusDetailSchema: z.ZodType<EntityOperatingStatusDetailDefinition>;
export type EntityOperatingStatusDetail = z.infer<typeof EntityOperatingStatusDetailSchema>;
export {};
//# sourceMappingURL=operating-status-detail.d.ts.map