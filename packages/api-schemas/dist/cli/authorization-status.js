// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * CLI authorization broker lifecycle state
 *
 * @openapiSchema CliAuthorizationStatus
 * @endpoint GET /v1/app/cli-authorizations
 * @endpoint GET /v1/app/cli-authorizations/{cliAuthorizationId}
 * @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/approve
 * @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/deny
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
 * @endpoint DELETE /v1/app/cli-authorizations/{cliAuthorizationId}
 * @usedBySchema CliAuthorizationPollSchema
 * @usedBySchema CliAuthorizationSchema
 * @contractShape cli.authorization-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
 */
export const CliAuthorizationStatusSchema = z.enum([
    "PENDING",
    "ISSUING",
    "KEY_READY",
    "REVOKING",
    "CONSUMED",
    "REVOKED",
    "DENIED",
    "EXPIRED",
    "FAILED",
]);
//# sourceMappingURL=authorization-status.js.map