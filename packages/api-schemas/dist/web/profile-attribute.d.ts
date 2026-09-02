import { z } from "zod/v4";
declare const WebProfileAttributeSchemaDefinition: z.ZodObject<{
    group: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    label: z.ZodString;
    link: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    value: z.ZodString;
}, z.core.$strip>;
type WebProfileAttributeDefinition = z.infer<typeof WebProfileAttributeSchemaDefinition>;
/**
 * A label/value profile fact not mapped to a typed field
 *
 * @openapiSchema WebProfileAttribute
 * @endpoint GET /v1/web/profile/company
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCompanyProfileSchema
 * @usedBySchema WebCrunchbaseCompanySchema
 * @usedBySchema WebPersonProfileSchema
 * @usedBySchema WebPitchbookCompanySchema
 * @contractShape web.profile-attribute
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebProfileAttribute.kt
 */
export declare const WebProfileAttributeSchema: z.ZodType<WebProfileAttributeDefinition>;
export type WebProfileAttribute = z.infer<typeof WebProfileAttributeSchema>;
export {};
//# sourceMappingURL=profile-attribute.d.ts.map