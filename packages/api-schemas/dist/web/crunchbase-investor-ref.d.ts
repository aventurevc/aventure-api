import { z } from "zod/v4";
declare const WebCrunchbaseInvestorRefSchemaDefinition: z.ZodObject<{
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    permalink: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebCrunchbaseInvestorRefDefinition = z.infer<typeof WebCrunchbaseInvestorRefSchemaDefinition>;
/**
 * A Crunchbase investor reference.
 *
 * @openapiSchema WebCrunchbaseInvestorRef
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseFundingRoundSchema
 * @contractShape web.crunchbase-investor-ref
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export declare const WebCrunchbaseInvestorRefSchema: z.ZodType<WebCrunchbaseInvestorRefDefinition>;
export type WebCrunchbaseInvestorRef = z.infer<typeof WebCrunchbaseInvestorRefSchema>;
export {};
//# sourceMappingURL=crunchbase-investor-ref.d.ts.map