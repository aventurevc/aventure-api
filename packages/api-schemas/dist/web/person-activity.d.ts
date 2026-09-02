import { z } from "zod/v4";
declare const WebPersonActivitySchemaDefinition: z.ZodObject<{
    id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    interaction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    link: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebPersonActivityDefinition = z.infer<typeof WebPersonActivitySchemaDefinition>;
/**
 * A LinkedIn activity item.
 *
 * @openapiSchema WebPersonActivity
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPersonProfileSchema
 * @contractShape web.person-activity
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export declare const WebPersonActivitySchema: z.ZodType<WebPersonActivityDefinition>;
export type WebPersonActivity = z.infer<typeof WebPersonActivitySchema>;
export {};
//# sourceMappingURL=person-activity.d.ts.map