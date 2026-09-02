import { z } from "zod/v4";
declare const WebPitchbookCompetitorSchemaDefinition: z.ZodObject<{
    financingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    profileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebPitchbookCompetitorDefinition = z.infer<typeof WebPitchbookCompetitorSchemaDefinition>;
/**
 * A PitchBook-listed competitor.
 *
 * @openapiSchema WebPitchbookCompetitor
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPitchbookCompanySchema
 * @contractShape web.pitchbook-competitor
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPitchbookCompany.kt
 */
export declare const WebPitchbookCompetitorSchema: z.ZodType<WebPitchbookCompetitorDefinition>;
export type WebPitchbookCompetitor = z.infer<typeof WebPitchbookCompetitorSchema>;
export {};
//# sourceMappingURL=pitchbook-competitor.d.ts.map