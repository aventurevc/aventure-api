// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Source of a reference match
 *
 * @openapiSchema AddressReferenceMatchSource
 * @endpoint POST /v1/address/validation
 * @usedBySchema AddressReferenceMatchSchema
 * @contractShape address.reference-match-source
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/addressvalidation/AddressValidation.kt
 */
export const AddressReferenceMatchSourceSchema = z.enum(["EXISTING", "CREATED", "NONE"]);
//# sourceMappingURL=reference-match-source.js.map