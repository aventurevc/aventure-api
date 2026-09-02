import { z } from "zod/v4";
declare const WebCompanyUpdateSchemaDefinition: z.ZodObject<{
    commentCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    image: z.ZodArray<z.ZodString>;
    likeCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    postId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    postUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    textHtml: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    time: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebCompanyUpdateDefinition = z.infer<typeof WebCompanyUpdateSchemaDefinition>;
/**
 * A recent company LinkedIn post.
 *
 * @openapiSchema WebCompanyUpdate
 * @endpoint GET /v1/web/profile/company
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCompanyProfileSchema
 * @contractShape web.company-update
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCompanyProfile.kt
 */
export declare const WebCompanyUpdateSchema: z.ZodType<WebCompanyUpdateDefinition>;
export type WebCompanyUpdate = z.infer<typeof WebCompanyUpdateSchema>;
export {};
//# sourceMappingURL=company-update.d.ts.map