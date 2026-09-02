import { z } from "zod/v4";
/**
 * Provider-specific metadata from geocoding response
 *
 * @openapiSchema AddressProviderMetadata
 * @endpoint POST /v1/address/validation
 * @usedBySchema AddressValidationResultSchema
 * @contractShape address.provider-metadata
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/addressvalidation/AddressValidation.kt
 */
export declare const AddressProviderMetadataSchema: z.ZodObject<{
    confidenceScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    formattedAddress: z.ZodString;
    matchType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    providerPlaceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type AddressProviderMetadata = z.infer<typeof AddressProviderMetadataSchema>;
//# sourceMappingURL=provider-metadata.d.ts.map