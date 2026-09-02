import { z } from "zod/v4";
declare const WebRelatedProfileSchemaDefinition: z.ZodObject<{
    about: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    profileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebRelatedProfileDefinition = z.infer<typeof WebRelatedProfileSchemaDefinition>;
/**
 * A related LinkedIn profile.
 *
 * @openapiSchema WebRelatedProfile
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPersonProfileSchema
 * @contractShape web.related-profile
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export declare const WebRelatedProfileSchema: z.ZodType<WebRelatedProfileDefinition>;
export type WebRelatedProfile = z.infer<typeof WebRelatedProfileSchema>;
export {};
//# sourceMappingURL=related-profile.d.ts.map