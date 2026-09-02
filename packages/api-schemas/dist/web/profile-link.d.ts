import { z } from "zod/v4";
declare const WebProfileLinkSchemaDefinition: z.ZodObject<{
    label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebProfileLinkDefinition = z.infer<typeof WebProfileLinkSchemaDefinition>;
/**
 * A labelled bio link.
 *
 * @openapiSchema WebProfileLink
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPersonProfileSchema
 * @contractShape web.profile-link
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export declare const WebProfileLinkSchema: z.ZodType<WebProfileLinkDefinition>;
export type WebProfileLink = z.infer<typeof WebProfileLinkSchema>;
export {};
//# sourceMappingURL=profile-link.d.ts.map