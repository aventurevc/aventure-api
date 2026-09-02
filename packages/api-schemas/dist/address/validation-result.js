// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AddressSchema } from "./address.js";
import { AddressLookupContextSchema } from "./lookup-context.js";
import { AddressProviderMetadataSchema } from "./provider-metadata.js";
import { AddressReferenceMatchSchema } from "./reference-match.js";
import { AddressValidationMutationSchema } from "./validation-mutation.js";
import { AddressValidationProviderSchema } from "./validation-provider.js";
import { AddressValidationStatusSchema } from "./validation-status.js";
const AddressValidationResultSchemaDefinition = z.object({
    canonicalAddress: AddressSchema.nullish(),
    hasCanonicalAddress: z.boolean(),
    /** Address validation ID */
    id: z.uuid(),
    /** Input address */
    inputAddress: AddressValidationMutationSchema,
    isFailure: z.boolean(),
    isSuccess: z.boolean(),
    /** Lookup context */
    lookupContext: AddressLookupContextSchema,
    previousAddress: AddressSchema.nullish(),
    provider: AddressValidationProviderSchema,
    providerMetadata: AddressProviderMetadataSchema.nullish(),
    /** Reference match */
    referenceMatch: AddressReferenceMatchSchema,
    validatedAt: z.iso.datetime({ offset: true }),
    validationStatus: AddressValidationStatusSchema,
});
/**
 * Complete address validation result - top-level API response
 *
 * @openapiSchema AddressValidationResult
 * @endpoint POST /v1/address/validation
 * @contractShape address.validation-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/addressvalidation/AddressValidation.kt
 */
export const AddressValidationResultSchema = AddressValidationResultSchemaDefinition;
//# sourceMappingURL=validation-result.js.map