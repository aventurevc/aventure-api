import { z } from "zod/v4";
declare const WebCompanyOfficeSchemaDefinition: z.ZodObject<{
    address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    directionsUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebCompanyOfficeDefinition = z.infer<typeof WebCompanyOfficeSchemaDefinition>;
/**
 * A company office location.
 *
 * @openapiSchema WebCompanyOffice
 * @endpoint GET /v1/web/profile/company
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCompanyProfileSchema
 * @contractShape web.company-office
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCompanyProfile.kt
 */
export declare const WebCompanyOfficeSchema: z.ZodType<WebCompanyOfficeDefinition>;
export type WebCompanyOffice = z.infer<typeof WebCompanyOfficeSchema>;
export {};
//# sourceMappingURL=company-office.d.ts.map