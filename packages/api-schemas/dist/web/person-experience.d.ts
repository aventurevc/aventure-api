import { z } from "zod/v4";
declare const WebPersonExperienceSchemaDefinition: z.ZodObject<{
    company: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    companyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    companyLogoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    companyUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    endDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    startDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebPersonExperienceDefinition = z.infer<typeof WebPersonExperienceSchemaDefinition>;
/**
 * A single LinkedIn employment-history entry.
 *
 * @openapiSchema WebPersonExperience
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPersonProfileSchema
 * @contractShape web.person-experience
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export declare const WebPersonExperienceSchema: z.ZodType<WebPersonExperienceDefinition>;
export type WebPersonExperience = z.infer<typeof WebPersonExperienceSchema>;
export {};
//# sourceMappingURL=person-experience.d.ts.map