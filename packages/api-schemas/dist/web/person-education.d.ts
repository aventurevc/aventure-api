import { z } from "zod/v4";
declare const WebPersonEducationSchemaDefinition: z.ZodObject<{
    endYear: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    school: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    schoolLogoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    schoolUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    startYear: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebPersonEducationDefinition = z.infer<typeof WebPersonEducationSchemaDefinition>;
/**
 * A single LinkedIn education entry.
 *
 * @openapiSchema WebPersonEducation
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPersonProfileSchema
 * @contractShape web.person-education
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export declare const WebPersonEducationSchema: z.ZodType<WebPersonEducationDefinition>;
export type WebPersonEducation = z.infer<typeof WebPersonEducationSchema>;
export {};
//# sourceMappingURL=person-education.d.ts.map