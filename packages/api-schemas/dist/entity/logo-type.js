// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Distinguishes square icon vs standard/horizontal entity logo
 *
 * @openapiSchema EntityLogoType
 * @endpoint GET /v1/media
 * @endpoint POST /v1/media/convert
 * @endpoint POST /v1/media/logo-accuracy
 * @endpoint POST /v1/media/upload
 * @endpoint DELETE /v1/media/delete
 * @contractShape entity.logo-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/EntityLogoType.kt
 */
export const EntityLogoTypeSchema = z.enum(["SQUARE", "STANDARD"]);
//# sourceMappingURL=logo-type.js.map