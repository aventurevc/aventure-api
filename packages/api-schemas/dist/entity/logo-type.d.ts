import { z } from "zod/v4";
/**
 * Distinguishes square icon vs standard/horizontal entity logo
 *
 * @openapiSchema EntityLogoType
 * @endpoint GET /v1/media
 * @endpoint POST /v1/media/convert
 * @endpoint POST /v1/media/logo-accuracy
 * @endpoint POST /v1/media/upload
 * @endpoint DELETE /v1/media/delete
 * @contractShape entity.logo-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/EntityLogoType.kt
 */
export declare const EntityLogoTypeSchema: z.ZodEnum<{
    SQUARE: "SQUARE";
    STANDARD: "STANDARD";
}>;
export type EntityLogoType = z.infer<typeof EntityLogoTypeSchema>;
//# sourceMappingURL=logo-type.d.ts.map