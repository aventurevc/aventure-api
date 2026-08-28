import { z } from "zod/v4";
declare const LogoAccuracyReferenceSchemaDefinition: z.ZodObject<{
    hammingDistance: z.ZodInt;
    url: z.ZodString;
}, z.core.$strip>;
type LogoAccuracyReferenceDefinition = z.infer<typeof LogoAccuracyReferenceSchemaDefinition>;
/**
 * A reference mark from the target's own surface and its distance to the candidate
 *
 * @openapiSchema LogoAccuracyReference
 * @endpoint POST /v1/media/logo-accuracy
 * @usedBySchema LogoAccuracySchema
 * @contractShape logo.accuracy-reference
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/LogoAccuracy.kt
 */
export declare const LogoAccuracyReferenceSchema: z.ZodType<LogoAccuracyReferenceDefinition>;
export type LogoAccuracyReference = z.infer<typeof LogoAccuracyReferenceSchema>;
export {};
//# sourceMappingURL=accuracy-reference.d.ts.map