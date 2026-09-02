import { z } from "zod/v4";
declare const WebPitchbookSocialSchemaDefinition: z.ZodObject<{
    domain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    link: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebPitchbookSocialDefinition = z.infer<typeof WebPitchbookSocialSchemaDefinition>;
/**
 * A PitchBook social-media link.
 *
 * @openapiSchema WebPitchbookSocial
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPitchbookCompanySchema
 * @contractShape web.pitchbook-social
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPitchbookCompany.kt
 */
export declare const WebPitchbookSocialSchema: z.ZodType<WebPitchbookSocialDefinition>;
export type WebPitchbookSocial = z.infer<typeof WebPitchbookSocialSchema>;
export {};
//# sourceMappingURL=pitchbook-social.d.ts.map