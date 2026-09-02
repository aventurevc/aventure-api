// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
const AddressLookupContextSchemaDefinition = z.object({
    addressId: z.int().nullish(),
    addressJoinId: z.int().nullish(),
    addressRole: z.enum(["PRIMARY", "HQ", "CURRENT"]).nullish(),
    /** Canonical lowercase URL slug for the resource */
    entitySlug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
    hasContext: z.boolean(),
    isEntityContext: z.boolean(),
    isPersonContext: z.boolean(),
    owner: EntityPersonOwnerSchema.nullish(),
    /** Canonical lowercase URL slug for the resource */
    personSlug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
});
/**
 * Context linking validation to entity/person
 *
 * @openapiSchema AddressLookupContext
 * @endpoint POST /v1/address/validation
 * @usedBySchema AddressValidationResultSchema
 * @contractShape address.lookup-context
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/addressvalidation/AddressValidation.kt
 */
export const AddressLookupContextSchema = AddressLookupContextSchemaDefinition;
//# sourceMappingURL=lookup-context.js.map