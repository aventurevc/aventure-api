// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Coarse operating-system family reported by the CLI
 *
 * @openapiSchema CliAuthorizationClientPlatform
 * @endpoint GET /v1/app/cli-authorizations
 * @endpoint GET /v1/app/cli-authorizations/{cliAuthorizationId}
 * @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/approve
 * @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/deny
 * @endpoint POST /v1/auth/cli-authorizations
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
 * @endpoint DELETE /v1/app/cli-authorizations/{cliAuthorizationId}
 * @usedBySchema CliAuthorizationMutationSchema
 * @usedBySchema CliAuthorizationSchema
 * @contractShape cli.authorization-client-platform
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
 */
export const CliAuthorizationClientPlatformSchema = z.enum(["MACOS", "LINUX", "WINDOWS", "OTHER"]);
//# sourceMappingURL=authorization-client-platform.js.map