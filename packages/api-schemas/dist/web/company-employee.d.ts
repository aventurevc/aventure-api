import { z } from "zod/v4";
declare const WebCompanyEmployeeSchemaDefinition: z.ZodObject<{
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    photoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    profileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebCompanyEmployeeDefinition = z.infer<typeof WebCompanyEmployeeSchemaDefinition>;
/**
 * A featured employee.
 *
 * @openapiSchema WebCompanyEmployee
 * @endpoint GET /v1/web/profile/company
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCompanyProfileSchema
 * @contractShape web.company-employee
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCompanyProfile.kt
 */
export declare const WebCompanyEmployeeSchema: z.ZodType<WebCompanyEmployeeDefinition>;
export type WebCompanyEmployee = z.infer<typeof WebCompanyEmployeeSchema>;
export {};
//# sourceMappingURL=company-employee.d.ts.map