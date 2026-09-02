import { z } from "zod/v4";
/**
 * Supported geocoding/address validation providers
 *
 * @openapiSchema AddressValidationProvider
 * @endpoint POST /v1/address/validation
 * @usedBySchema AddressValidationResultSchema
 * @contractShape address.validation-provider
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/addressvalidation/AddressValidation.kt
 */
export declare const AddressValidationProviderSchema: z.ZodEnum<{
    APPLE_MAPS: "APPLE_MAPS";
}>;
export type AddressValidationProvider = z.infer<typeof AddressValidationProviderSchema>;
//# sourceMappingURL=validation-provider.d.ts.map