// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const AddressValidationProviderSchema = z.enum(["APPLE_MAPS"]);
//# sourceMappingURL=validation-provider.js.map