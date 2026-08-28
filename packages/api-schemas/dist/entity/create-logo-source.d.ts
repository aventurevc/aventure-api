import { z } from "zod/v4";
/**
 * Source used for the entity create logo.
 *
 * @openapiSchema EntityCreateLogoSource
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @usedBySchema EntityCreateLogoSchema
 * @contractShape entity.create-logo-source
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityCreateLogo.kt
 */
export declare const EntityCreateLogoSourceSchema: z.ZodEnum<{
    AUTO_WEBSITE: "AUTO_WEBSITE";
    MANUAL_IMAGE_URL: "MANUAL_IMAGE_URL";
    MANUAL_UPLOAD: "MANUAL_UPLOAD";
}>;
export type EntityCreateLogoSource = z.infer<typeof EntityCreateLogoSourceSchema>;
//# sourceMappingURL=create-logo-source.d.ts.map