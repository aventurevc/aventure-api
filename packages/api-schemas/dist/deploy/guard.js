// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const DeployGuardSchemaDefinition = z.object({
    /** Whether a deploy operation currently holds the guard */
    active: z.boolean(),
    /** When the in-progress deploy operation's guard lapses if its owner stops renewing; absent when no operation holds the guard */
    expiresAt: z.iso.datetime({ offset: true }).nullish(),
    /** Identity of the operation holding the guard, matching the operationId stamped on every audit event it records; absent when no operation holds the guard */
    operationId: z.uuid().nullish(),
});
/**
 * Mutual-exclusion state of the deploy control plane
 *
 * @openapiSchema DeployGuard
 * @endpoint GET /v1/deploy/guard
 * @contractShape deploy.guard
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export const DeployGuardSchema = DeployGuardSchemaDefinition;
//# sourceMappingURL=guard.js.map