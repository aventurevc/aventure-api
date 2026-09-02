// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const AddressProviderMetadataSchema = z.object({
    confidenceScore: z.number().nullish(),
    formattedAddress: z.string(),
    matchType: z.string().nullish(),
    providerPlaceId: z.string().nullish(),
});
//# sourceMappingURL=provider-metadata.js.map