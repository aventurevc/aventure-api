import { z } from "zod/v4";
/**
 * A PitchBook monetary amount.
 *
 * @openapiSchema WebPitchbookMoney
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPitchbookCompanySchema
 * @contractShape web.pitchbook-money
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPitchbookCompany.kt
 */
export declare const WebPitchbookMoneySchema: z.ZodObject<{
    currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type WebPitchbookMoney = z.infer<typeof WebPitchbookMoneySchema>;
//# sourceMappingURL=pitchbook-money.d.ts.map