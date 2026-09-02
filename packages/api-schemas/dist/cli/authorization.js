// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { CliAuthorizationTerminalReasonSchema } from "./authorization-terminal-reason.js";
const CliAuthorizationSchemaDefinition = z.object({
    /** Time the authenticated user approved this request */
    approvedAt: z.iso.datetime({ offset: true }).nullish(),
    /** User-supplied label for the requesting CLI installation */
    clientLabel: z.string(),
    /** Coarse client operating-system family */
    clientPlatform: z.enum(["MACOS", "LINUX", "WINDOWS", "OTHER"]),
    /** Human comparison code shown by both the CLI and browser */
    comparisonCode: z.string(),
    /** Time the CLI acknowledged durable local storage */
    consumedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Authorization request creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Time after which an unfinished request cannot be approved */
    expiresAt: z.iso.datetime({ offset: true }),
    /** Public authorization request identifier */
    id: z.uuid(),
    /** Minimum server-directed poll interval in seconds */
    intervalSeconds: z.number().int().min(1),
    /** Time encrypted key delivery became available */
    keyReadyAt: z.iso.datetime({ offset: true }).nullish(),
    /** Current broker lifecycle state */
    status: z.enum([
        "PENDING",
        "ISSUING",
        "KEY_READY",
        "REVOKING",
        "CONSUMED",
        "REVOKED",
        "DENIED",
        "EXPIRED",
        "FAILED",
    ]),
    /** Time this request entered its terminal state */
    terminalAt: z.iso.datetime({ offset: true }).nullish(),
    /** Non-secret terminal-state explanation */
    terminalReason: CliAuthorizationTerminalReasonSchema.nullish(),
    /** Most recent lifecycle update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * Browser-approved CLI authorization metadata. Secret poll and encrypted-delivery material are exposed only by their dedicated one-time response contracts.
 *
 * @openapiSchema CliAuthorization
 * @endpoint GET /v1/app/cli-authorizations
 * @endpoint GET /v1/app/cli-authorizations/{cliAuthorizationId}
 * @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/approve
 * @endpoint POST /v1/app/cli-authorizations/{cliAuthorizationId}/deny
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/acknowledge
 * @endpoint DELETE /v1/app/cli-authorizations/{cliAuthorizationId}
 * @usedBySchema PageCliAuthorizationSchema
 * @contractShape cli.authorization
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
 */
export const CliAuthorizationSchema = CliAuthorizationSchemaDefinition;
//# sourceMappingURL=authorization.js.map